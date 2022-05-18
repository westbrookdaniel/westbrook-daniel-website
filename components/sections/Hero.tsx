import Container from '../common/Container'
import Image from '../common/Image'
import type { ImageProps } from '../../lib/getImageProps.server'

interface Props {
    imageProps: ImageProps
}

export default function Hero({ imageProps }: Props) {
    return (
        <Container className="m-auto">
            <div className="items-center mt-8 mb-16 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
                <h1 className="max-w-title col-span-2 lg:text-5xl xl:col-span-3 xl:text-6xl">
                    Web Developer, <br />
                    Currently at{' '}
                    <a
                        href="https://www.glxdigital.com/"
                        className="italic link-style"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GLX Digital
                    </a>
                </h1>
                <div className="flex items-center lg:justify-end">
                    <div className="w-32 max-h-32 xl:max-h-40 xl:w-40">
                        <Image
                            {...imageProps}
                            width={160}
                            height={160}
                            loading="eager"
                            alt="Photo of Daniel Westbrook"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
