import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import { normalTransition } from '../../util/constants'

export default function Image({
    className = '',
    blurDataURL,
    ...props
}: ImageProps) {
    return (
        <div className={`overflow-hidden rounded-lg ${normalTransition}`}>
            <NextImage
                layout="responsive"
                className={className + ' bg-subtle'}
                placeholder={typeof blurDataURL === 'string' ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                {...props}
            />
        </div>
    )
}
