// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const newElement = document.createElement('p');
  newElement.textContent = text;
  container.appendChild(newElement);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

function simulateClick(containerId, text) {
  addElementToDOM(containerId, text);
}

function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  const input = document.getElementById('user-input');
  const errorElement = document.getElementById('error-message');

  const value = input.value.trim();

  if (value === '') {
    errorElement.textContent = 'Input cannot be empty';
    errorElement.classList.remove('hidden');
  } else {
    errorElement.classList.add('hidden');
    addElementToDOM(containerId, value);
    input.value = ''; // Clear input
  }
}

// Set up event listeners if the DOM is available
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('simulate-click');
    if (clickBtn) {
      clickBtn.addEventListener('click', () => {
        simulateClick('dynamic-content', 'Button Clicked!');
      });
    }

    const userForm = document.getElementById('user-form');
    if (userForm) {
      userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit('user-form', 'dynamic-content');
      });
    }
  });
}

// Export functions for testing
if (typeof module !== 'undefined') {
  module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
  };
}
