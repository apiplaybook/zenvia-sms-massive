import { Benefit } from '@prisma/client'

export interface IPlan {
	id: number
	name: string
	benefits: Benefit[]
	discount: number
}
