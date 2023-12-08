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
    if (o === '+') return result = add(a, b);
    else if (o === '-') return result = subt(a, b);
    else if (o === '/') return result = divide(a, b);
    else if (o === '*') return result = multiply(a, b);
    else if (o === '%') return result = percent(a, b);
    else if (o === '=') return result;
}

function clearFunc() {
    calculatorInput = '';
    calculatorDisplay.innerText = '0';
}

function reset() {
    calculatorInput = '';
}

const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const calculatorDisplay = document.querySelector('.calcDisplay');
const numberBtn = document.querySelectorAll('.numbers');
const operatorBtn = document.querySelectorAll('.operator');
let calculatorInput = '';

clearBtn.addEventListener('click', () => {
    clearFunc();
    a = '';
    b = '';
    result = '';
});

numberBtn.forEach(number => {
    number.addEventListener('click', () => {
        calculatorInput += number.textContent;
        calculatorDisplay.innerText = calculatorInput;
    });
});

operatorBtn.forEach(oprBtn => {
    oprBtn.addEventListener('click', () => {
        if (b !== '') {
            // If the second term exists, perform the operation
            b = Number(calculatorInput);
            operate(a, b, o);
            calculatorDisplay.innerText = result;
            calculatorInput = result.toString();
        }

        // Set up for the next operation
        firstTerm = calculatorInput;
        a = Number(firstTerm);
        o = oprBtn.value;
        calculatorDisplay.innerText = `${a}${o}`;
        reset(); // Clear the input for the new number entry
    });
});

equalsBtn.addEventListener('click', () => {
    if (b === '') {
        // If no second term, set it
        b = Number(calculatorInput);
    }

    operate(a, b, o);
    calculatorDisplay.innerText = result;
    calculatorInput = result.toString();
    reset(); // Clear the input for the new number entry
});