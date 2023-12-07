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
}

function clearFunc(){
    return calculatorInput = null, 
    calculatorDisplay.innerText = ''
}

const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.getElementById('clear');
const calculatorDisplay = document.querySelector(".calcDisplay")
const numberBtn = document.querySelectorAll('.numbers')
let calculatorInput = ''

clearBtn.addEventListener('click', () => {
    clearFunc()
})

numberBtn.forEach(number => { 
number.addEventListener('click', () => {
    calculatorInput += number.textContent
    calculatorDisplay.innerText = calculatorInput
    return a = calculatorInput; // ????
})
})

