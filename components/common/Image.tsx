import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import { normalTransition } from '../../util/constants'

interface Props {
    border: boolean
}

export default function Image({
    className = '',
    blurDataURL,
    border,
    ...props
}: ImageProps & Props) {
    return (
        <div
            className={`overflow-hidden ${
                border ? 'border-line' : ''
            } rounded-lg ${normalTransition}`}
        >
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
