import type { ImageProps } from 'next/future/image'
import NextImage from 'next/future/image'
import { normalTransition } from '../../util/constants'

interface Props {
    border?: boolean
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
                className={className + ' bg-subtle'}
                placeholder={typeof blurDataURL === 'string' ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                {...props}
            />
        </div>
    )
}
