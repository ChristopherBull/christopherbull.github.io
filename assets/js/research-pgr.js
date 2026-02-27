// Cache for card metadata to avoid repeated DOM queries
const cardMetadata = new Map();
let cachedDOMElements = {};

// Enhanced click handling for PhD supervision cards
// Allows clicking on expanded content to collapse the card,
// not just the summary section.

document.addEventListener('DOMContentLoaded', function() {
  // Cache important DOM elements
  cachedDOMElements = {
    allCards: document.querySelectorAll('.phdCard'),
    filterContainers: {
      theme: document.querySelector('[data-filter-type="theme"]'),
      method: document.querySelector('[data-filter-type="method"]'),
      context: document.querySelector('[data-filter-type="context"]'),
      supervision: document.querySelector('[data-filter-type="supervision"]')
    },
    filterClear: document.querySelector('.phdFilterClear'),
    filterElement: document.querySelector('.phdFilter'),
    filterContent: document.querySelector('.phdFilterContent')
  };

  // Add ARIA attributes to details elements
  document.querySelectorAll('.phdCard, .phdFilter').forEach(function(details) {
    const summary = details.querySelector('summary');
    if (summary) {
      summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');

      // Update aria-expanded when details is toggled
      details.addEventListener('toggle', function() {
        summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
      });
    }
  });

  // Add click handlers to all expanded detail sections
  const detailsSections = document.querySelectorAll('.phdDetails');

  detailsSections.forEach(function(detailsSection) {
    detailsSection.addEventListener('click', function(event) {
      // Find the parent details element
      const detailsElement = this.closest('.phdCard');

      if (detailsElement && detailsElement.open) {
        // Close the details element
        detailsElement.open = false;
        event.stopPropagation();
      }
    });
  });

  // Cache card metadata on page load
  cacheCardMetadata();

  // Initialize filter system
  initializeFilters();

  // Initialize scroll affordances for methods filter
  initializeScrollAffordances();
});

function cacheCardMetadata() {
  cachedDOMElements.allCards.forEach(card => {
    const themes = Array.from(card.querySelectorAll('.phdTheme')).map(el => el.textContent.trim());
    const methods = Array.from(card.querySelectorAll('.phdMethod')).map(el => el.textContent.trim());
    const contexts = Array.from(card.querySelectorAll('.phdContext')).map(el => el.textContent.trim());
    const isCoSupervised = card.querySelector('.phdCoSupervised') !== null;
    const supervisionType = isCoSupervised ? 'Co-supervised' : 'Primary supervisor';

    cardMetadata.set(card, {
      themes,
      methods,
      contexts,
      supervisionType
    });
  });
}

function initializeFilters() {
  // Extract filter options from cached metadata
  const filters = {
    theme: new Set(),
    method: new Set(),
    context: new Set(),
    supervision: new Set(['Primary supervisor', 'Co-supervised'])
  };

  cardMetadata.forEach(metadata => {
    metadata.themes.forEach(theme => filters.theme.add(theme));
    metadata.methods.forEach(method => filters.method.add(method));
    metadata.contexts.forEach(context => filters.context.add(context));
  });

  // Create checkboxes for each filter type
  Object.keys(cachedDOMElements.filterContainers).forEach(type => {
    const container = cachedDOMElements.filterContainers[type];
    const options = filters[type];

    Array.from(options).sort().forEach(option => {
      const checkboxId = `filter-${type}-${option.toLowerCase().replace(/\s+/g, '-')}`;
      const wrapper = document.createElement('div');
      wrapper.className = 'phdFilterOption';

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = checkboxId;
      input.dataset.filterType = type;
      input.dataset.filterValue = option;

      const label = document.createElement('label');
      label.htmlFor = checkboxId;
      label.textContent = option;

      wrapper.appendChild(input);
      wrapper.appendChild(label);
      container.appendChild(wrapper);
    });
  });

  // Use event delegation on filter content instead of individual listeners
  cachedDOMElements.filterContent.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox' && event.target.dataset.filterType) {
      applyFilters();
    }
  });

  // Clear button
  cachedDOMElements.filterClear.addEventListener('click', clearFilters);
}

function matchesFilterCategory(cardMetadata, selectedFilters, category) {
  if (selectedFilters.length === 0) return true;

  const cardCategory = category === 'supervision'
    ? [cardMetadata.supervisionType]
    : cardMetadata[category + 's'];

  return selectedFilters.some(filter => cardCategory.includes(filter));
}

function applyFilters() {
  const activeFilters = {
    theme: [],
    method: [],
    context: [],
    supervision: []
  };

  // Collect active filter selections
  document.querySelectorAll('[data-filter-type]:checked').forEach(checkbox => {
    const type = checkbox.dataset.filterType;
    const value = checkbox.dataset.filterValue;
    activeFilters[type].push(value);
  });

  // Show/hide cards based on filters
  let visibleCount = 0;

  cardMetadata.forEach((metadata, card) => {
    const shouldShow =
      matchesFilterCategory(metadata, activeFilters.theme, 'theme') &&
      matchesFilterCategory(metadata, activeFilters.method, 'method') &&
      matchesFilterCategory(metadata, activeFilters.context, 'context') &&
      matchesFilterCategory(metadata, activeFilters.supervision, 'supervision');

    if (shouldShow) {
      card.classList.remove('phdCardHidden');
      visibleCount++;
    } else {
      card.classList.add('phdCardHidden');
    }
  });

  // Announce results to screen readers
  announceFilterResults(visibleCount, cardMetadata.size);

  // Hide h3 elements with no visible phdCard children
  document.querySelectorAll('h3').forEach(h3 => {
    const nextElement = h3.nextElementSibling;
    if (nextElement && nextElement.classList.contains('phdGrid')) {
      const visibleCards = nextElement.querySelectorAll('.phdCard:not(.phdCardHidden)');
      h3.style.display = visibleCards.length > 0 ? '' : 'none';
    }
  });
}

function clearFilters() {
  document.querySelectorAll('[data-filter-type]:checked').forEach(checkbox => {
    checkbox.checked = false;
  });
  applyFilters();
}

function announceFilterResults(visibleCount, totalCount) {
  // Create or update live region for screen reader announcements
  let liveRegion = document.getElementById('filter-live-region');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'filter-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
  }

  const message = visibleCount === totalCount
    ? `Showing all ${totalCount} PhD researchers`
    : `Showing ${visibleCount} of ${totalCount} PhD researchers`;

  liveRegion.textContent = message;

  // Update pre-created status display element - only update text, not structure
  const statusDisplay = document.getElementById('phd-filter-status');
  if (statusDisplay) {
    const icon = statusDisplay.querySelector('.phdFilterStatusIcon');
    const text = statusDisplay.querySelector('.phdFilterStatusText');

    if (visibleCount === totalCount) {
      statusDisplay.style.display = 'none';
    } else if (visibleCount === 0) {
      statusDisplay.style.display = 'flex';
      icon.className = 'fas fa-inbox phdFilterStatusIcon';
      text.textContent = 'No PhD researchers match your filters';
    } else {
      statusDisplay.style.display = 'flex';
      icon.className = 'fas fa-filter phdFilterStatusIcon';
      text.textContent = `Showing ${visibleCount} of ${totalCount} PhD researchers`;
    }
  }
}

function initializeScrollAffordances() {
  const methodsFilterOptions = document.querySelector('[data-filter-type="method"]');
  if (!methodsFilterOptions) return;

  const methodsFilterGroup = methodsFilterOptions.closest('.phdFilterGroup');
  if (!methodsFilterGroup) return;

  function updateScrollAffordances() {
    const { scrollTop, scrollHeight, clientHeight } = methodsFilterOptions;
    const isScrollable = scrollHeight > clientHeight;

    if (!isScrollable) {
      // No need for affordances if content doesn't scroll
      methodsFilterGroup.removeAttribute('data-scroll-top');
      methodsFilterGroup.removeAttribute('data-scroll-bottom');
      return;
    }

    const isAtTop = scrollTop <= 5; // Small threshold for rounding errors
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;

    // Show top shadow if not at top and can scroll up
    if (!isAtTop) {
      methodsFilterGroup.setAttribute('data-scroll-top', 'true');
    } else {
      methodsFilterGroup.removeAttribute('data-scroll-top');
    }

    // Show bottom shadow if not at bottom and can scroll down
    if (!isAtBottom) {
      methodsFilterGroup.setAttribute('data-scroll-bottom', 'true');
    } else {
      methodsFilterGroup.removeAttribute('data-scroll-bottom');
    }
  }

  // Update on scroll
  methodsFilterOptions.addEventListener('scroll', updateScrollAffordances);

  // Update on content changes (when filters are populated)
  const observer = new MutationObserver(updateScrollAffordances);
  observer.observe(methodsFilterOptions, { childList: true, subtree: true });

  // Initial update with a slight delay to ensure content is rendered
  setTimeout(updateScrollAffordances, 100);
}
