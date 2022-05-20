const db = require('../configs/pg')

const sql_get = 
 `select id, nome, sobrenome, periodo, observacao from alunos`
const getAluno = async () => {
    let aluno = {}
    await db.query(sql_get)
    .then(ret => aluno = {total: ret.rows.length, alunos: ret.rows})
    .catch(err => aluno = err.stack)
    return aluno
}

const sql_insert = 
   `insert into alunos(id,nome,sobrenome,periodo,observacao) values ($1, $2, $3, $4, $5)`
const postAlunos = async(params) => {
    const { id, nome, sobrenome, periodo, observacao} = params
    await db.query(sql_insert, [id, nome, sobrenome, periodo, observacao])
}
module.exports.postAlunos = postAlunos
module.exports.getAluno = getAluno