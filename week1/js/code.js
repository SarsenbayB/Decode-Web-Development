
// Мы выводим внешние скрипты

/* 
1
2
3
4 
*/

// console.log("Внешние скрипты");

let message;

message = "Kitty, hello!";

let x = 3;

let myNewVariable = 6;



console.log(message);

console.log(3);

let isGreater = 4 < 1;

alert(`4 is less than 1: ${isGreater}`);

// символ "n" в конце означает, что это BigInt
const bigInt1 = 1234567890123456789012345678901234567890;
const bigInt = 1234567890123456789012345678901234567890n;

console.log("Big int:");
console.log(bigInt1);
console.log(bigInt);


// + - * /

x = 5;
let y = 10;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// 5 / 10
console.log(x % y);

// 7 / 2 = 3 (1/2)
console.log(7 % 2);

// 17 / 3 = 5 (2/3)
console.log(17 % 3);

console.log(2**3);

let s = "Jack ";
let t = "Henry";

console.log(s + t);