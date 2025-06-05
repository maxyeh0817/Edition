(function() {
  "use strict";

  var mainNav = document.querySelector('#mainNav.change_nav_color'); // <= 只選這種

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      var navbarItems = navbarCollapse.querySelectorAll('a');
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {
      var scrollTop = window.pageYOffset !== undefined 
        ? window.pageYOffset 
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    collapseNavbar();
    document.addEventListener("scroll", collapseNavbar);
  }

  // bageutteBox init
  if (document.getElementsByClassName('popup-gallery').length > 0) {
    baguetteBox.run('.popup-gallery', { animation: 'slideIn' });
  }

})(); // End of use strict