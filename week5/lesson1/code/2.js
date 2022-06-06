let input = document.querySelector('.toDoContent__input-item');
let button = document.querySelector('.toDoContent__button');

let toDoList = document.querySelector('.toDo-list');
let form = document.getElementsByClassName('toDoContent__exception')[0];

let toDoArray = [];

let obj = {
    'text': 'value',
    'checked': true
};

function add() {
    createListItem(input.value);
    input.value = '';
}

function createListItem(text) {
    let li = document.createElement('li');
    li.className = 'toDo-list__item';
    li.textContent = text;

    createListItemCheckBox(li);

    if(text.length >= 5) {
        toDoList.append(li);

        form.innerHTML = "";
        for(let val in toDoArray) {
            console.log(toDoArray[val]);
        }
    } else {
        form.innerHTML = "toDoContent__exception";
    }
}

function createListItemCheckBox(listItem) {
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = 'toDo-list__checkbox';
    checkBox.addEventListener('click', checked);

    toDoArray.push({
        "text": listItem.textContent,
        "checked": false
    });

    listItem.append(checkBox);
}

function checked() {
    let item = document.querySelector('.toDo-list__item');
    let isChecked = document.getElementsByClassName('toDo-list__checkbox');

    console.log(isChecked);
    
    if (isChecked.checked) {
        item.setAttribute('style', 'text-decoration: line-through;');
    } else {
        item.setAttribute('style', 'text-decoration: none;');
    }
}