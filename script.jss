// ====================================================================================
// Part 1: JavaScript Basics - Variables, Data Types, Operators, and Conditionals
// ====================================================================================

// Variable Declarations and Data Types
const maxNumber = 5;
let currentCount = 3;
let hasReachedMax = false;
let message = "";

// A simple conditional statement
if (currentCount >= maxNumber) {
    hasReachedMax = true;
    message = "You have reached the maximum count!";
} else {
    message = "You are still counting...";
}

// Outputting to the console for demonstration
console.log("Part 1: JavaScript Basics");
console.log(Current Count: ${currentCount});
console.log(Has reached max? ${hasReachedMax});
console.log(Message: ${message});

// Interacting with a DOM element (using a selector from Part 4's logic)
const outputTextElement = document.getElementById('output-text');
outputTextElement.textContent = message;


// ====================================================================================
// Part 2: JavaScript Functions - The Heart of Reusability
// ====================================================================================

// Custom Function 1: Calculates a total with tax
function calculateTotal(price, taxRate) {
    const taxAmount = price * taxRate;
    const total = price + taxAmount;
    return total;
}

// Custom Function 2: Toggles a CSS class
function toggleBoxStyle() {
    const toggleBox = document.getElementById('toggle-box');
    // Using classList.toggle() for a clean solution
    toggleBox.classList.toggle('toggled');
}

// Custom Function 3: Creates a list item (to be used in a loop)
function createListItem(itemText) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    return listItem;
}

// Demonstration of function calls
const itemPrice = 50;
const salesTax = 0.07; // 7%
const finalPrice = calculateTotal(itemPrice, salesTax);
console.log("\nPart 2: JavaScript Functions");
console.log(The final price is $${finalPrice.toFixed(2)});


// ====================================================================================
// Part 3: JavaScript Loops - Embrace the Power of Repetition
// ====================================================================================

console.log("\nPart 3: JavaScript Loops");

// Loop Example 1: Basic for loop
console.log("Basic for loop counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(Count: ${i});
}

// Loop Example 2: Iterating through an array and creating DOM elements
const itemsArray = ["Laptop", "Monitor", "Keyboard", "Mouse"];
const itemList = document.getElementById('item-list');

document.getElementById('generate-list-btn').addEventListener('click', () => {
    // Clear any existing list items before generating
    itemList.innerHTML = ''; 
    
    // Loop through the array and add each item to the DOM
    itemsArray.forEach(item => {
        const newItem = createListItem(item); // Use the function from Part 2
        itemList.appendChild(newItem);
    });
});


// ====================================================================================
// Part 4: Mastering the DOM with JavaScript
// ====================================================================================

console.log("\nPart 4: DOM Manipulation");

// DOM Interaction 1: Select and change element text
const domParagraph = document.getElementById('dom-paragraph');
domParagraph.textContent = "This paragraph's text has been updated by a script!";

// DOM Interaction 2: Respond to a click event
const changeTextBtn = document.getElementById('change-text-btn');
changeTextBtn.addEventListener('click', () => {
    domParagraph.textContent = "You clicked the button and the text changed again!";
    // DOM Interaction 3: Toggling a CSS class on click
    toggleBoxStyle(); // Use the function from Part 2 to toggle the class
});