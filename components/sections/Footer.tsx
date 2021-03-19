import Container from '../layout/Container'
import Socials from '../Socials'

interface Props {
    noSocials?: boolean
}

const Footer: React.FC<Props> = ({ noSocials }) => {
    return (
        <Container spaced>
            <div className="lg:flex h-full justify-between">
                <div className="flex flex-grow items-baseline">
                    <p>Daniel</p>
                    <div className="flex-grow h-line mx-4 bg-themeGray-300"></div>
                    <p>Westbrook</p>
                </div>
                {noSocials ? null : <Socials className="lg:ml-16" />}
            </div>
        </Container>
    )
}

export default Footer
