function hi(var1) {
    return "Welcome our new variable: " +  var1; 
}

let myFunc = () => {
    return 5
};

let myFunc2 = var1 => {
    console.log("inner myFunc2 " + var1);
    return var1 + 10;
}

let myFunc3 = () => ({price: 10, count: 5});

let myFunc4 = () => {
    return {
        price: 20,
        count: 10
    }
}

let myFunc5 = (userName, userAge) => ({name: userName, age: userAge});

let res = myFunc();
let res2 = myFunc2(); 
let res3 = myFunc3();
let res4 = myFunc4();

let res5 = myFunc5("Assylzhan", 20);

// let res_of_hi = hi(res);
console.log(res);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);

// console.log(res_of_hi);
console.log(hi(myFunc()));