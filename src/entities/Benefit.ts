import { IPlan } from './Plan'

export interface IBenefit {
	id: number
	name: string
	value: number
	Plan?: IPlan
	planId?: string
}
