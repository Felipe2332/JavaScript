//Formata numeros para strings necessárias(temperatura, quilometragem...)
//Só trocar "o que estiver aqui dentro(pt-br, en-US)"

let numero = 123456.789;
let numero1 = 40;
let numero2 = 50;
//Currency 
numero = numero.toLocaleString("pt-BR",{style: "currency", currency : "BRL"});
document.getElementById("minhalabel").innerHTML = numero;

//Percent
numero1 = numero1.toLocaleString(undefined,{style: "percent"});
document.getElementById("minhalabel1").innerHTML = numero1;

//Temp
numero2 = numero2.toLocaleString(undefined,{style: "unit", unit: "celsius"});
document.getElementById("minhalabel2").innerHTML = numero2;