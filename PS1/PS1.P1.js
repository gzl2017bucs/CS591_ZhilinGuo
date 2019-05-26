// PS1 Problem 1

// This function takes in an input string, and returns the original string in alphabetical order by using split(),
// sort(), and join() methods.
const alphabeticalOrder = inputString => {
    let outputString = inputString.split('');
    outputString = outputString.sort();
    outputString = outputString.join('');
    //console.log(outpputString);
    return outputString;
}

//testing
//console.log(`String in alphabetical order is: ${alphabeticalOrder (`cba`)}`);
console.log(`String in alphabetical order is: ${alphabeticalOrder (`supercalifragilisticexpialidocious`)}`);

