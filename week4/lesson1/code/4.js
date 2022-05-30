let table = document.getElementsByClassName("container__table");

// let tr = document.createElement("tr");
// let td = document.createElement("td");

// td.textContent = "Скорость чтения";

// tr.append(td);

// table[0].append(tr);

// console.log(table[0]);


let card = {
    "Объем": "32 GB",
    "Интерфейс": "Usb 3.2",
    "Скорость чтения": "200 Мб/с",
};


for(let key in card) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.textContent = key;
    td2.textContent = card[key];

    tr.append(td1);
    tr.append(td2);

    table[0].append(tr);
    // console.log(key + ": " + card[key]);
}