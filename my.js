/* Progress bar Effect */
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 90, 82, 60, 48];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
	
		if (window.pageYOffset >= navbarOffsetTop) {
		  navbar.classList.add("sticky");
		} else {
		  navbar.classList.remove("sticky");
		}
	  
		sections.forEach((section, i) => {
		  if (window.pageYOffset >= section.offsetTop - 10) {
			navbarLinks.forEach((navbarLink) => {
			  navbarLink.classList.remove("change");
			});
			navbarLinks[i].classList.add("change");
		  }
		});
	  
		if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		  document.querySelectorAll(".progress-percent").forEach((el, i) => {
			el.style.width = `${progressBarPercents[i]}%`;
			el.previousElementSibling.firstElementChild.textContent =
			  progressBarPercents[i];
		  });
		}
	  };


mainFn();

/* Typing and Deleting Effect */
// ... (rest of the typing and deleting effect code remains the same)
var _CONTENT = [  
	"FRONT-END DEVELOPER",
    "CAD DESIGNER", 
	"UI DESIGNER"
];

var _PART = 0; // Current sentence being processed
var _PART_INDEX = 0; // Character number of the current sentence being processed 
var _INTERVAL_VAL; // Holds the handle returned from setInterval
var _ELEMENT = document.querySelector("#text-name"); // Element that holds the text
var _CURSOR = document.querySelector("#cursor"); // Cursor element 

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
// switching themes


document.addEventListener("DOMContentLoaded", function() {
  // ... (rest of the theme preference code remains the same)
  const themeToggleBtn = document.querySelector('.theme-toggle-btn');
	const body = document.body;
  
	themeToggleBtn.addEventListener('click', function() {
	  // Toggle dark mode class on the body
	  body.classList.toggle('dark-mode');
  
	  // Save the user's theme preference to localStorage
	  const isDarkMode = body.classList.contains('dark-mode');
	  localStorage.setItem('darkMode', isDarkMode);
	});
  
	// Check user's theme preference from localStorage
	const isDarkMode = localStorage.getItem('darkMode') === 'true';
	if (isDarkMode) {
	  body.classList.add('dark-mode');
	}
  });

  const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
