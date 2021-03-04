import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

// Inicialização do servidor express
const app = express()

// Indica para o servidor usar o body parser
app.use(bodyParser.json())

// Indica para o servidor usar as rotas do arquivo routes.ts
app.use(routes)

// Indica para o servidor ouvir a porta 4000
app.listen(4000, () => console.log('Servidor rodando na porta 4000'))
