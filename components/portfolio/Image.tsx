import { ImageProps } from 'next/image'
import React from 'react'
import NextImage from '../Image'

export default function Image(props: ImageProps ) {
	return <NextImage className="w-full" loading="eager" {...props} />
}
