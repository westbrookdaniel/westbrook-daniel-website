import NextImage, { ImageProps } from 'next/image'

export default function Image({
    loading = 'lazy',
    className = '',
    ...props
}: ImageProps) {
    return (
        <NextImage
            layout="responsive"
            className={'rounded-lg ' + className}
            loading={loading}
            {...props}
        />
    )
}
