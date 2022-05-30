let user = {
    name: "Assylzhan",
    age: 20,
    study: "Decode",
    gender: "male",
};

let doc_result = document.getElementById("result");

doc_result.textContent += user.name;
doc_result.textContent += (". Age: " + user["age"]);

let arr = [5, 4, 1, 5, 6];

for(let i of arr) {
    console.log(i);
}

console.log("///");

delete arr[2];

for(let i of arr) {
    console.log(i);
}

arr[2] = 9;

console.log("///");

for(let i of arr) {
    console.log(i);
}

// удаление свойства из объекта

console.log(user);

delete user.study;

console.log(user);

doc_result.innerHTML = "";

for(let x in user) {
    doc_result.innerHTML += (x + " : " + user[x] + "\n");
}