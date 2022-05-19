// Написать числа от 1 до 4

console.log("Наивное решение:");

console.log(1);
console.log(2);
console.log(3);
console.log(4);

console.log("Работа с циклом:");

let x = 1;

while (x <= 4) {
    console.log(x);
    x++; // x = x + 1; <= замена этого кода
    // x--; x = x - 1; <= уменшаем значение на 1
}
