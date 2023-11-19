//Uso do `` para "FACILIAR" o dysplay de informações

let nome = "Luis";
let itens = "3";
let dinheiro = "75";

//console.log(`Olá ${nome}. Tudo certo?`);
//console.log(`Você possui ${itens} no carrinho`);
//console.log(`E atualmente tem ${dinheiro} reais`);

//Além disso, pode tirar tudo esse console.log aí

let texto = 
`Olá ${nome}. Tudo certo?
Você possui ${itens} no carrinho
E atualmente tem ${dinheiro} reais`;

document.getElementById("minhalabel").innerHTML = texto;