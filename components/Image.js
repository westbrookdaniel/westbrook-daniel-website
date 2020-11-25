import { useState } from 'react'
import NextImage from 'next/image'

export default function Image({
	className,
	contain,
	width,
	height,
	loading = 'lazy',
	src,
	...props
}) {
	let classString = ''
	if (contain) classString = 'h-full object-contain'
	if (className) classString += ` ${className}`

	const res = width && height ? { width, height } : { unsized: true }
	return (
		<NextImage
			{...res}
			src={src}
			loading={loading}
			className={classString}
			{...props}
		/>
	)
}
