// Взаимодействие с html файлом через Js
let counries = ["KZ", "RUS", "ENG", "JAP"];

// Создали наши тэги
let list = document.createElement("ul");

for(let idx in counries) {
    let list_item = document.createElement("li");
    
    list_item.innerText = counries[idx];
    
    list.appendChild(list_item);
}

// for(let idx in countries) {
//     list_item. = counries[idx];
//     list.appendChild(list_item);
// }

/*
ul
    li
*/

document.getElementById("body").appendChild(list);

/*
body с id-шкой body
    ul
        li
*/
