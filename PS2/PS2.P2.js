// PS2 Problem 2

// This generator takes in a string, and yields each word of the string one by one.
function* wordEmitter (sentence = "sample input") {
    let wordStore = sentence.split(' ');
    for (let item of wordStore){
        //console.log(item);
        yield item;
    }
}

// Getting all the values of the generator above.
for (let word of wordEmitter("All I know is something like a bird within her sang")){
    console.log(word);
}