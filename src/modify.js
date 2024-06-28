// Define the clickCounterHandler function
const clickCounterHandler = () => {
  const button = document.querySelector('#click-button'); // Select the button element

  // Get the current number of clicks from the data-clicks attribute
  let clicks = parseInt(button.getAttribute('data-clicks')) || 0;
  
  // Increment the number of clicks
  clicks += 1;

  // Update the data-clicks attribute with the updated number of clicks
  button.setAttribute('data-clicks', clicks.toString());

  // Update the text content of the button to display the number of clicks
  button.textContent = `I've been clicked ${clicks} ${clicks === 1 ? 'time.' : 'times!'}`;
};

// Define the clickCounterHandler function
const clickCounterHandler2 = () => {
  const button = document.querySelector('#incline-button'); // Select the button element

  // Get the current number of clicks from the data-clicks attribute
  let clicks = parseInt(button.getAttribute('data-clicks')) || 0;
  
  // Increment the number of clicks
  clicks += 1;

  // Update the data-clicks attribute with the updated number of clicks
  button.setAttribute('data-clicks', clicks.toString());

  // Update the text content of the button to display the number of clicks
  button.textContent = `I've been clicked ${clicks} ${clicks === 1 ? 'time.' : 'times!'}`;
};

// Add event listener to the button
document.querySelector('#click-button').addEventListener('click', clickCounterHandler);
 //error where which question

const handleKeydown = (event) => {
  const keyCode = event.code; // Get the key code of the last key pressed
  const pTag = document.querySelector('#keydown-tracker'); // Select the p tag
  console.log(pTag)
  console.log(keyCode)
  // Modify the text content of the p tag to display the key code
  pTag.textContent = `You pressed ${keyCode}`;
};


// Add key event listener to the body
document.body.addEventListener('keydown', handleKeydown);


const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  
  // Check if the clicked element is a button
  if (event.target.nodeName === 'BUTTON') {
    resultSpan.textContent = event.target.textContent;
  }
};

// Add event listener to the delegation container
const delegationContainer = document.querySelector('#delegation');
delegationContainer.addEventListener('click', handleDelegation);

// Function to remove the delegation click event listener
const removeDelegationListener = () => {
  delegationContainer.removeEventListener('click', handleDelegation);
};

// Add click event listener to the #remove button
document.querySelector('#remove').addEventListener('click', removeDelegationListener);



const addNewRandomNumber = () => {
  const ul = document.querySelector('#numbersUl'); // Select the ul element
  
  // Generate a random number greater than 0
  const randomNumber = Math.ceil(Math.random() * 100); // Adjust 100 to your desired maximum number
  
  // Create a new list item element
  const li = document.createElement('li');
  li.textContent = randomNumber; // Set the text content of the list item to the random number
  
  // Append the new list item to the ul element
  ul.appendChild(li);
};

// Add click event listener to the #add-random-num button
document.querySelector('#add-random-num').addEventListener('click', addNewRandomNumber);



// const main = () => {
//   const delegationContainer = document.querySelector('#delegation');

//   delegationContainer.addEventListener('click', handleDelegation);
// };

// main();
