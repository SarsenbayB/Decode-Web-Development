// Функции делиться на два типа
// void функции -> ничего не возвращает
// функции возращает значение -> number, string, [], object, function, ключевое слова "return"


let num = 5;

// index.js => Global file = Все переменные => global variables
// function => Все переменные внутрий функции => local variables

function myFunc(var1, var2) {
    let temp = var1 + 10;

    if(var1 === var2) {
        return temp;
    }

    return num * var1 * var2;
}


if(num === 5) {
    console.log("Wow, number is five");
    let y = 7;
    console.log("Then your num is y");
    num = y;
} 

console.log(num);

for(let i=0; i < 4; ++i) {

    let x = 5;

    console.log(i);
}

// console.log(i);

let x = myFunc(6, 6);

console.log("we have here x = " + x);

// x *= 2;
// x = x * 2;
// x = x + 2;
// x += 2;
// x = x / 2;
// x /= 2;


document.write(x);