let arr = []; // Задание массива

let arr2 = new Array();

// 0 1 2
let cars = ["BMW", "WV", "Mercedes"];

let car = cars[3];

cars[1] = "Chevrolet";

console.log("Длина массива cars");

console.log(cars.length);

console.log(cars[1]);

for(let i=0; i < cars.length; ++i) {
    document.write(cars[i]);
    if(i != cars.length-1) {
        document.write(", ");
    }
}

// Сделать строку из элементов массива

console.log(cars.toString());

document.getElementById("cars").innerHTML = cars.toString();

document.getElementById("cars-join").innerHTML = cars.join(" - ")