let a = '';
let b = '';
let o = '';
let result = '';

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const multiply = (a, b) => a * b;
const percent = (a, b) => a * (b / 100);
const divide = (a, b) => b !== 0 ? a / b : 'ERROR!';

function operate(a, b, o) {
    if (o === '+') result = add(a, b);
    else if (o === '-') result = subt(a, b);
    else if (o === '/') result = divide(a, b);
    else if (o === '*') result = multiply(a, b);
    else if (o === '%') result = percent(a, b);
    else if (o === '=') result;
    else return 'Error';
    return result;
};

function clearFunc() {
    calculatorInput = '';
    calculatorDisplay.innerText = '0';
    a = '';
    b = '';
    o = '';
    result = '';
}

const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const calculatorDisplay = document.querySelector('.calcDisplay');
const numberBtn = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operator');
const invertBtn = document.getElementById('inverter');
const commaBtn = document.getElelementById('comma');
let calculatorInput = '';

clearBtn.addEventListener('click', () => {
    clearFunc();
});

invertBtn.addEventListener('click', () => {
    calculatorInput = -calculatorInput;
    calculatorDisplay.innerText = calculatorInput;
});

numberBtn.forEach(number => {
    number.addEventListener('click', () => {
        calculatorInput += number.textContent;
        calculatorDisplay.innerText = calculatorInput;
    });
    //LOOK HERE-----------------------------
    if(parseFloat(calculatorDisplay)){
        commaBtn.disabled = true;
    }
});

operatorBtn.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        if (b !== '') {
            b = Number(calculatorInput);
            operate(a, b, o);
            calculatorDisplay.innerText = result;
            calculatorInput = result;
        } else if(b === ''){
        b = Number(calculatorInput);
        }
        a = Number(calculatorInput);
        o = oprBtn.value;
        calculatorDisplay.innerText = `${a}   ${o}`;
        calculatorInput = '';
    });
});

equalsBtn.addEventListener('click', () => {
    if (b !== '') {
        b = Number(calculatorInput);
        operate(a, b, o);
        calculatorDisplay.innerText = result;
        calculatorInput = result;
        b = ''
    } else if(b === ''){
        b = Number(calculatorInput);
    }
    a = Number(calculatorInput);
});
