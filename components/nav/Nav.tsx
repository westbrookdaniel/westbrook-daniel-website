import Divider from '../Divider'
import Link from 'next/link'
import Logo from '../Logo'
import NavLinks from './NavLinks'

interface Props {
    isSticky?: boolean
    className?: string
}

export default function Nav({ isSticky, className = '' }: Props) {
    return (
        <div className={` ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <Link href="/">
                    <a>
                        <Logo isSticky={isSticky} />
                    </a>
                </Link>
                <nav className="flex space-x-8 items-center">
                    <NavLinks />
                </nav>
            </div>
            <Divider />
        </div>
    )
}
