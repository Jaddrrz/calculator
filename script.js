let sum = 0;
let subtraction = 0;
let multiplication = 1
let division = 1
let firstNumber 
let secondNumber
let operator

function add(a ,b) {
    return sum = a + b;
}

function subtract(a, b) {
    return subtraction = a - b
}

function multiply(a, b) {
    return multiplication = a * b
}

function divide(a, b) {
    return division = a / b
}

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