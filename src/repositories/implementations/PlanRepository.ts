import { PrismaClient } from '@prisma/client'
import { IPlanWithTotal } from './../PlanRepository'
import { IPlanRepository } from '../PlanRepository'

const prisma = new PrismaClient()

export class PlanRepository implements IPlanRepository {
	async findAllWithTotal(): Promise<IPlanWithTotal[]> {
		// Busca  todos os planos no banco de dados
		const allPlans = await prisma.plan.findMany()

		// Adiciona o valor total da soma dos benefícios deste plano e retorna
		const plansWithTotal = await allPlans.map(async (plan) => {
			return {
				...plan,
				total: (
					await prisma.benefit.aggregate({
						sum: { value: true },
						where: { planId: plan.id },
					})
				).sum.value,
			}
		})

		// Retorna os planos com os totais
		return Promise.all(plansWithTotal).then(function (results) {
			return results
		})
	}
	async findMostExpensivePlan(): Promise<IPlanWithTotal> {
		// Busca todos os planos no banco de dados
		const allPlans = await prisma.plan.findMany()

		// Adiciona o valor total da soma dos benefícios deste plano
		const finalPlans = allPlans.map(async (plan) => {
			return {
				...plan,
				total: (
					await prisma.benefit.aggregate({
						sum: { value: true },
						where: { planId: plan.id },
					})
				).sum.value,
			}
		})

		// Retorna o plano mais caro
		return await Promise.all(finalPlans).then(function (results) {
			const higherTotal = Math.max.apply(
				Math,
				results.map(function (o) {
					return o.total
				})
			)
			return results.filter((result) => result.total === higherTotal)[0]
		})
	}
}
