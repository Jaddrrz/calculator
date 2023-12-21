let sum = 0;
let subtraction = 0;
let multiplication = 1
let division = 1
let firstNumber 
let secondNumber
let operator
let displayValue1 = 0
let displayValue2 = ""
let result

const display = document.querySelector(".display")

function add(a, b) {
    sum = a + b;
    return result = sum
}

function subtract(a, b) {
    subtraction = a - b
    return result = subtraction
}

function multiply(a, b) {
    multiplication = a * b
    return result = multiplication
}

function divide(a, b) {
    division = a / b
    return result = division
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

const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    displayValue1 += "1"
    display.textContent = displayValue1
})

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    displayValue1 += "2"
    display.textContent = displayValue1
})

const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {
    displayValue1 += "3"
    display.textContent = displayValue1
})

const btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", () => {
    displayValue1 += "4"
    display.textContent = displayValue1
})

const btn5 = document.querySelector("#btn5")
btn5.addEventListener("click", () => {
    displayValue1 += "5"
    display.textContent = displayValue1
})

const btn6 = document.querySelector("#btn6")
btn6.addEventListener("click", () => {
    displayValue1 += "6"
    display.textContent = displayValue1
})

const btn7 = document.querySelector("#btn7")
btn7.addEventListener("click", () => {
    displayValue1 += "7"
    display.textContent = displayValue1
})

const btn8 = document.querySelector("#btn8")
btn8.addEventListener("click", () => {
    displayValue1 += "8"
    display.textContent = displayValue1
})

const btn9 = document.querySelector("#btn9")
btn9.addEventListener("click", () => {
    displayValue1 += "9"
    display.textContent = displayValue1
})

const btn0 = document.querySelector("#btn0")
btn0.addEventListener("click", () => {
    displayValue1 += "0"
    display.textContent = displayValue1
})

const plus = document.querySelector("#plus")
plus.addEventListener("click", () => {
    firstNumber = parseInt(displayValue1)
    display.textContent = 0
    btn1.addEventListener("click", () => {
        console.log(displayValue2)
        displayValue2 += "1"
        display.textContent = displayValue2
    })

    const btn2 = document.querySelector("#btn2")
    btn2.addEventListener("click", () => {
        displayValue2 += "2"
        display.textContent = displayValue2
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click", () => {
        displayValue2 += "3"
        display.textContent = displayValue2
    })

    const btn4 = document.querySelector("#btn4")
    btn4.addEventListener("click", () => {
        displayValue2 += "4"
        display.textContent = displayValue2
    })

    const btn5 = document.querySelector("#btn5")
    btn5.addEventListener("click", () => {
        displayValue2 += "5"
        display.textContent = displayValue2
    })

    const btn6 = document.querySelector("#btn6")
    btn6.addEventListener("click", () => {
        displayValue2 += "6"
        display.textContent = displayValue2
    })

    const btn7 = document.querySelector("#btn7")
    btn7.addEventListener("click", () => {
        displayValue2 += "7"
        display.textContent = displayValue2
    })

    const btn8 = document.querySelector("#btn8")
    btn8.addEventListener("click", () => {
        displayValue2 += "8"
        display.textContent = displayValue2
    })

    const btn9 = document.querySelector("#btn9")
    btn9.addEventListener("click", () => {
        displayValue2 += "9"
        display.textContent = displayValue2
    })

    const btn0 = document.querySelector("#btn0")
    btn0.addEventListener("click", () => {
        displayValue2 += "0"
        display.textContent = displayValue2
    })
    return operator = "+"
})

const minus = document.querySelector("#minus")
minus.addEventListener("click", () => {
    firstNumber = parseInt(displayValue1)
    display.textContent = 0
    btn1.addEventListener("click", () => {
        displayValue2 += "1"
        display.textContent = displayValue2
    })

    const btn2 = document.querySelector("#btn2")
    btn2.addEventListener("click", () => {
        displayValue2 += "2"
        display.textContent = displayValue2
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click", () => {
        displayValue2 += "3"
        display.textContent = displayValue2
    })

    const btn4 = document.querySelector("#btn4")
    btn4.addEventListener("click", () => {
        displayValue2 += "4"
        display.textContent = displayValue2
    })

    const btn5 = document.querySelector("#btn5")
    btn5.addEventListener("click", () => {
        displayValue2 += "5"
        display.textContent = displayValue2
    })

    const btn6 = document.querySelector("#btn6")
    btn6.addEventListener("click", () => {
        displayValue2 += "6"
        display.textContent = displayValue2
    })

    const btn7 = document.querySelector("#btn7")
    btn7.addEventListener("click", () => {
        displayValue2 += "7"
        display.textContent = displayValue2
    })

    const btn8 = document.querySelector("#btn8")
    btn8.addEventListener("click", () => {
        displayValue2 += "8"
        display.textContent = displayValue2
    })

    const btn9 = document.querySelector("#btn9")
    btn9.addEventListener("click", () => {
        displayValue2 += "9"
        display.textContent = displayValue2
    })

    const btn0 = document.querySelector("#btn0")
    btn0.addEventListener("click", () => {
        displayValue2 += "0"
        display.textContent = displayValue2
    })
    return operator = "-"
})

const times = document.querySelector("#times")
times.addEventListener("click", () => {
    firstNumber = parseInt(displayValue1)
    display.textContent = 0
    btn1.addEventListener("click", () => {
        displayValue2 += "1"
        display.textContent = displayValue2
    })

    const btn2 = document.querySelector("#btn2")
    btn2.addEventListener("click", () => {
        displayValue2 += "2"
        display.textContent = displayValue2
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click", () => {
        displayValue2 += "3"
        display.textContent = displayValue2
    })

    const btn4 = document.querySelector("#btn4")
    btn4.addEventListener("click", () => {
        displayValue2 += "4"
        display.textContent = displayValue2
    })

    const btn5 = document.querySelector("#btn5")
    btn5.addEventListener("click", () => {
        displayValue2 += "5"
        display.textContent = displayValue2
    })

    const btn6 = document.querySelector("#btn6")
    btn6.addEventListener("click", () => {
        displayValue2 += "6"
        display.textContent = displayValue2
    })

    const btn7 = document.querySelector("#btn7")
    btn7.addEventListener("click", () => {
        displayValue2 += "7"
        display.textContent = displayValue2
    })

    const btn8 = document.querySelector("#btn8")
    btn8.addEventListener("click", () => {
        displayValue2 += "8"
        display.textContent = displayValue2
    })

    const btn9 = document.querySelector("#btn9")
    btn9.addEventListener("click", () => {
        displayValue2 += "9"
        display.textContent = displayValue2
    })

    const btn0 = document.querySelector("#btn0")
    btn0.addEventListener("click", () => {
        displayValue2 += "0"
        display.textContent = displayValue2
    })
    return operator = "x"
})

const divided = document.querySelector("#divided")
divided.addEventListener("click", () => {
    firstNumber = parseInt(displayValue1)
    display.textContent = 0
    btn1.addEventListener("click", () => {
        displayValue2 += "1"
        display.textContent = displayValue2
    })

    const btn2 = document.querySelector("#btn2")
    btn2.addEventListener("click", () => {
        displayValue2 += "2"
        display.textContent = displayValue2
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click", () => {
        displayValue2 += "3"
        display.textContent = displayValue2
    })

    const btn4 = document.querySelector("#btn4")
    btn4.addEventListener("click", () => {
        displayValue2 += "4"
        display.textContent = displayValue2
    })

    const btn5 = document.querySelector("#btn5")
    btn5.addEventListener("click", () => {
        displayValue2 += "5"
        display.textContent = displayValue2
    })

    const btn6 = document.querySelector("#btn6")
    btn6.addEventListener("click", () => {
        displayValue2 += "6"
        display.textContent = displayValue2
    })

    const btn7 = document.querySelector("#btn7")
    btn7.addEventListener("click", () => {
        displayValue2 += "7"
        display.textContent = displayValue2
    })

    const btn8 = document.querySelector("#btn8")
    btn8.addEventListener("click", () => {
        displayValue2 += "8"
        display.textContent = displayValue2
    })

    const btn9 = document.querySelector("#btn9")
    btn9.addEventListener("click", () => {
        displayValue2 += "9"
        display.textContent = displayValue2
    })

    const btn0 = document.querySelector("#btn0")
    btn0.addEventListener("click", () => {
        displayValue2 += "0"
        display.textContent = displayValue2
    })
    return operator = ":"
})

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    secondNumber = parseInt(displayValue2)
    console.log(operator)
    console.log(firstNumber)
    console.log(secondNumber)
    operate(firstNumber, operator, secondNumber)
    display.textContent = result
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    display.textContent = 0
    console.log(displayValue1)
    console.log(displayValue2)
    displayValue1 = ""
    displayValue2 = ""
    console.log(displayValue1)
    console.log(displayValue2)
})
