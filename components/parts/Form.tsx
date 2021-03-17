import { FormEvent, useState } from 'react'
import Button from '../Button'

export default function Form() {
    const [status, setStatus] = useState<string | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setStatus('Sending')
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = new FormData(form)
        if (!data.get('email')) {
            setStatus('Please Enter Your Email')
            return
        }
        if (!data.get('message')) {
            setStatus('Please Enter a Message')
            return
        }
        const xhr = new XMLHttpRequest()
        xhr.open(form.method, form.action)
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return
            if (xhr.status === 200) {
                form.reset()
                setStatus('Successfully Sent')
            } else {
                setStatus('Failed. Please Try Again')
            }
        }
        xhr.send(data)
    }

    return (
        <form
            action="https://formspree.io/f/mjvprzdn"
            method="POST"
            onSubmit={e => handleSubmit(e)}
        >
            <input
                id="email"
                type="email"
                name="email"
                className="mb-4 py-2 px-3 w-full rounded-none"
                placeholder="Email"
            />
            <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full mb-4 py-2 px-3 rounded-none"
                placeholder="Message"
            ></textarea>
            <div className="sm:flex items-center sm:space-x-4">
                <Button className="mb-4 sm:mb-0" type="submit">
                    Send
                </Button>
                {status && (
                    <p className="border-line border-themeGray-200 px-3 py-2">
                        {status}
                    </p>
                )}
            </div>
        </form>
    )
}
