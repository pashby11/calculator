function add(a,b){
    return a + b;
}

function minus(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function calculate(a, b, operator){
    if (operator == 'plus'){
        return add(a,b);
    }
    else if (operator == 'minus'){
        return minus(a,b);
    }
    else if (operator == 'multiply'){
        return multiply(a,b);
    }
    else {
        return divide(a,b);
    }
}

const output = document.querySelector(".output");


const allButtons = document.querySelectorAll("button");

let displayString ='';
let calculation ='';
let operand ='';
//output.textContent = displayString;

allButtons.forEach((button)=> {
    button.addEventListener('click', function(){
        if(button.id == "plus" ||
                button.id == "minus"||
                button.id == "multiply" ||
                button.id == "divide"){
                   operand += button.id;
                   calculation += button.value;
                   displayString += button.value;
                   output.textContent = displayString;
                }
        

        if(button.id == "equals"){

            let numbers = displayString.split(calculation);
            let firstNumber = parseInt(numbers[0]);
            let secondNumber = parseInt(numbers[1]);
            let result = calculate(firstNumber, secondNumber, operand);
            output.textContent = result;
        }
    
        else if(button.id == "reset") {

            displayString = '';
            operand = '';
            calculation ='';
            output.textContent = '';
            console.log("Memory cleared!") 
        }
        else {
            if(button.id != "plus" &&
                button.id != "minus"&&
                button.id != "multiply" &&
                button.id != "divide"){
                displayString += button.value;
                console.log(displayString);
                output.textContent = displayString;
                }
        }    
    });
});

//output.textContent = button.value;


