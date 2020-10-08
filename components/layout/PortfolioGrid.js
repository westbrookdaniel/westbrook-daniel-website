import Divider from '../Divider'

export default function PortfolioGrid() {
	const El = () => {
		return (
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
				eligendi, numquam doloribus fugit id dicta ipsa animi quia maiores
				molestias.
			</p>
		)
	}
	const arr = [El, El, El, El, El]
	const arrOut = addDividers(arr)

	return (
		<div>
			<div className="grid grid-cols-2">
				{arrOut.map((el) => typeof el === 'function' && el())}
			</div>
		</div>
	)
}

export const addDividers = (arr) => {
	const output = []
	for (let i = 0; i < arr.length; i++) {
		const el = arr[i]
		if (!(i % 2)) {
			output.push(() => <Divider className="mt-6 mb-5 grid-span" />)
		}
		output.push(el)
	}
	return output
}
