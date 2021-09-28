import NextImage, { ImageProps } from 'next/image'
import { normal } from '../util/transition'

export default function Image({ className = '', src, ...props }: ImageProps) {
    return (
        <div className={`rounded-lg overflow-hidden ${normal}`}>
            <NextImage
                layout="responsive"
                className={className + " bg-subtle"}
                placeholder="blur"
                // This type needs fixing
                src={src as any}
                {...props}
            />
        </div>
    )
}
