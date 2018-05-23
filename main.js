function addition(){
    let addNumberOne = prompt("What is the first number you'd like to add?");
    let addNumberTwo = prompt("What is the number you'd like to add to number one?");
    let addValue = parseInt(addNumberOne) + parseInt(addNumberTwo);
    alert(`After adding your two numbers together, I got ${addValue}`);
    reset();
}
function subtraction(){
    let subtractNumberOne = prompt("What is the first number you'd like to subtract?");
    let subtractNumberTwo = prompt("What is the number you'd like to subtract from to number one?");
    let subtractValue = parseInt(subtractNumberOne) - parseInt(subtractNumberTwo);
    alert(`After subtracting your second number from your first number, I got ${subtractValue}`);
    reset();
}
function multiplication(){
    let multiplyNumberOne = prompt("What is the first number you'd like to multiply?");
    let multiplyNumberTwo = prompt("What is the number you'd like to multiply to number one?");
    let multiplyValue = parseInt(multiplyNumberOne) * parseInt(multiplyNumberTwo);
    alert(`After multiplying your two numbers, I got ${multiplyValue}`);
    reset();
}
function division(){
    let divideNumberOne = prompt("What is the first number you'd like to divide?");
    let divideNumberTwo = prompt("What is the number you'd like to divide number one by?");
    let divideValue = parseInt(divideNumberOne) / parseInt(divideNumberTwo);
    alert(`After adding your two numbers together, I got ${divideValue}`);
    reset();
}
function mainMenu(){
let operation = prompt("What operation will you be needing today?");
if (operation === "addition"){
    addition();
}
else if (operation === "subtraction"){
    subtraction();
}
else if (operation === "multiplication"){
    multiplication();
}
else if (operation === "division"){
    division();
} 
else {
    alert("Sorry, that is not a valid choice. Please select 'addition', 'subtraction', 'multiplication', or 'division'.");
}
}
function reset(){
let startOver = prompt("If you would like to start over, type 'main'. If not, just click 'cancel'.");
if (startOver === "main"){
    mainMenu();
}
}
mainMenu();