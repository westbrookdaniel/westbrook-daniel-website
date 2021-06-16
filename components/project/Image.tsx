import React from 'react'
import NextImage from '../Image'

interface Props {
    small?: boolean
    [key: string]: any
}

export default function Image({ small, ...props }: Props) {
    return (
        <NextImage
            width={small ? 400 : 800}
            height={small ? 250 : 500}
            className="w-full object-cover"
            {...(props as any)}
        />
    )
}
