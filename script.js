// Function to toggle animation and store preference in localStorage
function toggleAnimation() {
  const button = document.getElementById('animateButton');
  const image = document.getElementById('imageElement');
  
  // Toggle animation on the button
  button.classList.toggle('animated');

  // Check if the button has the animation class and store in localStorage
  if (button.classList.contains('animated')) {
    localStorage.setItem('animation', 'enabled');
  } else {
    localStorage.setItem('animation', 'disabled');
  }
}

// Check the user's preference on page load and apply it
window.onload = () => {
  const button = document.getElementById('animateButton');
  
  // Retrieve stored preference from localStorage
  const animationStatus = localStorage.getItem('animation');
  
  // Apply animation based on stored preference
  if (animationStatus === 'enabled') {
    button.classList.add('animated');
  }
};
