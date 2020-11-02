export default function Container({
	children,
	spaced,
	className = '',
	...props
}) {

    let classString = `px-8 md:px-16 lg:px-24 w-full`
    if (spaced) classString += ` py-8 lg:py-10`
    if (className) classString += ` ${className}`

	return (
		<div className={classString} {...props}>
			{children}
		</div>
	)
}
