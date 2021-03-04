import express from 'express'
import { sendPlanUpgradeController } from './UseCases/SendPlanUpgrade/index'

// Inicialização do Router do express
const routes = express.Router()

// Declaração da rota GET /sendPlanUpgrade que iniciara o processo de envio de SMS em massa
routes.get('/sendPlanUpgrade', sendPlanUpgradeController.handle)

export default routes
