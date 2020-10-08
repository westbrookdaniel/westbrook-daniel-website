export default function Image({ className, ...props }) {
	let classString = 'h-full object-contain'
	if (className) classString += ` ${className}`

	return (
			<img className={classString} {...props} />
	)
}
