
export function load() {
    $().ready(function() {
        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/products",
            success: function(data) {
                const products = data.products;

                $.each(products, function(idx, value){
                    renderItem(value);
                });
            }
        });
    });
}

function renderItem(product) {
    const divItem = document.createElement('div');
    const divDiscount = document.createElement('div');

    divDiscount.innerHTML = product.discountPercentage + "$";
    
    const divImg = document.createElement('div');
    const img = document.createElement('img');

    img.src = product.images[0] ? product.images[0] : "https://dummyjson.com/image/i/products/24/4.jpg";

    divImg.append(img);

    const divTitle = document.createElement('div');
    divTitle.innerHTML = product.title

    const divPrice = document.createElement('div');
    divPrice.innerHTML = "$" + product.price;

    $(divItem).addClass("item");
    $(divDiscount).addClass("item__discount");
    $(divImg).addClass("item__img");
    $(divTitle).addClass("item__title");
    $(divPrice).addClass("item__price");

    divItem.append(divDiscount);
    divItem.append(divImg);
    divItem.append(divTitle);
    divItem.append(divPrice);

    $('.products__inner').append(divItem);
}