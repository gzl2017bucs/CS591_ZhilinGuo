// PS1 Problem 2

// This function takes in an input expression in the form of "digit operator digit", and returns a function that can
// be executed in the csl statement to produce the mathematical result of the input expression
const evaluate = inputString => {
    if (inputString[1] == '+') {
        return expression => parseInt(expression[0], 10) + parseInt(expression[2], 10);
    } else if (inputString[1] == '*'){
        return expression => parseInt(expression[0], 10) * parseInt(expression[2], 10);
    } else if (inputString[1] == '-'){
        return expression => parseInt(expression[0], 10) - parseInt(expression[2], 10);
    } else {
        return expression => parseInt(expression[0], 10) / parseInt(expression[2], 10);
    }
}

//testing
const expression1 = '4+2';   // testing +
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

const expression2 = '5*7';   // testing *
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '6-1';   // testing -
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)

const expression4 = '9/2';   // testing /
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`)