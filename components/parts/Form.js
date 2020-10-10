import Button from '../Button'

export default function Form() {
	return (
		<form className="max-w-lg">
			<div className="grid grid-cols-2 gap-4 mb-4">
				<input type="text" />
				<input type="text" />
			</div>
			<textarea name="" className="w-full mb-4"></textarea>
			<Button onClick={(e) => e.preventDefault()}>
				Send
			</Button>
		</form>
	)
}
