// Рекурсия - это вызов функции, функция вызывает самого себя.

// 1. Нахождение суммы массива

let arr = [1, 5, 9, 10, 3, 4, 84];

let sum = 0;

for(let i=0; i < arr.length; ++i) {
    sum += arr[i];
}

console.log(sum);

/*
У рекурсии должен быть 2 состояние (обязательные):
    1. Выход из рекурсии (условия выхода из рекурсий);
    2. Вызов самого себя (Вход)
*/

function findSum(arr, idx, totalSum) {
    if (idx == arr.length) {
        return totalSum;
    }
    return findSum(arr, idx+1, totalSum + arr[idx]);
}

console.log(findSum(arr, 0, 0));