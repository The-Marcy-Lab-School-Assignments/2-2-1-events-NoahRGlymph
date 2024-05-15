// Get a reference to the button and results paragraph
const button = document.getElementById('add-one');
const resultsParagraph = document.getElementById('results');

// Define the click event listener function
const incrementCounter = () => {
  // Get the current value of the counter from the paragraph's text content
  let currentValue = parseInt(resultsParagraph.textContent);
  
  // Increment the counter by 1
  currentValue += 1;
  
  // Update the text content of the paragraph with the new counter value
  resultsParagraph.textContent = currentValue;
};

// Add click event listener to the button
button.addEventListener('click', incrementCounter);
