// Enhanced click handling for PhD supervision cards
// Allows clicking on expanded content to collapse the card,
// not just the summary section.

document.addEventListener('DOMContentLoaded', function() {
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
});
