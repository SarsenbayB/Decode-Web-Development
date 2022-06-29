let cities = [
    {
        name: 'London',
        description: 'London is the capital city of England.'
    },
    {
        name: 'Paris',
        description: 'Paris is the capital of France.'
    },
    {
        name: 'Tokyo',
        description: 'Tokyo is the capital of Japan.'
    },
    {
        name: 'Nur-Sultan',
        description: 'Nur-Sultan is the capital of Kazakhstan.'
    }
];

window.onload = function() {

    for(let x of cities) {
        fillTabs(x.name, x.description);
    }

    let tabContents = document.getElementsByClassName('tap-content');

    for(let i=0; i < tabContents.length; ++i) {
        tabContents[i].style.display = "none";
    }

    let citiesItems = document.getElementsByClassName('cities__item');

    for(let i=0; i < citiesItems.length; ++i) {
        // logic of tabs
        show(tabContents, citiesItems, citiesItems[i], i);
    }
}

function fillTabs(name, description) {
    let tabs = document.getElementsByClassName('cities__list')[0];
    let tabContents = document.getElementsByClassName('cities__content')[0];

    let li = document.createElement('li');
    li.className = 'cities__item';
    li.textContent = name;

    tabs.append(li);

    let div = document.createElement('div');
    div.className = 'tap-content';

    let h3 = document.createElement('h3');
    h3.textContent = name;

    let p = document.createElement('p');
    p.textContent = description;

    div.append(h3);
    div.append(p);

    tabContents.append(div);
}

function show(tabs, cities, element, i) {
    // hover -> mousemove
    element.addEventListener('click', function() {

        for(let i=0; i < cities.length; ++i) {
            cities[i].className = cities[i].className.replace(" active", "");
        }
            
        for(let j=0; j < cities.length; ++j) { // j означает что элементы не активный
            if(i !== j) { // если i (активный элемент) != j
                tabs[j].style.display = "none";
            }
        }

        tabs[i].style.display = "block";
        this.className += " active";
    });
}