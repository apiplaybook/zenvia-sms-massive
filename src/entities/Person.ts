import { IPlanWithTotal } from './../repositories/PlanRepository'

export interface IPerson {
	id: number
	name: string
	phone: string
	planId?: number | null
	Plan?: IPlanWithTotal
}
