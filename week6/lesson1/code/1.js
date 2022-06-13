let container = document.getElementsByClassName('container__inner')[0];
let containerItem = document.getElementsByClassName('container__item');

for(let x of containerItem) {
    x.onclick = getValue;
}

let containerArray = Array.prototype.slice.call(container.children);

function getValue() {
    let value = document.getElementsByClassName('value')[0];
    let indexOfPressed = containerArray.indexOf(this);

    value.textContent = containerArray[indexOfPressed].children[0].innerHTML;
}