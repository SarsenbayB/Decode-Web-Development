let classPoints = [];
let n = +prompt("Enter the number of students:");

for (let i = 0; i < n; ++i) {
  classPoints.push(+prompt(`Enter ${i}th student score: `));
}

let yourPoints = +prompt("Enter your point: ");

let ave = 0;

for (let i = 0; i < classPoints.length; ++i) {
  ave = ave + classPoints[i];
}

ave = ave / classPoints.length;

console.log(ave);

if (yourPoints > ave) {
  console.log(true);
} else {
  console.log(false);
}
