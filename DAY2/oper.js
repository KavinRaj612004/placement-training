let currentInput = '';
let previousInput = '';
let operation = '';


function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

// Function to set the operation (+, -, *, /)
function setOperation(op) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculateResult(); 
    }
    operation = op;
    previousInput = currentInput;
    currentInput = ''; 
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('display').value = '';
    document.getElementById('result').innerText = '';
}

// Function to calculate the result
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return; 

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                result = 'Error'; 
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    document.getElementById('result').innerText = result; 
    currentInput = result; 
    previousInput = '';
    operation = '';
}
