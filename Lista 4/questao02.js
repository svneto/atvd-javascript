const numeros = [1, 2, 3, 4, 5];

const numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log("Números originais:", numeros);
console.log("Números dobrados:", numerosDobrados);