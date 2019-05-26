// PS1 Problem 3

// this function takes two parameters, a string and a function, and executes the passed function with the string to
// return the result
const functionExecute = (aString, aFunction) => {
    return aFunction(aString);
}


let string1 = 'supercalifragilisticexpialidocious';

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

let expression2 = functionExecute(string1, aString => {
    let original = string1;
    let stringLength = string1.length;
    let stringSplitted = string1.split('');
    let numReplaced = 0;
    for (let i = 0; i < stringLength; i++){
        if (stringSplitted[i] == 'a'){
            stringSplitted[i] = 'A';
            numReplaced += 1;
        }
    }
    string1 = stringSplitted.join('');
    return {
        originalString: original,
        modifiedString: string1,
        numberReplaced: numReplaced,
        length: stringLength
    }
})

console.log (expression2);