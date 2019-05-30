// PS2 Problem 1

// This generator returns the series of fibonacci numbers starting from 0.
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        // start yielding values from 0
        yield result;
        result = val1+val2;
        val1 = val2;
        val2 = result;
    }
}

// This generator takes in fibonacci numbers returned by fibs(), and returns only even fibonacci numbers.
function* evenFibs () {
    let allFibs = fibs();
    while (true){
        let currentFib = allFibs.next().value;
        const functionApply = (x, f) => f(x);
        if (functionApply (currentFib, x => (x % 2) == 0)){
            yield currentFib;
        }
    }
}

// Here we create an instance of the evenFibs generator, and calls it 5 times.
let myFibs = evenFibs()
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value);
}