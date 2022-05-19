//1. https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b) {
  // если a большая буква a_res = 1
  // если a маленькая буква a_res = 0
  // если a какой то символ a_res = -1
  let a_res;
  let b_res;

  // с перва проверка символа a
  if (a >= "a" && a <= "z") {
    a_res = 0;
  } else if (a >= "A" && a <= "Z") {
    a_res = 1;
  } else {
    a_res = -1;
  }

  // дальше проверка символа b
  if (b >= "a" && b <= "z") {
    b_res = 0;
  } else if (b >= "A" && b <= "Z") {
    b_res = 1;
  } else {
    b_res = -1;
  }

  if (a_res === 0 && b_res === 0) {
    return 1;
  } else if (a_res === 1 && b_res === 1) {
    return 1;
  } else if (a_res === 0 && b_res === 1) {
    return 0;
  } else if (a_res === 1 && b_res === 0) {
    return 0;
  }

  return -1;
}
