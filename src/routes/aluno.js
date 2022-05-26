const alunoController = require('../controllers/aluno')

module.exports = (app) => {
    app.get('/aluno', alunoController.getAlunos),
    app.post('/aluno', alunoController.postAlunos)
    app.delete('/aluno/:id', alunoController.deleteAlunos)
    app.put('/aluno/:id', alunoController.putAlunos)
    app.patch('/aluno/:id', alunoController.patchAlunos)
}