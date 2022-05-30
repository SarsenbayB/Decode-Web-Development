let div_product = document.getElementsByClassName("product");

let products = [];

let card = {
    "Имя": "Флешка",
    "Характеристики": {
        "Объем": "32 GB",
        "Интерфейс": "Usb 3.2",
        "Скорость чтения": "200 Мб/с",
    },
}

let card1 = {
    "Имя": "Флешка",
    "Характеристики": {
        "Объем": "32 GB",
        "Интерфейс": "Usb 3.2",
        "Скорость чтения": "200 Мб/с",
    },
}

let card2 = {
    "Имя": "Флешка",
    "Характеристики": {
        "Объем": "32 GB",
        "Интерфейс": "Usb 3.2",
        "Скорость чтения": "200 Мб/с",
    },
}

products.push(card);
products.push(card1);
products.push(card2);


for(let v of products) {
    for(let key in v) {
        let div_name = document.createElement("h2");

        if(key === "Имя") {
            div_name.textContent = (key + " " + v[key]);
            // name[0].textContent = (key + " " + v[key]);
        }
        if(key === "Характеристики") {
            
            let div_table = document.createElement("table");
            let table_head = document.createElement("thead");
            let td = document.createElement("td");
            td.textContent = "Общие характеристики";
            let td2 = document.createElement("td");
            td2.textContent = "Значение";

            table_head.append(td);
            table_head.append(td2);
            div_table.append(table_head);

            div_product[0].append(div_table);

            for(let item in v[key]) {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");


                td1.textContent = item;
                td2.textContent = v[key][item];

                tr.append(td1);
                tr.append(td2);

                div_table.append(tr);

                console.log(item + ":" + v[key][item]);
            }
        }

        div_product[0].append(div_name);
    }
}



// for(let key in card) {
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");

//     td1.textContent = key;
//     td2.textContent = card[key];

//     tr.append(td1);
//     tr.append(td2);

//     table[0].append(tr);
//     // console.log(key + ": " + card[key]);
// }