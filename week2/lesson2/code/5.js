let sum = 0;

for (let i=1; i <= 20; ++i) {
    if (i % 4 == 0) { // если число i делиться на 4
        continue;
    }
    // console.log(i);
    sum = sum + i;
}

document.write("Сумма чисел от 1 до 20, которые не делиться на 4: " + sum);

// | | | X | | | X | |
// _ _ _ _ _ _ _ _ _ _ <= шаги итерации
// 1 2 3 4 5 6 7 8 9 10

let a = 3;
let b = 10;

// Написать числа от a до b
for (let i=a; i <= b; ++i) {
    console.log(i);
}

/*

Разница инкрементов

i = 0;

++i <= i + 1 = i
i++ <= i = i + 1

*/

// [1 2 3 4]

// ['a', 'b', 'e']

// [Person, Person]



