let nome;

do
{
    nome = window.prompt("Digite o nome");
}while(nome == "")


console.log("Olá", nome);

//Faz algo pelo menos uma vez para verificar
//Somente com o while, talvez o código pule completamente

//Lembrando que existe loop de for. Eu não criei o arquivo, mas é igual em 'C'

for(let i= 1; i <= 20; i++ )
{
    if(i==13)
    {
        break;
    }
    console.log(i);
}

//Break ele para completamente. Continue ele pula