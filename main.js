const firstField = document.querySelector(".valueOne");
const secondField = document.querySelector(".valueTwo");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const squaredButton = document.querySelector(".square")
let div = document.querySelector("div");
function additionButton(){
    let addValueOne = parseInt(firstField.value);
    let addValueTwo = parseInt(secondField.value);
    let addResult = addValueOne + addValueTwo; 
    let additionResult = document.createElement("P");
    let resultText = document.createTextNode(addResult);
    additionResult.appendChild(resultText);
    div.appendChild(additionResult);
}
function subtractionButton(){
    let subtractValueOne = parseInt(firstField.value);
    let subtractValueTwo = parseInt(secondField.value);
    let subtractResult = subtractValueOne - subtractValueTwo;
    let result = document.createElement("P");
    let resultText = document.createTextNode(subtractResult);
    result.appendChild(resultText);
    div.appendChild(result);
}
function multiplicationButton(){
    let multiplyValueOne = parseInt(firstField.value);
    let multiplyValueTwo = parseInt(secondField.value);
    let multiplyResult = multiplyValueOne * multiplyValueTwo;
    let result = document.createElement("P");
    let resultText = document.createTextNode(multiplyResult);
    result.appendChild(resultText);
    div.appendChild(result);
}
function divisionButton(){
    let divideValueOne = parseInt(firstField.value);
    let divideValueTwo = parseInt(secondField.value);
    let divideResult = divideValueOne / divideValueTwo;
    let result = document.createElement("P");
    let resultText = document.createTextNode(divideResult);
    result.appendChild(resultText);
    div.appendChild(result);
}
function squareButton(){
    let squareValueOne = parseInt(firstField.value);
    let squareResult = squareValueOne * squareValueOne;
    let result = document.createElement("P");
    let resultText = document.createTextNode(squareResult);
    result.appendChild(resultText);
    div.appendChild(result);
}

addButton.addEventListener("click", additionButton);
subtractButton.addEventListener("click", subtractionButton);
multiplyButton.addEventListener("click", multiplicationButton);
divideButton.addEventListener("click", divisionButton);
squaredButton.addEventListener("click", squareButton);
