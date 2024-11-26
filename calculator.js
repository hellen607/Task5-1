let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector("#screen");

function addToDisplay(value) {
  display.value += value;
  if (!operator) {
    firstNumber += value;
  } else {
    secondNumber += value;
  }
}

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Error" : a / b),
};

document.querySelector("#square").addEventListener("click", () => {
  updateDisplay(Math.pow(parseFloat(firstNumber), 2));
});

function calculateResult() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;
  if (operations[operator]) {
    result = operations[operator](num1, num2);
  } else {
    result = "Error";
  }
  updateDisplay(result);
  secondNumber = "";
  operator = "";
}

function clearDisplay() {
  updateDisplay("");
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function updateDisplay(result) {
  display.value = result;
  firstNumber = result;
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;
    console.log(value);
    if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
      display.value += ` ${value} `;
    } else if (value === "C") {
      clearDisplay();
    } else {
      addToDisplay(value);
    }
  });
});

document.querySelector("#equals").addEventListener("click", calculateResult);

document.querySelector("#clear").addEventListener("click", clearDisplay);

//  function convertUnits() {
//     const value = parseFloat(document.getElementById('value').value);
//     const fromUnit = document.getElementById('from-unit').value;
//     const toUnit = document.getElementById('to-unit').value;

//     let result = 0;

//     if (fromUnit === 'm' && toUnit === 'cm') {
//         result = value * 100;
//     } else if (fromUnit === 'm' && toUnit === 'km') {
//         result = value / 1000;
//     } else if (fromUnit === 'cm' && toUnit === 'm') {
//         result = value / 100;
//     } else if (fromUnit === 'cm' && toUnit === 'km') {
//         result = value / 100000;
//     } else if (fromUnit === 'km' && toUnit === 'm') {
//         result = value * 1000;
//     } else if (fromUnit === 'km' && toUnit === 'cm') {
//         result = value * 100000;
//     } else {
//         result = value; // If units are the same
//     }

//     document.getElementById('result').innerText = `النتيجة: ${result}`;
// }
