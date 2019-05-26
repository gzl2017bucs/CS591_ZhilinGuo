// PS1 Problem 3

// this function takes two parameters, a string and a function, and executes the passed function with the string to
// return the result
const functionExecute = (aString, aFunction) => {
    return aFunction(aString);
}


let string1 = 'supercalifragilisticexpialidocious';

let expression1 = functionExecute (string1, aString => {
    let temp = aString.split('c');
    
    return temp;
})
console.log (expression1)