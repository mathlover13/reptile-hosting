const mediaQuery = window.matchMedia('(max-width: 768px)');

// 2. Define the function you want to run
function handleBreakpointChange(e) {
  if (e.matches) {
    // Current viewport matches the CSS query (e.g., screen is <= 768px wide)
    console.log('Mobile view triggered!');
  } else {
    console.log('Desktop view triggered!');
  }
}
