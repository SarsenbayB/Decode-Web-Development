let numbers = [43,2,2,54,2,6,5,1];
            //  0  1   2
            //  0   1  2   3
let numbers2 = [9, 20, 40];

console.log(numbers2.concat(numbers));

console.log(numbers.concat(numbers2));

numbers2.splice(1, 1);

console.log(numbers2.toString());

                               // [3 7);
let new_numbers = numbers.slice(3, 7);

console.log(new_numbers.toString());

// Метод forEach

console.log(numbers.toString());

numbers.forEach(myFunc);

function myFunc(value, idx) {
    console.log(idx + " " + value);
}


// Оператор for in

for(let idx in numbers) {
    document.write(numbers[idx] + "<br>");
} 

// Оператор for of

let text = "";

for(let value of numbers) {
    text += (value + ", ");
}

alert(text);
