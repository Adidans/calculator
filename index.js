const lowerDisplay = document.querySelector('.lowerDisplay');
const upperDisplay = document.querySelector('.upperDisplay');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals')
let operation;
let firstNum;
let lastPressedIsOperator = false;
upperDisplay.textContent = '';
lowerDisplay.textContent = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        upperDisplay.textContent += number.textContent;
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        firstNum = upperDisplay.textContent;
        operation = operator.textContent;
        upperDisplay.textContent += operation;
    })
})

function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    if (operator === "+"){
        return add(a,b);
    }
    if(operator === "-"){
        return subtract(a,b);
    }
    if (operator === "*") {
        return multiply(a,b);
    }
    if (operator === "/") {
        return divide(a,b);
    }
}