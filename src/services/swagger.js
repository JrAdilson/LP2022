const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API HORUS ALUNOS",
        description: "Documentação da API Horus Alunos"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/aluno.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)