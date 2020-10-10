import React from 'react'
import { normal } from '../util/transition'

export default function Button({ children, theme = 'yellow', className, ...props }) {
	let themeString
	switch (theme) {
		case 'yellow':
			themeString = 'bg-themeYellow-300 hover:bg-themeYellow-400 active:bg-themeYellow-500 text-black'
			break;
		case 'gray':
			themeString = 'bg-themeGray-200 hover:bg-themeGray-300 active:bg-themeGray-400 text-black'
			break;
		default:
			themeString = 'bg-themeYellow-300 hover:bg-themeYellow-400 active:bg-themeYellow-500 text-black'
			break;
	}
	
	let classString = `${themeString} btn ${normal} `
	if (className) classString += `${className} `
	
	return (
		<button
			className={classString}
			{...props}
		>
			{children}
		</button>
	)
}
