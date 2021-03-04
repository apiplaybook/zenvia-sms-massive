import { IPlanWithTotal } from './PlanRepository'
import { IPerson } from '../entities/Person'

export interface IPersonRepository {
	findPeopleWithCheapestPlansByMostExpensivePlan(
		mostExpensivePlan: IPlanWithTotal
	): Promise<IPerson[]>
}
