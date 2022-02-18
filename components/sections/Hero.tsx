import Container from '../common/Container'
import Nav from '../nav/Nav'
import Image from '../common/Image'
import me from '../../public/images/me.jpg'

export default function Hero() {
    return (
        <Container className="m-auto">
            <div className="w-full pb-10">
                <Nav className="pt-10" />
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
                <h1 className="max-w-title col-span-2 lg:text-5xl xl:col-span-3 xl:text-6xl">
                    Full Stack Developer and Designer, Currently Working at{' '}
                    <a
                        href="https://unearthed.solutions/"
                        className="link-style italic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Unearthed
                    </a>
                </h1>
                <div className="flex items-center justify-end">
                    <div className="max-h-48 w-48 xl:max-h-64 xl:w-64">
                        <Image
                            width={200}
                            height={200}
                            loading="eager"
                            src={me}
                            alt="Photo of Daniel Westbrook"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
