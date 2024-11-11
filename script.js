const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += " " + operator + " ";
}

function calculate() {
    try {
        display.value = eval(display.value.replace("×", "*").replace("√", "Math.sqrt"));
    } catch {
        display.value = "Erro";
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value)).toFixed(5);
}

function calculateSquare() {
    display.value = Math.pow(eval(display.value), 2).toFixed(5);
}

function calculateSin() {
    display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(5);
}

function calculateCos() {
    display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(5);
}

function calculateTan() {
    display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(5);
}

function calculateLog() {
    display.value = Math.log10(eval(display.value)).toFixed(5);
}

function calculateExp() {
    display.value = Math.exp(eval(display.value)).toFixed(5);
}

function calculatePi() {
    display.value += Math.PI.toFixed(5);
}

function calculateFactorial() {
    const num = parseInt(eval(display.value));
    if (num < 0) {
        display.value = "Erro";
    } else {
        display.value = factorial(num);
    }
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function calculateInverseSin() {
    const num = eval(display.value);
    display.value = Math.asin(num) * 180 / Math.PI;
}

function calculateInverseCos() {
    const num = eval(display.value);
    display.value = Math.acos(num) * 180 / Math.PI;
}

function calculateInverseTan() {
    const num = eval(display.value);
    display.value = Math.atan(num) * 180 / Math.PI;
}

function calculatePower() {
    const parts = display.value.split(" ");
    if (parts.length === 3) {
        const base = eval(parts[0]);
        const exponent = eval(parts[2]);
        display.value = Math.pow(base, exponent).toFixed(5);
    }
}