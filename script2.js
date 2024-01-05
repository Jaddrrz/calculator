let firstNumber 
let secondNumber

let prevOperator
let currentOperator

let displayValue = "0"
let result
let operationCount = 0
let equalsWasPressed = false
let numberWasPressed

let currentNumber = 0
let prevNumber = 0

function add(a, b) {
    return result = a + b
}

function subtract(a, b) {
    return result = a - b
}

function multiply(a, b) {
    return result = a * b
}

function divide(a, b) {
    if (b == 0) {
        return result = null
    } else {
        return result = a / b
}}

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber)
            break
        case "-":
            subtract(firstNumber, secondNumber)
            break
        case "x":
            multiply(firstNumber, secondNumber)
            break
        case ":":
            divide(firstNumber, secondNumber)
            break
    }
}
        
const display = document.querySelector(".display")

//Populate display with digits

const numberButtons = document.querySelectorAll(".digit");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (displayValue == "0") {
            displayValue = ""
        }
        
        displayValue += button.textContent;
        display.textContent = displayValue; 
        numberWasPressed = true
    });
});

//Add operators functions

const operators = document.querySelectorAll(".operator")
operators.forEach((operation) => {
    operation.addEventListener("click", () => {
        // if (numberWasPressed == true) {
            if (operationCount == 0) {
            prevNumber = parseInt(display.textContent)
            prevOperator = operation.textContent
            currentOperator = operation.textContent
            }

            displayValue = ""

            if (operationCount > 0 && equalsWasPressed == false) {
                currentOperator = operation.textContent
                currentNumber = parseInt(display.textContent)
                operate(prevNumber, prevOperator, currentNumber)
                display.textContent = result
                prevNumber = result
            }

            if (operationCount > 0 && equalsWasPressed == true) {
                currentOperator = operation.textContent  
                currentNumber = parseInt(display.textContent)
                console.log(prevNumber)
                console.log(currentNumber)
                operate(prevNumber, prevOperator, currentNumber)
                display.textContent = result
                prevNumber = result
            }

            operationCount += 1
            numberWasPressed = false
    })
})

//Operate with "equals" button

const equalsBtn = document.querySelector("#equals")
equalsBtn.addEventListener("click", () => {
    currentNumber = parseInt(displayValue)
    operate(prevNumber, currentOperator, currentNumber)
    display.textContent = result
    equalsWasPressed = true
    numberWasPressed = false
    operationCount = 0
})

//Add clear function to clear button

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    displayValue = ""
    display.textContent = "0"
    prevOperator = ""
    currentOperator = ""
    currentNumber = ""
    prevNumber = ""
    operationCount = 0
    equalsWasPressed = false
    numberWasPressed = false
})