import Container from '../layout/Container'
import Nav from '../nav/Nav'
import Image from '../Image'
import image from '../../public/images/projects/me.jpg'

export default function Hero() {
    return (
        <Container className="m-auto">
            <div className="w-full pb-10">
                <Nav className="pt-10" />
            </div>
            <div className="grid items-center xl:grid-cols-4 lg:grid-cols-3 gap-10 xl:gap-16">
                <h1 className="max-w-title lg:text-5xl xl:text-6xl col-span-2 xl:col-span-3">
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
                <div className="flex justify-end items-center">
                    <div className="w-48 max-h-48 xl:w-64 xl:max-h-64">
                        <Image
                            width={200}
                            height={200}
                            src={image}
                            alt="Photo of Daniel Westbrook"
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
