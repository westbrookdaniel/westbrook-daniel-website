import Container from '../layout/Container'
import NavLinks from '../nav/NavLinks'
import Socials from '../Socials'

interface Props {
    withSocials?: boolean
}

const Footer: React.FC<Props> = ({ withSocials }) => {
    return (
        <Container spaced>
            <div className="lg:flex h-full justify-between">
                <div className="flex flex-grow items-baseline">
                    <p>Daniel</p>
                    <div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
                    <p>Westbrook</p>
                </div>
                {withSocials ? <Socials className="lg:ml-16" /> : null}
                <nav className="space-x-8 lg:ml-16">
                    <NavLinks />
                </nav>
            </div>
        </Container>
    )
}

export default Footer
