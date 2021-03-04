import { Request, Response } from 'express'
import { config } from 'dotenv'
import { api } from './../../services/api'
import { planRepository, personRepository } from './../../repositories/index'
import { transformMoney } from './../../../utils/transformMoney'

config() // Inicialização do dotenv

export class SendPlanUpgradeController {
	async handle(request: Request, response: Response): Promise<Response> {
		// Tente
		try {
			// Busca no banco de dados o plano mais caro
			const mostExpensivePlan = await planRepository.findMostExpensivePlan()

			// Busca no banco de dados as pessoas que não possuem o plano mais caro
			const peopleToSendMessage = await personRepository.findPeopleWithCheapestPlansByMostExpensivePlan(
				mostExpensivePlan
			)

			// Enviar um SMS para todas essas pessoas, oferecendo uma atualização no plano com desconto
			peopleToSendMessage.forEach((people) => {
				api
					.post(
						'/channels/sms/messages',
						{
							from: `${process.env.KEYWORD}`,
							to: people.phone,
							contents: [
								{
									type: 'text',
									text: `Olá ${
										people.name
									}, tudo bem? Somos da sua provedora de telefonia e internet TelenetCopany e estamos aqui para oferecer um upgrade no seu plano. Seu Plano é o ${
										people.Plan?.name
									} e você paga ${transformMoney(
										people.Plan?.total
									)}. Você pode atualizar ele para o Plano ${
										mostExpensivePlan.name
									}, onde os seus benefícios avulsos saem por um total de ${transformMoney(
										mostExpensivePlan.total
									)} e com o plano sai por apenas ${transformMoney(
										parseFloat(
											(
												mostExpensivePlan.total -
												mostExpensivePlan.total * mostExpensivePlan.discount
											).toFixed(2)
										)
									)}. Entre em contato conosco respondendo este SMS para prosseguir com o upgrade de plano.`,
								},
							],
						},
						{
							headers: {
								'X-API-TOKEN': `${process.env.API_TOKEN}`,
							},
						}
					)
					.then((res) => console.log('\nSucesso:\n', res.data))
					.catch((error) => console.log('\nFalha:\n', error.response.data))
			})

			return response.status(200).send()
		} catch (error) {
			return response.status(400).send(error)
		}
	}
}
