



document.getElementById("mybutton").onclick = function(){

    const mycheckbox = document.getElementById("mycheckbox");
    const visabutton = document.getElementById("visabutton");
    const mastercardbutton = document.getElementById("masterbutton");
    const paypalbutton = document.getElementById("paypalbutton");

    if(mycheckbox.checked)
    {
       document.getElementById("minhalabel").innerHTML = "Você está inscrito";
    }
    else
    {
        document.getElementById("minhalabel").innerHTML = "Você não está inscrito";
    }

    if(visabutton.checked)
    {
        document.getElementById("minhalabel2").innerHTML = "Você está pagando com Visa";
    }
    else if(mastercardbutton.checked)
    {
        document.getElementById("minhalabel2").innerHTML = "Você está pagando com Mastercard";
    }
    else if(paypalbutton.checked)
    {
        document.getElementById("minhalabel2").innerHTML = "Você está pagando com Paypal";
    }
    else
    {
        document.getElementById("minhalabel2").innerHTML = "Selecione um método de pagamento";
    }

}