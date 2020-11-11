import NextImage from 'next/image'

export default function Image({
	className,
	contain,
	width,
	height,
	loading = 'lazy',
	...props
}) {
	let classString = ''
	if (contain) classString = 'h-full object-contain'
	if (className) classString += ` ${className}`

	return (
		<NextImage loading={loading} className={classString} layout="responsive" {...props} />
	)
}
