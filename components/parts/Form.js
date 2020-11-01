import Button from '../Button'

export default function Form() {
	return (
		<form className="max-w-lg">
			<div className="grid grid-cols-2 gap-4 mb-4">
				<input
					type="text"
					className="py-2 px-3"
					placeholder="Name"
				/>
				<input
					type="Email"
					className="py-2 px-3"
					placeholder="Email"
				/>
			</div>
			<textarea
				rows="4"
				type="text"
				className="w-full mb-4 py-2 px-3"
				placeholder="Message"
			></textarea>
			<Button onClick={(e) => e.preventDefault()}>Send</Button>
		</form>
	)
}
