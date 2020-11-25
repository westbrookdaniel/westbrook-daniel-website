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
	const [isLoading, setIsLoading] = useState(true)

	let classString = ''
	if (contain) classString = 'h-full object-contain'
	if (className) classString += ` ${className}`
	if (isLoading) classString += ' bg-themeGray-600'

	const res = width && height ? { width, height } : { unsized: true }
	return (
		<NextImage
			{...res}
			src={src}
			onLoad={() => setIsLoading(false)}
			loading={loading}
			className={classString}
			{...props}
		/>
	)
}
