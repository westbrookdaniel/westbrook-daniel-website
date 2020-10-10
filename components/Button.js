import React from 'react'
import { normal } from '../util/transition'

export default function Button({ children, ...props }) {
	return (
		<button
			className={`btn text-black bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 ${normal}`}
			{...props}
		>
			{children}
		</button>
	)
}
