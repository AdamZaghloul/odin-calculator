let a = null;
let b = null;
let op = "";
let display = document.getElementById("display");
let activeOp = false;
let activeEqual = false;
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

const equals = document.getElementById("equals");
equals.addEventListener('click', function(event){
    evaluate();
    activeEqual = true;
});

const clear = document.getElementById("clear");
clear.addEventListener('click', function(event){
    clearAll();
});

const neg = document.getElementById("neg");
neg.addEventListener('click', function(event){
    negative();
});

const percent = document.getElementById("percent");
percent.addEventListener('click', function(event){
    alert("you got me I didn't add this functionality yet :)");
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
                a = 0;
                b = 0;
                op = "";
                return "Cannot divide by 0."
            }
            return divide(x, y);
    }
}

function numberPress(num){
    if(display.textContent == 0 || display.textContent == "Cannot divide by 0."){
        display.textContent = ""
    }

    if(activeOp){
        display.textContent = "";
        a = b;
        activeOp = false;
    }

    if(b == null && a != null){
        a = null;
        display.textContent = ""
    }

    if(activeEqual){
        a = null;
        b = null;
        op = "";
        display.textContent = "";
        activeEqual = false;
    }

    display.textContent = display.textContent + num;
    b = parseFloat(display.textContent)
}

function operatorPress(operator){
    if(a == 0 && b == 0){
        return;
    }else if(a != 0 && b != 0){
        evaluate();
    }

    op = operator;
    activeOp = true;
    activeEqual = false;
}

function evaluate(){
    if(a == null || b == null || op == ""){
        return
    }

    b = operate(op, a, b);
    a = null;
    op = "";

    display.textContent = b;
}

function negative(){
    b = b * -1;
    display.textContent = b;
}

function clearAll(){
    a = null;
    b = null;
    op = "";
    display.textContent = "0";
}