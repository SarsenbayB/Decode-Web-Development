// Оператор switch

let day = new Date().getDay();

let text;

console.log(day);

day = 6;

switch (day) {
  case 6:
    text = "Today is Saturday.";
    break;
  case 2:
    text = "Today is Tuesday";
    break;
  default:
    text = "Looking forward to the Weekend.";
}

console.log(text);
