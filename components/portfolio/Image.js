import React from 'react'
import NextImage from '../Image'

export default function Image({ ...props }) {
	return (
		<Fade triggerOnce>
			<NextImage className="w-full" {...props} />
		</Fade>
	)
}
