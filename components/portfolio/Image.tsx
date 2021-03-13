import { ImageProps } from 'next/image'
import React from 'react'
import NextImage from '../Image'

export default function Image(props: any) {
	return (
		<NextImage
			width={800}
			height={500}
			className="w-full object-cover"
			loading="eager"
			{...props}
		/>
	)
}
