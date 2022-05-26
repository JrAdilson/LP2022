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

const sql_delete =
    `delete from alunos WHERE id = $1`
const deleteAlunos = async(params) => {
    const { id } = params
    await db.query(sql_delete, [id])
}

const sql_updateput = 
    `update alunos set 
    nome = $2, 
    sobrenome = $3, 
    periodo = $4, 
    observacao = $5 
    WHERE id = $1`
const putAlunos = async(params) => {
    const {id,nome, sobrenome, periodo, observacao} = params
    await db.query(sql_updateput, [id, nome, sobrenome, periodo, observacao])
}

const sql_updatepatch =
    `update alunos set
    `
const patchAlunos = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.nome){
        countParams++
        fields += `nome = $${countParams}`
        binds.push(params.nome)
    }
    if(params.sobrenome){
        countParams++
        fields += `sobrenome = $${countParams}`
        binds.push(params.sobrenome)
    }
    if(params.periodo){
        countParams++
        fields += `periodo = $${countParams}`
        binds.push(params.periodo)
    }
    if(params.observacao){
        countParams++
        fields += `observacao = $${countParams}`
        binds.push(params.observacao)
    }
    let sql = sql_updatepatch + fields + ' where id = $1 '
    return await db.query(sql, binds)
}
module.exports.postAlunos = postAlunos
module.exports.getAluno = getAluno
module.exports.deleteAlunos = deleteAlunos
module.exports.putAlunos = putAlunos
module.exports.patchAlunos = patchAlunos