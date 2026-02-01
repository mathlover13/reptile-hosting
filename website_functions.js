// this file holds all the code for the responsive navbar and the to top button

// -------------------------------- responsive navbar -------------------------------- //
// toggle hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ----------------------------------------------------------------------------------- //

// ---------------------------------- to top button ---------------------------------- //
let topbutton = document.getElementById("top_button"); // get the button from document

// when the user scrolls down, show the button (toggle it on)
window.onscroll = function() {scrollFunction()};

const scroll_amount = 120; // variable that triggers when the to top button shows after scrolling

function scrollFunction() {
  if (document.body.scrollTop > scroll_amount || document.documentElement.scrollTop > scroll_amount) {
    topbutton.style.display = "block";
  } 
  else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ----------------------------------------------------------------------------------- //

// check is used to fix image sizing issues on mobile
if(window.innerHeight > window.innerWidth) {
	// checking when website is put into portrait mode
	const matches = document.querySelector(":root");
	matches.style.setProperty('--image-width', '1vw + 250px');
}
