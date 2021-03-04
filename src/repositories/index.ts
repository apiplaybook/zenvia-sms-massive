import { PersonRepository } from './implementations/PersonRepository'
import { PlanRepository } from './implementations/PlanRepository'

// Inicialiazção e exportação dos repositórios
export const planRepository = new PlanRepository()
export const personRepository = new PersonRepository()
