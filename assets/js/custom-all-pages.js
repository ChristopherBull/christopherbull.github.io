document.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
  // Accessibility fix: Update alt text of site-logo <img>
  // as there is no way to set alt text within theme's config.
  document
    .getElementById('site-nav')
    .getElementsByClassName('site-logo')[0]
    .firstElementChild.setAttribute('alt', 'Photo of Christopher Bull');
}
