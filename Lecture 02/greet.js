function greet() {
    console.log("Hello, I am greet");
    
}

const sum = (a,b) => {
    return a + b;
}

export const greeting = {
    greet,
    sum
} // If we want to export multiple functions then we can export them as an object.