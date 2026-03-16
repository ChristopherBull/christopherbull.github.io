// Scroll publication details into view on open/close

document.addEventListener('DOMContentLoaded', function () {
  var cards = document.querySelectorAll('.projectCardExpandable');
  // Match CSS reduced-motion behavior for programmatic scrolling.
  var reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getScrollBehavior() {
    return reduceMotionQuery.matches ? 'auto' : 'smooth';
  }

  function scrollIntoViewIfNeeded(element, target, options) {
    if (!element || !target) {
      return;
    }

    var rect = element.getBoundingClientRect();
    var viewHeight = window.innerHeight || document.documentElement.clientHeight;
    var behavior = getScrollBehavior();
    var bottomPadding = (options && options.bottomPadding) || 16;
    var extraOffset = 0;
    var triggerOnBottomOverflow = !options || options.triggerOnBottomOverflow !== false;

    // Use typographic units so reveal positioning scales with text size.
    if (options && options.extraOffsetEm) {
      var offsetElement = options.offsetElement || element;
      var fontSize = parseFloat(window.getComputedStyle(offsetElement).fontSize) || 16;
      extraOffset = fontSize * options.extraOffsetEm;
    }

    var startAboveViewport = rect.top < 0;
    var startBelowViewport = rect.top > viewHeight;
    var bottomOverflow = rect.bottom > viewHeight;

    if (startAboveViewport || startBelowViewport || (triggerOnBottomOverflow && bottomOverflow)) {
      // Keep upward recovery predictable: restore the top reading context.
      if (startAboveViewport) {
        target.scrollIntoView({ behavior: behavior, block: 'start' });
        return;
      }

      if (options && options.preferMinimalBelowScroll) {
        // For below-screen reveals, move only enough to expose new content.
        window.scrollBy({
          top: rect.top - viewHeight + bottomPadding + extraOffset,
          behavior: behavior,
        });
        return;
      }

      // Default below-screen behavior for non-reveal paths.
      target.scrollIntoView({ behavior: behavior, block: 'end' });
    }
  }

  cards.forEach(function (card) {
    // Opening and closing use different anchors because the user's visual context changes.
    var openAnchor = card.querySelector('.projectAbstract') || card.querySelector('.projectCardReveal');
    var openTarget = openAnchor;
    var closedAnchor = card.querySelector('.projectTitle');

    card.addEventListener('toggle', function () {
      if (card.open) {
        // Opening prioritizes exposing the abstract, while preserving nearby metadata.
        scrollIntoViewIfNeeded(openAnchor, openTarget, {
          preferMinimalBelowScroll: true,
          extraOffsetEm: 1.5,
          offsetElement: openAnchor,
          triggerOnBottomOverflow: false,
        });
      } else {
        // Closing re-centres the publication identity (title) as the primary context.
        scrollIntoViewIfNeeded(closedAnchor, card);
      }
    });
  });
});
