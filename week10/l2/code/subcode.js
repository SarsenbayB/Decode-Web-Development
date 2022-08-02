// AJAX query

export function load() {
    $(".load-data").click(function() {
        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/products",
            success: function(data) {
                $('.products').text(data.products[0]);
                console.log(data.products[0]);
                // console.log(data);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
}