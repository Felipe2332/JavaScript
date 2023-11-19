

let area;
let width;
let height;

width = window.prompt("Digite a largura");
height = window.prompt("Digite a altura");



function calcularArea(width,height)
{
    area = width*height;
    return area;
}

area = calcularArea(width,height);
//Sempre que fala da função tem que colocar os argumentos dela

console.log(area);