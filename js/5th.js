const load_products = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const res = await result.json();
    if(res){
        let body = "";
        for(let i = 0; i < res.length ; i++){
            body += `<div class="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card h-100 product_card">
                <h6 class="card-header pb-0 d-flex align-items-center justify-content-start">
                    <div class="product_image">
                        <img src="${res[i].image}" alt="">
                    </div>
                    <a href="#" class="product_name">${res[i].title.substring(0 ,25)}</a>
                </h6>
                <div class="card-body">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <h6>Quantity</h6>
                                </th>
                                <th>
                                    <h6>price</h6>
                                </th>
                                <th>
                                    <h6>discount</h6>
                                </th>
                                <th>
                                    <h6>total</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${res[i].quantity}</td>
                                <td style="color: rgb(129, 129, 129);">$ ${res[i].price}</td>
                                <td style="font-weight: bold;">${res[i].discount}</td>
                                <td style="font-weight: bold;">$ ${res[i].quantity * res[i].price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`
        // if(i == 1) break;
        }
        document.getElementById("load_products").innerHTML = body;
    }
}


load_products()





const load_address = async () => {
    // const result = await fetch("https://fakestoreapi.com/products");
    // const res = await result.json();

    const res = [
        {
            "name": "",
            "email": "",
            "phone": "",
            "number": "",
            "address": {
              "city": "new york",
              "state": "abc",
              "street": "xyz",
              "zipcode": "1234",
              "country": "hij"
            },
            "shipping_address": {
              "shipping_number": "kl;j",
              "shipping_city": "new york",
              "shipping_state": "abc",
              "shipping_street": "xyz",
              "shipping_postal_code": "1234",
              "shipping_country": "hij"
            }
        }
    ]
    let body = "";
    if(res){
        body += `<div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100 payment_info">
            <h6 class="card-header p-4 d-flex align-items-center justify-content-start">
                <span>Shipping Address</span>
            </h6>
            <div class="card-body p-4 pt-2">
                <p>${res[0].shipping_address.shipping_street} ${res[0].shipping_address.shipping_state} ${res[0].shipping_address.shipping_country}</p>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100 payment_info">
            <h6 class="card-header p-4 d-flex align-items-center justify-content-start">
                <span>Billing Address</span>
            </h6>
            <div class="card-body p-4 pt-2">
                <p>${res[0].address.street} ${res[0].address.state} ${res[0].address.country}</p>
            </div>
        </div>
    </div>`
        document.getElementById("load_address").innerHTML = body;
    }
}

load_address();





const load_process = async () => {
    // const result = await fetch("https://fakestoreapi.com/products");
    // const res = await result.json();
    const res = {
        "image" : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        payment : {
            payment : "payment",
            paid : "paid",
            method : "Cradit Card"
        },
        shipping : {
            shipping : "shipping",
            method : "UPS",
            traking_number : "123456"
        },
        status : {
            status : "status",
            method : "shipping"
        }
    }

    if(res){
        let body = `<div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card_heading">${res.payment.payment}</h5>
                <div class="content d-flex align-items-start justify-content-start">
                    <div class="mono" style="width: 50px; height: 50px; margin-right: 20px;">
                        <img src="${res.image}" alt="" style="height: 100%; width: 100%; object-fit: cover;" />
                    </div>
                    <span>
                        <p style="margin-bottom: 0 !important; font-size: 20px;">${res.payment.payment}</p>
                        <div style="color: #afafaf; text-transform: capitalize;">${res.payment.paid}</div>
                        <div style="color: black; text-transform: capitalize; font-size: 14px;">${res.payment.method}
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card_heading">${res.shipping.shipping}</h5>
                <div class="content d-flex align-items-start justify-content-start">
                    <div class="mono" style="width: 50px; height: 50px; margin-right: 20px;">
                        <img src="${res.image}" alt="" style="height: 100%; width: 100%; object-fit: cover;" />
                    </div>
                    <span>
                        <p style="margin-bottom: 0 !important; font-size: 20px;">${res.shipping.shipping}</p>
                        <div style="color: #afafaf; text-transform: capitalize;">${res.shipping.method}</div>
                        <div style="color: black; text-transform: capitalize; font-size: 14px;">Tracking number <a href="/" style="text-decoration: none;">${res.shipping.traking_number}</a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card_heading">${res.status.status}</h5>
                <div class="content d-flex align-items-start justify-content-start">
                    <div class="mono" style="width: 50px; height: 50px; margin-right: 20px;">
                        <img src="${res.image}" alt="" style="height: 100%; width: 100%; object-fit: cover;" />
                    </div>
                    <span>
                        <p style="margin-bottom: 0 !important; font-size: 20px;">${res.status.status}</p>
                        <div style="color: #afafaf; text-transform: capitalize;">${res.shipping.shipping}</div>
                        <a href="/" style="text-decoration: none;">View invoice</a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>`;
        document.getElementById("load_process").innerHTML = body;
    }
}


load_process();





const load_payment_info = async () => {
    // const result = await fetch("/api/routes");
    // const res = await result.json();
    const res = [
        {
            subtotal : 1,
            shipping_price : 45.00,
            order_tax : 0,
            total : 45.00
        }
    ]
    let body = `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100 payment_info">
        <h6 class="card-header p-4 d-flex align-items-center justify-content-start">
            <span>Payment information</span>
        </h6>
        <div class="card-body p-4 pt-2">
            <table>
                <thead>
                    <tr>
                        <th>
                            <h6>Order subtotal</h6>
                        </th>
                        <th>
                            <h6>Order shipping</h6>
                        </th>
                        <th>
                            <h6>Order tax</h6>
                        </th>
                        <th>
                            <h6>Order total</h6>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${res[0].subtotal}</td>
                        <td style="color: rgb(129, 129, 129);">$${res[0].shipping_price}</td>
                        <td>${res[0].order_tax}</td>
                        <td>$${res[0].total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`
    document.getElementById("load_payment_info").innerHTML = body;
}

load_payment_info();