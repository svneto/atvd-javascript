//ESSAS VIRIAVEIS QUE ESTAO FORA DA FUNCAO CONSIGO ACESSA-LAS DENTRO E FORA DA FUNCAO
let wallyLet = "Esse Wally com Let Eh global?"
var wallyVar = "Esse Wally com Var Eh global?"

function variavelPresa(){
    // ESSAS VARIAVEIS QUE ESTAO DENTRO DA FUNCAO SO CONSIGO ACESSA-LAS NA PROPRIA FUNCAO
    var wally = "Encontrei o Wally dentro da Funcao.";   
    let wallyGuardado = "Esse Wally voce so encontra dentro da funcao."

    // SIM, CONSIGO ALTERAR UMA VARIAVEL QUE ESTA FORA DA FUNCAO, PELA PROPRIA FUNCAO.
    wallyVar = "Consigo alterar essa Variavel que esta fora da funcao?"

    console.log(`Eu ${wally}`)
    console.log(wallyGuardado);
    console.log(wallyLet);
    console.log(wallyVar);
}

// ESSA VARIAVEL FOI DEFINIDA FORA DA FUNCAO, ENTAO CONSIGO ACESSA-LA
// console.log(wallyLet)

console.log(wallyVar);
variavelPresa();

// EU NAO CONSIGO ACESSAR ESSAS VARIAVEIS FORA DA FUNCAO
// console.log(`Eu ${wally}`);
// console.log(`Eu ${wallyGuardado}`);

