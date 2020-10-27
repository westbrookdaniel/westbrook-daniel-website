import NextImage from 'next/image'

export default function Image({ className, contain, ...props }) {
	let classString = ''
	if (contain) classString = 'h-full object-contain'
	if (className) classString += ` ${className}`

	return <NextImage unsized className={classString} {...props} />
}
