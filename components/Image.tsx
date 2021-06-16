import NextImage, { ImageProps } from 'next/image'

export default function Image({ className = '', src, ...props }: ImageProps) {
    return (
        <NextImage
            layout="responsive"
            className={'rounded-lg ' + className}
            placeholder="blur"
            // This type needs fixing
            src={src as any}
            {...props}
        />
    )
}
