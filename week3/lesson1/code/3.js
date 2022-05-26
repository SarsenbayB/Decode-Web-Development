let cars = ["BMW", "WV", "Mercedes"];

for(let i = 0; i < cars.length; ++i) {
    document.write(i);

    if(i != cars.length-1) {
        document.write(", ");
    }
}

document.write("<br>");

for(let i=0; i < cars.length; ++i) {
    document.write(cars[i]);

    if(i != cars.length-1) {
        document.write(", ");
    }
}

document.write("<br>");

console.log(cars.shift());

console.log(cars.length);

document.write(cars.toString());

let newCar = "KIA";

cars.unshift(newCar);

console.log(cars.toString());

delete cars[1];

console.log(cars.toString());

cars[1] = "JAC";

console.log(cars.toString());
