const disable_form = document.querySelector(".shipping_address_form");

disable_form.classList.add("disable_form");

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