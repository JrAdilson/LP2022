let alunoService = require('../services/aluno')

const getAlunos = async (req, res, next) => {
    try{
        await alunoService.getAluno()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next(err)
    }
}
const postAlunos = async(req, res, next) => {
    try{
        await alunoService.postAlunos(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const deleteAlunos = async(req, res, next) => {
    try{
        await alunoService.deleteAlunos(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const putAlunos = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await alunoService.putAlunos(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}

const patchAlunos = async(req,res,next) => {
    try{
        let params = req.body
        params.id = req.params.id
        await alunoService.patchAlunos(params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err)
    }
}
module.exports.postAlunos = postAlunos
module.exports.getAlunos = getAlunos
module.exports.deleteAlunos = deleteAlunos
module.exports.putAlunos = putAlunos
module.exports.patchAlunos = patchAlunos