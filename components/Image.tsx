import NextImage, { ImageProps } from 'next/image'

export default function Image({ className = '', src, ...props }: ImageProps) {
    return (
        <div className="rounded-lg overflow-hidden">
            <NextImage
                layout="responsive"
                className={className}
                placeholder="blur"
                // This type needs fixing
                src={src as any}
                {...props}
            />
        </div>
    )
}
