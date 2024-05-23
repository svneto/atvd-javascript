const aluno = {
    nome: "caio",
    idade: 35,
    curso: "sistemas de informação",
    notas: {
        POObasica: 9,
        POOavancada: 8,
        ProcessoNegocio: 4
    }
}

console.log("nome: ",aluno.nome)
console.log("idade: ",aluno.idade)
console.log("curso: ",aluno.curso)
for (let competencia in aluno.notas) {
    console.log(`${competencia}: ${aluno.notas[competencia]}`)
}
