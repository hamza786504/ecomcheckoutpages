const disable_form = document.querySelector(".shipping_address_form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone_no");
const number = document.getElementById("number");
const city = document.getElementById("city");
const state = document.getElementById("state");
const street = document.getElementById("street");
const postal_code = document.getElementById("postal_code");
const country = document.getElementById("country");
const shipping_number = document.getElementById("shipping_number");
const shipping_city = document.getElementById("shipping_city");
const shipping_state = document.getElementById("shipping_state");
const shipping_street = document.getElementById("shipping_street");
const shipping_postal_code = document.getElementById("shipping_postal_code");
const shipping_country = document.getElementById("shipping_country");

const contactInfoForm = document.getElementById("fill_contact_info");
const addressInfoForm = document.getElementById("fill_address_info");
const shippingInfoForm = document.getElementById("fill_shipping_info");

let isContactInfoError = false;
let isAddressInfoError = false;



disable_form.classList.add("disable_form");




const validate_field = (element) => {
        if(element.id === "email"){
            if(email.value === ""){
                email.parentNode.classList.add("error");
                isContactInfoError = true;
            }
            if(email.value !== ""){
                email.parentNode.classList.remove("error");
                isContactInfoError = false;
            }
        }
    
        if(element.id === "name"){
            if(name.value === ""){
                name.parentNode.classList.add("error");
                isContactInfoError = true;
            }
            if(name.value !== ""){
                name.parentNode.classList.remove("error");
                isContactInfoError = false;
            }
        }  
        if(element.id === "phone_no"){
            if(phone.value === ""){
                phone.parentNode.classList.add("error");
                isContactInfoError = true;
            }
            if(phone.value !== ""){
                phone.parentNode.classList.remove("error");
                isContactInfoError = false;
            }
        }  
        
        if(element.id === "number"){
            if(number.value === ""){
                number.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(number.value !== ""){
                number.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        } 
        if(element.id === "city"){
            if(city.value === ""){
                city.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(city.value !== ""){
                city.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        }  
        if(element.id === "state"){
            if(state.value === ""){
                state.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(state.value !== ""){
                state.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        }
        if(element.id === "street"){
            if(street.value === ""){
                street.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(street.value !== ""){
                street.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        }  
        if(element.id === "postal_code"){
            if(postal_code.value === ""){
                postal_code.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(postal_code.value !== ""){
                postal_code.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        }
        if(element.id === "country"){
            if(country.value === ""){
                country.parentNode.classList.add("error");
                isAddressInfoError = true;
            }
            if(country.value !== ""){
                country.parentNode.classList.remove("error");
                isAddressInfoError = false;
            }
        }
}



$(function(){
    $('#toggle_shipping_address').click(function(){
        if (this.checked) {
            disable_form.classList.remove("disable_form");
        }
        else{
            disable_form.classList.add("disable_form");
        }
    }) 
})




const insert_details = async () => {


    if(email.value === ""){
        email.parentNode.classList.add("error");
        isContactInfoError = true;
    }else{
        email.parentNode.classList.remove("error");
        isContactInfoError = false;
    }
    if(name.value === ""){
        name.parentNode.classList.add("error");
        isContactInfoError = true;
    }else{
        name.parentNode.classList.remove("error");
        isContactInfoError = false;
    }
    if(phone.value === ""){
        phone.parentNode.classList.add("error");
        isContactInfoError = true;
    }else{
        phone.parentNode.classList.remove("error");
        isContactInfoError = false;
    }



    if(number.value === ""){
        number.parentNode.classList.add("error");
        isAddressInfoError = true;
    }
    if(city.value === ""){
        city.parentNode.classList.add("error");
        isAddressInfoError = true;
    }
    if(state.value === ""){
        state.parentNode.classList.add("error");
        isAddressInfoError = true;
    }
    if(street.value === ""){
        street.parentNode.classList.add("error");
        isAddressInfoError = true;
    }
    if(postal_code.value === ""){
        postal_code.parentNode.classList.add("error");
        isAddressInfoError = true;
    }
    if(country.value === ""){
        country.parentNode.classList.add("error");
        isAddressInfoError = true;
    }


    if(!isContactInfoError && !isAddressInfoError && name.value !== "" && email.value !== "" && phone.value !== "" && number.value !== "" && city.value !== "" && state.value !== "" && street.value !== "" && postal_code.value !== "" && country.value !== ""){
        const result = await fetch("https://jsonplaceholder.typicode.com/users" , {
            method : "POST",
            body : JSON.stringify({
                name : name.value, 
                email : email.value, 
                phone : phone.value,
                number : number.value,
                address : {
                    city : city.value,
                    state : state.value,
                    street : street.value,
                    zipcode : postal_code.value,
                    country : country.value
                },
                shipping_address : {
                    shipping_number : shipping_number.value, 
                    shipping_city : shipping_city.value, 
                    shipping_state : shipping_state.value, 
                    shipping_street : shipping_street.value, 
                    shipping_postal_code : shipping_postal_code.value, 
                    shipping_country : shipping_country.value
                }
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        });
        const res = await result.json();
        if(res){
            console.log(res);
        }
    }else{
        if(isContactInfoError){
            contactInfoForm.classList.add("animate__shakeX");
            setTimeout(() => {
                isError = false;
                contactInfoForm.classList.remove("animate__shakeX");
            }, 1000);
        }else if(isAddressInfoError){
            addressInfoForm.classList.add("animate__shakeX");
            setTimeout(() => {
                isError = false;
                addressInfoForm.classList.remove("animate__shakeX");
            }, 1000);
        }
    }
}










// sending data this data to api as a payload



// {
//     "name": "",
//     "email": "",
//     "phone": "",
//     "number": "",
//     "address": {
//       "city": "",
//       "state": "",
//       "street": "",
//       "zipcode": "",
//       "country": ""
//     },
//     "shipping_address": {
//       "shipping_number": "",
//       "shipping_city": "",
//       "shipping_state": "",
//       "shipping_street": "",
//       "shipping_postal_code": "",
//       "shipping_country": ""
//     }
// }