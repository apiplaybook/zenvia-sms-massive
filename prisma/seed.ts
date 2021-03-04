import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	// Inserção dos benefícios
	await prisma.benefit.create({
		data: { id: 1, name: '5GB de Internet Móvel', value: 19.99 },
	})
	await prisma.benefit.create({
		data: { id: 2, name: '10GB de Internet Móvel', value: 29.99 },
	})
	await prisma.benefit.create({
		data: { id: 3, name: '30GB de Internet Móvel', value: 49.99 },
	})

	await prisma.benefit.create({
		data: { id: 4, name: '60 minutos telefone fixo por mês', value: 9.99 },
	})
	await prisma.benefit.create({
		data: { id: 5, name: '120 minutos telefone fixo por mês', value: 19.99 },
	})
	await prisma.benefit.create({
		data: { id: 6, name: 'Minutos ilimitados telefone fixo', value: 30.99 },
	})

	await prisma.benefit.create({
		data: { id: 7, name: '40 megas internet fixa', value: 39.99 },
	})
	await prisma.benefit.create({
		data: { id: 8, name: '100 megas internet fixa', value: 89.99 },
	})
	await prisma.benefit.create({
		data: { id: 9, name: '300 megas internet fixa', value: 129.99 },
	})

	console.log('Benefícios criados.')

	// Inserção dos planos
	await prisma.plan.create({
		data: {
			id: 1,
			name: 'Básico',
			discount: 0,
			benefits: { connect: [{ id: 1 }, { id: 4 }, { id: 7 }] },
		},
	})
	await prisma.plan.create({
		data: {
			id: 2,
			name: 'Padrão',
			discount: 0.1,
			benefits: { connect: [{ id: 2 }, { id: 5 }, { id: 8 }] },
		},
	})
	await prisma.plan.create({
		data: {
			id: 3,
			name: 'Avançado',
			discount: 0.25,
			benefits: { connect: [{ id: 3 }, { id: 6 }, { id: 9 }] },
		},
	})

	console.log('Planos criados.')

	// Inserção das pessoas
	await prisma.person.create({
		data: { name: 'Pessoa Teste', phone: '5511999999999', planId: 2 },
	})

	console.log('Pessoas criadas.')
}

main().catch((e) => console.error(e))
