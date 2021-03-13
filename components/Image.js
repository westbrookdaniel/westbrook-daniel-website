import { useState } from 'react'
import NextImage from 'next/image'

export default function Image({ loading = 'lazy', src, ...props }) {
	return (
		<NextImage src={src} layout="responsive" loading={loading} {...props} />
	)
}
