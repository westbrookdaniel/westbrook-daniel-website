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

	const res = width && height ? { width, height } : { unsized: true }
	return (
		<NextImage {...res} loading={loading} className={classString} {...props} />
	)
}
