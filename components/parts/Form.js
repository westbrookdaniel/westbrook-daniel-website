import { useState } from 'react'
import Button from '../Button'

export default function Form() {
	const [status, setStatus] = useState('Send')

	const handleSubmit = (e) => {
		setStatus('Sending')
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader('Accept', 'application/json')
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				setStatus('Success')
				setTimeout(() => {
					setStatus('Send')
				}, 1000);
			} else {
				setStatus('Failed')
				setTimeout(() => {
					setStatus('Send')
				}, 1000);
			}
		}
		xhr.send(data)
	}

	return (
		<form
			action="https://formspree.io/f/mjvprzdn"
			method="POST"
			onSubmit={handleSubmit}
			className="max-w-lg"
		>
			<input type="email" name="email" className="mb-4 py-2 px-3 w-full rounded-none" placeholder="Email" />
			<textarea
				rows="4"
				type="text"
				name="message"
				className="w-full mb-4 py-2 px-3 rounded-none"
				placeholder="Message"
			></textarea>
			<Button type="submit">{status}</Button>
		</form>
	)
}
