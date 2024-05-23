const mediaDeNumeros = (n1, n2, n3) => {
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
    let numero3 = parseFloat(n3);

    let numeros = [numero1, numero2, numero3];
    
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    let media = soma / numeros.length;
    
    let mediaFormatada = media.toFixed(2);
    
    return mediaFormatada;
}

var num1 = 10;
var num2 = 30;
var num3 = 80;

var media = mediaDeNumeros(num1, num2, num3);
console.log(`A média dos números ${num1}, ${num2} e ${num3} é ${media}.`);
