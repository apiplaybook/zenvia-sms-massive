export const transformMoney = (value?: number) => {
	if (!value) {
		return ''
	}
	const money = value.toString().split('.')
	return `R$ ${money[0]},${money[1]}`
}
