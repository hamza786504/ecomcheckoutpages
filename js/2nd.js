const first_name = document.getElementById("f_name");
const last_name = document.getElementById("l_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_no");
const number = document.getElementById("number");
const city = document.getElementById("city");
const state = document.getElementById("state");
const street = document.getElementById("street");
const postal_code = document.getElementById("postal_code");
const country = document.getElementById("country");


const load_details = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const res = await result.json();
    if(res){
        let username = res.name.split(" ");
        first_name.innerHTML = username[0];
        email.innerHTML = res.email;
        last_name.innerHTML = username[1];
        phone.innerHTML = res.phone;
        number.innerHTML = res.phone;
        city.innerHTML = res.address.city;
        state.innerHTML = res.address.city;
        street.innerHTML = res.address.street;
        postal_code.innerHTML = res.address.zipcode;
        country.innerHTML = res.address.city;
    }
}

load_details();