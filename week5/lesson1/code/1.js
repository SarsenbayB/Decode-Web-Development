// let p = document.getElementById('text');

// p.textContent += " Some text.";

// let div = document.getElementsByTagName('div');

// console.log(div);

// div[0].append(document.createElement('p').innerHTML = 'sometext');

function addText(element) {
    element.innerHTML += " JS DOM";
}

let p = document.createElement('p');
p.setAttribute('style', 'color: red');
p.className = 'container__text';
p.textContent = 'Lorem';

p.addEventListener('mouseover', pEvent);

function pEvent() {
    p.textContent = 'Changed text!';
    alert('Hello, world!');
}

document.querySelector('.container').append(p);

