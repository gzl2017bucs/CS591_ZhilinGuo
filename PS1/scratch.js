//example function
//const biggie = items => Math.max(...items);
//console.log(`Biggest int is: ${biggie([4,8,1,4,3,9,2])}`)

// let stringTest = 'abcdefg';
// //
// // for (let i = 0; i < stringTest.length; i++){
// //     console.log(`${stringTest[i]}`);
// // }
// //
// // console.log(`char access: ${stringTest[1]}`);
//console.log(`c`);

// console.log('a' > 'b');
// let stringTest = 'abcdefg';
// stringTest[0] = 'x';
// console.log(stringTest);

// let stringTest = 'gasggd';
//
// let temp = stringTest.split('');
// console.log(temp);
//
// temp = temp.sort();
// console.log(temp);
//
// temp = temp.join('');
// console.log(temp);


const evaluate = inputString => {
    return (left, right) => left + right;
}

const expression = '4+2';
let operator = (left, right) => left + right;

console.log(operator);

console.log(`${operator}`);
//console.log(`${expression} = ${operator(expression)}`);

console.log(parseInt(expression[0], 10) + parseInt(expression[2], 10))

