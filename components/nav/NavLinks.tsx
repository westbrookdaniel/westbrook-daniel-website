import Link from 'next/link'

interface Props {}

const NavLinks: React.FC<Props> = props => {
    return (
        <>
            <Link href="/blog">
                <a className="link-style">Blog</a>
            </Link>
            <Link href="/projects">
                <a className="link-style">Projects</a>
            </Link>
        </>
    )
}

export default NavLinks
