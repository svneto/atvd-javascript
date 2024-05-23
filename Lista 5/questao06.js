let nome = "Silas Miguel Sarmento Araújo"

function primeiroUltimoNome () {
    let nomeSeparado = nome.split(" ");
    let primeiroNome = nomeSeparado.shift()
    let ultimoNome = nomeSeparado.pop()
    console.log("Primeiro e ultimo nome:",primeiroNome,ultimoNome)
}

primeiroUltimoNome()