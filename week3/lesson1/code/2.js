let users = []; // массив из сервера

const letters = ["A", "B", "C", "D"];

console.log(letters.length);

let user_name;

// for(let i=0; i < 5; ++i) {
//     user_name = prompt("Введите свое имя:");
//     users.push(user_name);
// }

document.write(users.toString());

document.write("<br>");

users.pop();

letters.pop();

console.log(letters.length);

document.write(users.toString());