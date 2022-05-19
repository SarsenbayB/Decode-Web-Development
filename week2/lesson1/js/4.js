let num = +(prompt("Enter a number: "));

// let num = prompt("Enter a number: ");
console.log(num);

if(num < 0) {
    console.log("The number is negative.");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is positive.");
}