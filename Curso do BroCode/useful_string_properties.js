let username = "    Luis Felipe    "
let phonenumber ="123-456-789"

console.log(username.length);
//Tamanho
console.log(username.charAt(0));
//Letra na posição 0
console.log(username.indexOf("e"));
//Encontrar essa letra, ele conta o espaço
console.log(username.lastIndexOf("e"));
//Encontra a última posição dessa letra(last occurrence)
console.log(username.trim());
//Livra de espaços em branco

username = username.toUpperCase();
//Deixa maiusculo. tolowercase também coloca minusculo



phonenumber = phonenumber.replaceAll("-","/");
//Substitui o hifen pela barra ou não dgita nada para substituir
console.log(phonenumber);

//Existem vários métodos interessantes só digitar . depois da variável e brincar


//Slice() extrai uma sessão de uma string, retorna como uma nova e mantém a original

let fullname= "Luis Felipe Barbosa";
let firstname;
let lastname;

firstname = fullname.slice(0,fullname.indexOf(" "));
lastname = fullname.slice(fullname.indexOf(" ",) + 1);

console.log(firstname);
console.log(lastname);