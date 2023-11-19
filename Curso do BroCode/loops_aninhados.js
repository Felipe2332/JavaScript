
let simbolos = window.prompt("Digite um símbolo");
let linhas = window.prompt("Digite o número de linhas");
let colunas = window.prompt("Digite o número de colunas");

for (let i = 1; i<=linhas;i++)
{
    for(let j = 1; j <= colunas; j++ )
    {
        document.getElementById("minhalabel").innerHTML +=simbolos;
    }
    document.getElementById("minhalabel").innerHTML +="<br>";
    
}