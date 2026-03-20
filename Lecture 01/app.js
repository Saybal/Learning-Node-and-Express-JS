function greet(){
    console.log("Hello World");
}

function loggreet(fn) {
    fn();
}

loggreet(greet); // Hello World

// Function Expression
// If a function is stored in a variable, then it is called a function expression. The variable can be used as a function.
const greetMe = function () {
    console.log("Hello World");
}

greetMe(); // Hello World