let nome = "Yuri Diego Almeida Silva dos Santos"

function primeiroNome () {
    let nomeSeparado = nome.split(" ");
    let primeiroNome = nomeSeparado.shift()

    console.log("Primeiro nome:",primeiroNome)
}

primeiroNome()