const alunoController = require('../controllers/aluno')

module.exports = (app) => {
    app.get('/aluno', alunoController.getAlunos),
    app.post('/aluno', alunoController.postAlunos)
}