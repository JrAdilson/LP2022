const getAluno = async (params) => {
    let aluno = {}
    if(params.name === "Adilson"){
        aluno.id = 9055
        aluno.nome = 'Adilson'
        aluno.sobrenome = 'Junior'
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    }else{
        throw "Aluno não cadastrado!"
    }
    return aluno
}
module.exports.getAluno = getAluno