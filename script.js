//HTML Selector Variables
let messageBox = document.querySelector(".message");
let replaceText = document.querySelector(".replace-button");
let addText = document.querySelector(".add-button");
let input = document.querySelector("input");

// task 1: assign the replaceText selector to the onclick event
replaceText.onclick = function() {
    let userInput = input.value;

// task 2: write the code needed to replace the text for the `message` selector. 
 
messageBox.innerHTML = userInput;
  
// task 3: press Run and test the .innerHTML button with a couple messages!
};



// task 4: assign the addText selector to the onclick event
addText.onclick = function() {
    let userInput = `<p>${input.value}</p>`;
  
// task 5: write the code needed to add text to the `message` selector. 

  messageBox.insertAdjacentHTML("beforeend",userInput); 

  
// task 6: press Run and test the .insertAdjacentHTML button with a couple messages!
};