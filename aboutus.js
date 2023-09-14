const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const errorContainer = document.querySelector('#error-container');
    const successMessage = document.querySelector('#success-message');

    // Reset error and success messages
    errorContainer.style.display = 'none';
    successMessage.style.display = 'none';

    // Validate name (non-empty)
    if (nameInput.value.trim() === '') {
        errorContainer.textContent = 'Name is required';
        errorContainer.style.display = 'block';
        nameInput.focus();
        return false;
    }

    // Find the "Team" link in the navigation
// Function to handle smooth scrolling to a target section
function smoothScrollTo(targetId) {
    const targetSection = document.getElementById(targetId);
  
    if (!targetSection) return;
  
    const targetPosition = targetSection.getBoundingClientRect().top;
    const duration = 1000; // Adjust the duration as needed
    const startTime = performance.now();
  
    function scroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newPosition = targetPosition * progress;
      window.scrollTo(0, newPosition);
  
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }
  
    requestAnimationFrame(scroll);
  }
  
  // Find all navigation links that point to sections
  const navLinks = document.querySelectorAll('nav a');
  
  // Add click event listeners to the navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScrollTo(targetId);
    });
  });
  

    // Validate email (non-empty and valid format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
        errorContainer.textContent = 'Valid email address is required';
        errorContainer.style.display = 'block';
        emailInput.focus();
        return false;
    }

    // Validate message (non-empty)
    if (messageInput.value.trim() === '') {
        errorContainer.textContent = 'Message is required';
        errorContainer.style.display = 'block';
        messageInput.focus();
        return false;
    }

    // If all validations pass, show success message
    successMessage.style.display = 'block';
    return true;

// Add event listener to the form submission
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    if (validateForm()) {
        // You can add code here to submit the form data to a server if needed
        // For now, we'll just show a success message
        alert('Form submitted successfully!');
    }
});

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Your form validation logic here...
    // For example, check if all required fields are filled correctly

    // Simulate form submission success for demonstration
    const isFormValid = true; // Replace this with your actual form validation logic

    if (isFormValid) {
        // Show the success message and hide the error message
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        // You can also reset the form here if needed
        // contactForm.reset();
    } else {
        // Show the error message and hide the success message
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});