// PS1 Problem 3

// this function takes two parameters, a string and a function, and executes the passed function with the string to
// return the result
const functionExecute = (aString, aFunction) => {
    return aFunction(aString);
}


let string1 = 'supercalifragilisticexpialidocious';

// This expression calls the function above to take in a string and use it with a lambda function to split the string on
// letter c, where the letter c is kept in the second part of the splitted string
let expression1 = functionExecute (string1, aString => {
    let temp = aString.split('c');
    if (temp.length > 1) {
        for (let i = 1; i < temp.length; i++) {
            temp[i] = 'c' + temp[i];
        }
    }
    return temp;
})
console.log (expression1);

// This expression calls the function above to take in a string and use it with a lambda function to replace all letter
// a's with capital letter A, and outputs an object as the expression
let expression2 = functionExecute(string1, aString => {
    let original = aString;
    let stringLength = original.length;
    let stringSplitted = aString.split('');
    let numReplaced = 0;
    // replace a's with A's
    for (let i = 0; i < stringLength; i++){
        if (stringSplitted[i] == 'a'){
            stringSplitted[i] = 'A';
            numReplaced += 1;
        }
    }
    aString = stringSplitted.join('');
    // construct and return the object
    return {
        originalString: original,
        modifiedString: aString,
        numberReplaced: numReplaced,
        length: stringLength
    }
})

console.log (expression2);