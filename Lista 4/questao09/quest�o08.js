const testarEscopo = () => {
    if (true) {
        var variavelVar = "Eu sou uma variável var";
        let variavelLet = "Eu sou uma variável let";
        const variavelConst = "Eu sou uma variável const";
        console.log("Dentro do bloco:");
        console.log(variavelVar);
        console.log(variavelLet); 
        console.log(variavelConst);
    }

    console.log("Fora do bloco:");
    console.log(variavelVar); // Eu sou uma variável var (var tem escopo de função)
    
    try {
        console.log(variavelLet); // ReferenceError: variavelLet não está definida
    } catch (e) {
        console.log("variavelLet não é acessível fora do bloco.");
    }
    
    try {
        console.log(variavelConst); // ReferenceError: variavelConst não está definida
    } catch (e) {
        console.log("variavelConst não é acessível fora do bloco.");
    }
}

testarEscopo();
