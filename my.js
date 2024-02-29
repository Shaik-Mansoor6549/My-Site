// Debounce function for scroll event
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Progress bar Effect
  const navbar = document.querySelector(".navbar");
  const navbarOffsetTop = navbar.offsetTop;
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll(".navbar-link");
  const progress = document.querySelector(".progress-bars-wrapper");
  const progressBarPercents = [97, 90, 82, 60, 48];
  
  // Debounced main function for scroll event
  const debouncedMainFn = debounce(() => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= navbarOffsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  
    sections.forEach((section, i) => {
      if (scrollPosition >= section.offsetTop - 10) {
        navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("change");
        });
        navbarLinks[i].classList.add("change");
      }
    });
  
    if (scrollPosition + window.innerHeight >= progress.offsetTop) {
      document.querySelectorAll(".progress-percent").forEach((el, i) => {
        el.style.width = `${progressBarPercents[i]}%`;
        el.previousElementSibling.firstElementChild.textContent =
          progressBarPercents[i];
      });
    }
  }, 100); // Adjust debounce delay as needed
  
  window.addEventListener("scroll", debouncedMainFn);
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
  
  // Typing and Deleting Effect
  const _CONTENT = ["FRONT-END DEVELOPER", "CAD DESIGNER", "UI DESIGNER"];
  let _PART = 0;
  let _PART_INDEX = 0;
  const _ELEMENT = document.querySelector("#text-name");
  const _CURSOR = document.querySelector("#cursor");
  
  function Type() {
    const text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;
    if (text === _CONTENT[_PART]) {
      _CURSOR.style.display = 'none';
      clearInterval(_INTERVAL_VAL);
      setTimeout(() => {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  }
  
  function Delete() {
    const text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;
    if (text === '') {
      clearInterval(_INTERVAL_VAL);
      _PART = (_PART == (_CONTENT.length - 1)) ? 0 : _PART + 1;
      _PART_INDEX = 0;
      setTimeout(() => {
        _CURSOR.style.display = 'inline-block';
        _INTERVAL_VAL = setInterval(Type, 100);
      }, 200);
    }
  }
  
  let _INTERVAL_VAL = setInterval(Type, 100);
  
  // Lazy loading (example with images)
  document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyLoad = () => {
      lazyImages.forEach(img => {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
    };
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    lazyLoad();
  });
  
