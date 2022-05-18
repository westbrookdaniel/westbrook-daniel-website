import Container from '../common/Container'
import Image from '../common/Image'
import type { ImageProps } from '../../lib/getImageProps.server'

interface Props {
    imageProps: ImageProps
}

export default function Hero({ imageProps }: Props) {
    return (
        <Container className="m-auto">
            <div className="mt-8 mb-16 grid items-center gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
                <h1 className="max-w-title col-span-2 lg:text-5xl xl:col-span-3 xl:text-6xl">
                    Web Developer, <br />
                    Currently at{' '}
                    <a
                        href="https://www.glxdigital.com/"
                        className="link-style italic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GLX Digital
                    </a>
                </h1>
                <div className="flex items-center lg:justify-end">
                    <div className="max-h-32 w-32 xl:max-h-40 xl:w-40">
                        <Image
                            {...imageProps}
                            width={200}
                            height={200}
                            loading="eager"
                            alt="Photo of Daniel Westbrook"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
