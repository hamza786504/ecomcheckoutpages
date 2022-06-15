const fetch_orders = async () => {
    // const result = await fetch("api/routes");
    // const res = await result.json();
    const res = [
        {
            order_number : "46985",
            order_date : "Aug 17 2019",
            products : [
                {
                    product_price : 200.37,
                    product_image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    product_title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    product_quantity : 1
                },
                {
                    product_price : 200.37,
                    product_image : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    product_title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    product_quantity : 3
                }
            ]
        },
        {
            order_number : "46985",
            order_date : "Aug 17 2019",
            products : [
                {
                    product_price : 200.37,
                    product_image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    product_title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    product_quantity : 1
                },
                {
                    product_price : 200.37,
                    product_image : "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    product_title : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    product_quantity : 3
                }
            ]
        }
    ]
    if(!res){
        document.getElementById("fetch_orders").innerHTML = "<div class='col-12 d-flex align-items-center justify-content-center'>"
            "<h2 style='text-align: center;'>Not ordered yet!</h2>" +
        "</div>";
    }else{
        let body = "";
        for(let j = 0 ; j < res.length ; j++){
            body += `<div class='col-md-6 mb-3'>
            <div class='card'>
                <h6 class='card-header d-flex flex-column align-items-center justify-content-between py-3'>
                    <span class='order_number'>ORDER <span id='order_number'>${res[j].order_number}</span></span>
                    <span class='order_date mt-1'>${res[j].order_date}</span>
                    <span class='product_price mt-1'><span class='currency'>$</span><span id='amount'>`;
                    let total = 0;
                    for(let k = 0 ; k < res[j].products.length ; k++){
                        total += res[j].products[k].product_price * res[j].products[k].product_quantity
                    }
                    body += `${total}</span></span>
                </h6>
                <div class='card-body'>
                    <div class='container-fluid'>
                        <ul class='ordered_products_list' style='max-width: 92%; margin: 0 auto;'>`;
                            for(let i = 0 ; i < res[j].products.length ; i++){
                                body += `<li class='row py-2 d-flex align-items-center justify-content-between'>
                                    <div class='col px-0 product d-flex align-items-stretch justify-content-start'>
                                        <div class='product_image'>
                                            <img src='${res[j].products[i].product_image}' alt='image' />
                                        </div>
                                        <div class='product_details flex-column d-flex align-items-start'>
                                            <a href='#'>${res[j].products[i].product_title.substring(0 , 40)}...</a>
                                            <p>
                                                <span class='single_price'>${res[j].products[i].product_price}</span>
                                                <span class='quantity'> X ${res[j].products[i].product_quantity}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class='col-3 px-0 price d-flex flex-column align-items-end'>
                                        <span class='total'
                                            style='font-size: 13px; color: rgb(192, 192, 192);'>TOTAL</span>
                                        <span class='single_price'>${res[j].products[i].product_price * res[j].products[i].product_quantity}</span>
                                    </div>
                                </li>`
                            }
                        body += `</ul>
                        <div class='buttons mt-4 d-flex align-items-center justify-content-between'>
                            <input type='button' class='button primary_button_round' value='Order Details'>
                            <input type='button' class='button gray_button_round' value='Invoice'>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
        }
        document.getElementById("fetch_orders").innerHTML = body;
    }
}
fetch_orders();