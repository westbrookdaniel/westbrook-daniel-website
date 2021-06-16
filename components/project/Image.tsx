import React from 'react'
import NextImage from 'next/image'

interface Props {
    small?: boolean
    [key: string]: any
}

export default function Image({ small, ...props }: Props) {
    return (
        <NextImage
            layout="responsive"
            width={small ? 400 : 800}
            height={small ? 250 : 500}
            className="rounded-lg w-full object-cover"
            {...(props as any)}
        />
    )
}
