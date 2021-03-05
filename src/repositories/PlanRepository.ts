import { Benefit } from '@prisma/client'
import { IPlan } from '../entities/Plan'

export interface IPlanWithTotal extends Omit<IPlan, 'benefits'> {
	total: number
	benefits?: Benefit[]
}

export interface IPlanRepository {
	findAllWithTotal(): Promise<IPlanWithTotal[]>
	findMostExpensivePlan(): Promise<IPlanWithTotal>
}
