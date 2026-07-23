// this file contains the JS code for:
// - the responsive navbar + its buttons
// - to top button
// - sizing adjustments made for mobile devices

// check is used to fix image sizing issues in horizontal mode on mobile
if( window.innerHeight > window.innerWidth ) {
	// checking when website is put into portrait mode
	const matches = document.querySelector(":root");
	matches.style.setProperty('--image-width', '1vw + 250px');
}

// --------------------------------- navbar functions -------------------------------- //
// function adjusts the width of the ambassador dropdown to match the button's width
function set_adropdown_width() {
	// get button width currently displayed
	var ambassador_button= document.querySelector("#ambassador_button");
	var position_info = ambassador_button.getBoundingClientRect();
	var width = position_info.width;
	// change dropdown width
	var ambassador_dropdown = document.getElementById("ambassador_dropdown");
	ambassador_dropdown.style.width = width + "px";
}

// function that opens and closes the links within the hamburger menu
function show_menu() {
	// toggle hiding the navigation menu links when the user clicks on the hamburger menu
	var x = document.getElementById("navbar");
	if ( x.className === "topnav" ) { x.className += " responsive"; } 
	else { x.className = "topnav"; }
}
// ------------------------------- end navbar functions ------------------------------ //

// ---------------------------------- to top button ---------------------------------- //
let topbutton = document.getElementById("top_button"); // get the button from document
// when the user scrolls down, show the button (toggle it on)
window.onscroll = function() { scrollFunction() };
const scroll_amount = 120; // after scrolling x amount, show button

function scrollFunction() {
	if ( document.body.scrollTop > scroll_amount || document.documentElement.scrollTop > scroll_amount ) {
		topbutton.style.display = "block";
	} 
	else { 
		topbutton.style.display = "none"; 
	}
}
// When the user clicks on the button, scroll to the top of the document
function go_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// -------------------------------- end to top button -------------------------------- //

