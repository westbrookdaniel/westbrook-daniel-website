export default function Image({ className, contain, ...props }) {
	let classString = ''
	if (contain) classString = 'h-full object-contain'
	if (className) classString += ` ${className}`

	return (
			<img className={classString} {...props} />
	)
}
