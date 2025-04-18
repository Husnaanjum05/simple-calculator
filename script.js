// Get display input field
const display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
  display.value += number;
}

// Append operator symbols (+, -, *, /, %)
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  // Prevent two operators in a row
  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Clear the display (AC button)
function clearDisplay() {
  display.value = '';
}

// Perform square operation
function square() {
  if (display.value !== '') {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Calculate the result (= button)
function calculate() {
  try {
    // Use eval to calculate expression
    const result = eval(display.value);
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
  } catch (error) {
    display.value = 'Error';
  }
}