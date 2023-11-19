const numero = Math.floor(Math.random() * 10 + 1);


let tentativas = 0;

document.getElementById("tentebotao").onclick = function(){
    let digitado = document.getElementById("guessfield").value;
    tentativas+=1;

    if (digitado == numero)
    {
        alert(`Parabéns você acertou o número. O número é ${numero}Você fez ${tentativas} tentativas`);
    }
    else if(digitado < numero)
    {
        alert("Tente um número maior");
        if(numero % 2 ==0)
        {
            document.getElementById("minhalabel").innerHTML = "DICA. O número é par"
        }
        else
        document.getElementById("minhalabel").innerHTML = "DICA. O número é impar"
        
    }
    else
    {
        alert("Tente um número menor");
        if(numero % 2 ==0)
        {
            document.getElementById("minhalabel").innerHTML = "DICA. O número é par"
        }
        else
        document.getElementById("minhalabel").innerHTML = "DICA. O número é impar"
    }

}//Dar dica ao usuario(par impar)