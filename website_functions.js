// this file contains the JS code for:
// - the responsive navbar
// - to top button
// - sizing adjustments made for mobile devices


// function that opens and closes the links within the hamburger menu
function show_menu() {
	// toggle hiding the navigation menu links when the user clicks on the hamburger menu
	var x = document.getElementById("navbar");
	if ( x.className === "topnav" ) { x.className += " responsive"; } 
	else { x.className = "topnav"; }
}

// ---------------------------------- to top button ---------------------------------- //

let topbutton = document.getElementById("top_button"); // get the button from document

// when the user scrolls down, show the button (toggle it on)
window.onscroll = function() { scrollFunction() };

const scroll_amount = 120; // variable that triggers when the to top button shows after scrolling

function scrollFunction() {
	if ( document.body.scrollTop > scroll_amount || document.documentElement.scrollTop > scroll_amount ) {
		topbutton.style.display = "block";
	} 
	else { topbutton.style.display = "none"; }
}

// When the user clicks on the button, scroll to the top of the document
function go_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// -------------------------------- end to top button -------------------------------- //

// check is used to fix image sizing issues in horizontal mode on mobile
if( window.innerHeight > window.innerWidth ) {
	// checking when website is put into portrait mode
	const matches = document.querySelector(":root");
	matches.style.setProperty('--image-width', '1vw + 250px');
}