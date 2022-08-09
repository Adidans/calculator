const lowerDisplay = document.querySelector('.lowerDisplay');
const upperDisplay = document.querySelector('.upperDisplay');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals')
let operation;
let firstNum = '';
let secondNum = '';
let operatorPressed = false;
let waitingForSecondNum = false;
let lastOperatorPressed;
let result;
upperDisplay.textContent = '';
lowerDisplay.textContent = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        upperDisplay.textContent += number.textContent;
        if(waitingForSecondNum === false){
            firstNum += number.textContent;
        }
        else{
            secondNum += number.textContent;
        }
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if(operatorPressed === true && waitingForSecondNum === true){
            upperDisplay.textContent = upperDisplay.textContent.replace(lastOperatorPressed, '');
            upperDisplay.textContent += operator.textContent;
        }
        else{
            operation = operator.textContent;
            upperDisplay.textContent += operation;
        }

        if (operator.textContent === '-' && waitingForSecondNum === false){
            firstNum = '0';
            upperDisplay.textContent += firstNum;
            upperDisplay.textContent = upperDisplay.textContent.replace('-', '');
            lastOperatorPressed = '-';
            upperDisplay.textContent += '-';
            waitingForSecondNum = true;
        }

        if (operatorPressed === true && waitingForSecondNum === true) {
            result = operate(firstNum, secondNum, lastOperatorPressed);
            lowerDisplay.textContent = result;
            firstNum = result;
            secondNum = '';
            upperDisplay.textContent = firstNum;
            upperDisplay.textContent += operator.textContent;
        }

        operatorPressed = true;
        waitingForSecondNum = true;
        lastOperatorPressed = operator.textContent;
    })
})

equals.addEventListener('click', () => {
    result = operate(firstNum, secondNum, lastOperatorPressed);
    if(secondNum === ''){
        operation = '';
        firstNum = '';
        secondNum = '';
        operatorPressed = false;
        waitingForSecondNum = false;
        lastOperatorPressed = '';
        result = '';
        upperDisplay.textContent = '';
        lowerDisplay.textContent = '';
    }
    else{
        lowerDisplay.textContent = result;
    }
    operatorPressed = false;
    waitingForSecondNum = false;
})

clear.addEventListener('click', function clear(){
    operation = '';
    firstNum = '';
    secondNum = '';
    operatorPressed = false;
    waitingForSecondNum = false;
    lastOperatorPressed = '';
    result = '';
    upperDisplay.textContent = '';
    lowerDisplay.textContent = '';
})

del.addEventListener('click', () => {
})

function add(a, b) {
    return parseFloat(a)+parseFloat(b);
}
function subtract(a, b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    if (b === "0"){
        alert("Can't divide by 0");
        operation = '';
        firstNum = '';
        secondNum = '';
        operatorPressed = false;
        waitingForSecondNum = false;
        lastOperatorPressed = '';
        result = '';
        upperDisplay.textContent = '';
        lowerDisplay.textContent = '';
    }
    return a/b;
}

function operate(a,b,operator) {
    if (operator === "+"){
        return add(a,b);
    }
    if(operator === "-"){
        return subtract(a,b);
    }
    if (operator === "×") {
        return multiply(a,b);
    }
    if (operator === "÷") {
        return divide(a,b);
    }
}