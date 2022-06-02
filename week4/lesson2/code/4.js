let list_phones = document.getElementsByClassName('container__phones');
let list_laptops = document.getElementsByClassName('container__laptop');

let phones = ['iPhone XS', 'Samsung A10', 'HTC M9'];
let laptops = ['Aser', 'HP', 'MacBook', 'Samsung'];


function createList(array, list) {
    for(let x of array) {
        let list_item = document.createElement('li');
        list_item.textContent = x;
        list[0].append(list_item);
    }
}

createList(phones, list_phones);
createList(laptops, list_laptops);


// Создание таблицы

function createTable(title, headers, tContent) {
    let h2 = document.createElement('h2');
    h2.textContent = title;
    
    let table = document.createElement('table');
    let thead = document.createElement('thead');

    for(let hname of headers) {
        let td = document.createElement('td');
        td.textContent = hname;
        thead.append(td);
    }

    table.append(thead);

    for(let key in tContent) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = key;
        let td2 = document.createElement('td');
        td2.textContent = tContent[key];

        tr.append(td1);
        tr.append(td2);

        table.append(tr);
    }

    document.getElementsByClassName('container__inner')[0].append(h2);
    document.getElementsByClassName('container__inner')[0].append(table);
}

let products = [];

let title = "КАБЕЛЬ APPLE";
let headers = ['ОБЩИЕ ХАРАКТЕРИСТИКИ', 'ЗНАЧЕНИЕ'];
let table_content = {"Тип": "Кабели", 
"Особенности": "Можно использовать для зарядки устройств iOS с помощью адаптера питания Apple USB‑C мощностью 18 Вт, 20 Вт, 29 Вт, 30 Вт, 61 Вт, 87 Вт или 96 Вт, а также для быстрой подзарядки некоторых моделей iPhone и iPad."};

let title2 = "ЧЕХОЛ TOTO ДЛЯ IPHONE 12 PRO";
let headers2 = headers;
let table_content2 = {"Материал": "Силикон", "Серия смартфона или планшета": "iPhone 12 Pro", "Страна производителя":"Китай", "Особенности": "Защищает от царапин"};

let product1 = {"title": title, "headers": headers, "tableContent": table_content};
let product2 = {"title": title2, "headers": headers2, "tableContent": table_content2};

products.push(product1);
products.push(product2);

for(let val of products) {
    createTable(val["title"], val["headers"], val["tableContent"] );
}