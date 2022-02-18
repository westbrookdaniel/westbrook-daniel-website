import NextImage, { ImageProps } from 'next/image'
import { normalTransition } from '../../util/constants'

export default function Image({ className = '', src, ...props }: ImageProps) {
    return (
        <div className={`overflow-hidden rounded-lg ${normalTransition}`}>
            <NextImage
                layout="responsive"
                className={className + ' bg-subtle'}
                placeholder="blur"
                // This type needs fixing
                src={src as any}
                {...props}
            />
        </div>
    )
}
