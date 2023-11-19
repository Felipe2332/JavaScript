


let grade = "B";

switch(grade)
{
    case "A":
    console.log("Você foi bem ");
    break
    //Tá checando se 'grade' é igual case "A", se sim faça algo

    case "B":
    console.log("Mais o menos");
    break

    case "C":
    console.log("BEM");
    break

    case "D":
    console.log("Dá para melhorar");
    break

    case "F":
    console.log("Fudeu");
    break

    default:
        console.log(grade,"Talvez você tenha digitado errado");
}

//pode fazer um switch(true) e adicionar condições nos cases ex: case grade >=90: console.log("dvnfji")
//O uso do 'case' é mais eficiente que IF ELSE. Não tem nada de errado usar eles, mas não se 10 deles