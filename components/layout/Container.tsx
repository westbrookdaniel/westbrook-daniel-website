import { CSSProperties } from 'react'

export interface ContainerProps {
	spaced?: boolean
	className?: string
	style?: CSSProperties
	[key: string]: any
}

export default function Container({
	children,
	spaced,
	className = '',
	style = {},
	...props
}: ContainerProps) {
	let classString = `px-8 md:px-16 lg:px-24 w-full m-auto`
	if (spaced) classString += ` py-8 lg:py-10`
	if (className) classString += ` ${className}`

	return (
		<div
			style={{ maxWidth: '1400px', ...style }}
			className={classString}
			{...props}
		>
			{children}
		</div>
	)
}
