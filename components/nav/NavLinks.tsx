import Link from 'next/link'

interface Props {}

const NavLinks: React.FC<Props> = props => {
    return (
        <>
            <Link href="/blog" scroll={false}>
                <a className="link-style">Blog</a>
            </Link>
            <Link href="/p" scroll={false}>
                <a className="link-style">Projects</a>
            </Link>
        </>
    )
}

export default NavLinks
