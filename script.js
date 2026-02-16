let a = 0;
let b = 0;
let op = "";
let display = document.getElementById("display");
let activeOp = false;
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        numberPress(button.id)
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        operatorPress(button.id)
    })
});

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(operator, x, y){
    switch(operator){
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "*":
            return multiply(x, y);
        case "/":
            if(y == 0){
                return "Cannot divite by 0."
            }
            return divide(x, y);
    }
}

function numberPress(num){
    if(display.textContent == 0){
        display.textContent = ""
    }
    
    display.textContent = display.textContent + num;
    a = parseFloat(display.textContent)
    console.log(a)
}