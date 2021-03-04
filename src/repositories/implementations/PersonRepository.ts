import { planRepository } from './../index'
import { PrismaClient } from '@prisma/client'
import { IPerson } from './../../entities/Person'
import { IPlanWithTotal } from './../PlanRepository'
import { IPersonRepository } from '../PersonRepository'

const prisma = new PrismaClient() // Inicialização do PrismaClient

export class PersonRepository implements IPersonRepository {
	async findPeopleWithCheapestPlansByMostExpensivePlan(
		mostExpensivePlan: IPlanWithTotal
	): Promise<IPerson[]> {
		// Busca e todas as pessoas que não possuem o plano mais caro
		const people = await prisma.person.findMany({
			where: { planId: { not: mostExpensivePlan.id } },
		})

		// Busca todos os planos com seus respectivos valores totais
		const allPlansWithTotal = await planRepository.findAllWithTotal()

		// Retorna as pessoas e seus respectivos planos
		return await people.map((person) => {
			return {
				...person,
				Plan: allPlansWithTotal.filter((plan) => plan.id === person.planId)[0],
			}
		})
	}
}
