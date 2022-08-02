import { load } from "./subcode.js"
import { load as loadProducts } from "./products.js"

let isHide = false;
// let isEven = false;

$(document).ready(function() {
    toggleText();
    getFormInfo();
    // load();
    loadProducts();
});

function toggleText() {
    $(".container__btn").click(function() {
        $(".container__p").toggle(function() {
            console.log($(".container__btn").text(!isHide ? "Show" : "Hide"));
            isHide = !isHide;
        });
    });

    $(".container__p").click(function() {
        $(this).toggleClass("container__p_red");

        // if(isEven) {
        //     $(this).addClass("container__p_red");
        // } else {
        //     $(this).removeClass("container__p_red");
        // }
        // isEven = !isEven;
    });

}

function getFormInfo() {
    $('.form button').click(function() {
        console.log($('.form input').val());

        $('.form label').empty();
    });
}

/*
window.onload = function() {
    const pTag = document.querySelector('.container__p');
    pTag.addEventListener('click', function() {
        this.style.backgroundColor = 'red';
    });
};
*/