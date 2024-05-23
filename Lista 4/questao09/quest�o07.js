let wallyLet = "Esse Wally com Let é global?";
var wallyVar = "Esse Wally com Var é global?";

const variavelPresa = () => {
    var wally = "Encontrei o Wally dentro da Função.";   
    let wallyGuardado = "Esse Wally você só encontra dentro da função.";

    wallyVar = "Consigo alterar essa Variável que está fora da função?";

    console.log(`Eu ${wally}`);
    console.log(wallyGuardado);
    console.log(wallyLet);
    console.log(wallyVar);
}

console.log(wallyVar);
variavelPresa();

// Tentativa de acessar variáveis locais dentro da função gera erro
// console.log(`Eu ${wally}`);
// console.log(`Eu ${wallyGuardado}`);
