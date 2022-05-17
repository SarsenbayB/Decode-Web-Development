// Пример для решение задачи

let c = prompt("Enter a char:");

if (c >= "a" && c <= "z") {
  console.log("The char in lowercase");
} else if (c >= "A" && c <= "Z") {
  console.log("The char in uppercase");
} else {
  console.log("Some char");
}

// 'a' = 97
// not recommended
/*
if(c >= 97 && c <= 122) {
    console.log('The char in lowercase');
} else if (c >= 65 && c <= 'Z') {
    console.log('The char in uppercase');
} else {
    console.log('Some char');
}
*/
