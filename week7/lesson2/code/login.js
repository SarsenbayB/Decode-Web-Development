window.onload = function() {
    let tabContents = document.getElementsByClassName('cities__auth');

    for(let i=0; i < tabContents.length; ++i) {
        tabContents[i].style.display = "none";
    }

    let citiesItems = document.getElementsByClassName('cities__item');

    for(let i=0; i < citiesItems.length; ++i) {
        // logic of tabs
        show(tabContents, citiesItems, citiesItems[i], i);
    }
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