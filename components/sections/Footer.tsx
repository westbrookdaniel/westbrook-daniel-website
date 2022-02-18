import Link from 'next/link'
import Divider from '../common/Divider'
import Container from '../common/Container'
import NavLinks from '../nav/NavLinks'
import Socials from '../Socials'
import ThemeChanger from '../theme/ThemeChanger'

interface Props {
    withSocials?: boolean
}

const Footer: React.FC<Props> = ({ withSocials }) => {
    return (
        <Container spaced>
            <Divider className="mb-10" />
            <div className="h-full items-center justify-between md:flex">
                <ThemeChanger className="mt-6 md:mt-0" />
                {withSocials ? <Socials className="md:ml-16" /> : null}
                <nav className="mt-6 space-x-8 md:mt-0 md:ml-16">
                    <Link href="/">
                        <a className="link-style">Home</a>
                    </Link>
                    <NavLinks />
                </nav>
            </div>
        </Container>
    )
}

export default Footer
