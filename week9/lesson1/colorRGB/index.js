let r = document.querySelector('.input_r input');
let g = document.querySelector('.input_g input');
let b = document.querySelector('.input_b input');

const body = document.querySelector('body');

const measure = document.querySelector('.color-changer__measure');

// console.log(box);

function colors() { 
    
    body.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;
    measure.innerHTML = `rgb(${r.value}, ${g.value}, ${b.value})`
}

function showValue(red, green, blue) {
    if(red) {
        r.title = red.value;
    }

    if (green) {
        g.title = green.value;
    } 

    if (blue) {
        b.title = blue.value;
    }
}
