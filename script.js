let a = '';
let b = '';
let o = '';
let result = '';

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const percent = (a, b) => a * (b / 100);


function operate(a, b, o) {
    if(o === '+') {return result = add(a, b)}
    else if(o === '-') {return result = subt(a, b)}
    else if(o === '/') {return result = divide(a, b)}
    else if(o === '*') {return result = multiply(a, b)}
    else if(o === '%') {return result = percent(a, b)}
    else if(o === '=') {return result}
}

function clearFunc(){
    return calculatorInput = '', 
    calculatorDisplay.innerText = '0'
}


const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const calculatorDisplay = document.querySelector(".calcDisplay");
const numberBtn = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operator');
let calculatorInput = '0'

clearBtn.addEventListener('click', () => {
    clearFunc()
})

numberBtn.forEach(number => {
    calculatorInput = '' 
number.addEventListener('click', () => {
    calculatorInput += number.textContent
    calculatorDisplay.innerText = calculatorInput
})
})

let firstTerm = '';
let secondTerm ='';

operatorBtn.forEach(oprBtn => { 
oprBtn.addEventListener('click', () => {
    firstTerm = calculatorInput,
    a = Number(firstTerm),
    o = oprBtn.value,
    calculatorDisplay.innerText = `${a} ${o}`
    calculatorInput = ''
})
})

equalsBtn.addEventListener('click', () => {
    secondTerm = calculatorInput,
    b = Number(secondTerm),
    operate(a, b, o),
    calculatorDisplay.innerText = result,
    calculatorInput = result
})