import Link from 'next/link'
import Container from '../layout/Container'
import NavLinks from '../nav/NavLinks'
import Socials from '../Socials'
import ThemeChanger from '../ThemeChanger'

interface Props {
    withSocials?: boolean
}

const Footer: React.FC<Props> = ({ withSocials }) => {
    return (
        <Container spaced>
            <div className="md:flex h-full justify-between items-center">
                <Link href="/">
                    <a className="flex-grow">
                        <div className="flex items-baseline">
                            <p>Daniel</p>
                            <div className="flex-grow h-line mx-4 bg-lines"></div>
                            <p>Westbrook</p>
                        </div>
                    </a>
                </Link>
                <ThemeChanger className="mt-6 md:mt-0 md:ml-16" />
                {withSocials ? <Socials className="md:ml-16" /> : null}
                <nav className="space-x-8 mt-6 md:mt-0 md:ml-16">
                    <NavLinks />
                </nav>
            </div>
        </Container>
    )
}

export default Footer
