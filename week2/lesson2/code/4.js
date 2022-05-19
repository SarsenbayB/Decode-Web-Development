// Написать числа от 1 до 4

for (let i=1; i <= 4; i=i+1) {
    console.log(i);
}

// Нахождение суммы веденных чисел

let sum = 0;

while (true) {
    let value = +(prompt("Введите число:"));

    if(!value) { // противоположность логической операции
        break;
    }

    sum += value; // sum = sum + value;
}

// document.write("Сумма введнных чисел равно " + sum);


document.write(`Сумма введенных чисел равно ${sum}`);
