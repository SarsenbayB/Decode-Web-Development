let str = "Hello, Patric!";

let block;
let text;

window.onload = function () {
  block = document.getElementById("test");
  text = document.getElementsByClassName("content__text")[0].children[0];

  str = text.innerHTML;

  let idx = 0;
  let steppedStr = "";

  function typeWriter() {
    let interval = setTimeout(function () {
      steppedStr += str[idx];
      block.innerHTML = steppedStr;

      idx++;

      /*
            Проверка на boundary => длина строки
            */
      if (idx >= str.length) {
        clearTimeout(interval);
        block.innerHTML = steppedStr;
        return true;
      } else {
        typeWriter();
      }
    }, getRandom(getRandom(500 * 1.5)));
  }

  typeWriter();
  // writterWithInterval("", 0);
};

function getRandom(boundary) {
  return Math.floor(Math.random() * Math.floor(boundary));
}

function writterWithInterval(steppedStr, idx) {
  // setInterval дает линейный выход
  let timerId = setInterval(function () {
    steppedStr += str[idx];
    block.innerHTML = steppedStr;
    idx++;

    if (idx >= str.length) {
      clearInterval(timerId);
      block.innerHTML = steppedStr;
      return true;
    }
  }, getRandom(getRandom(500 * 1.5)));
}
