import Divider from '../common/Divider'
import Link from 'next/link'
import Logo from '../Logo'
import NavLinks from './NavLinks'

interface Props {
    isSticky?: boolean
    className?: string
    withDivider?: boolean
}

export default function Nav({
    isSticky,
    withDivider = true,
    className = '',
}: Props) {
    return (
        <div className={` ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <Link href="/">
                    <a>
                        <Logo isSticky={isSticky} />
                    </a>
                </Link>
                <nav className="flex items-center text-base space-x-8">
                    <NavLinks />
                </nav>
            </div>
            {withDivider ? <Divider /> : null}
        </div>
    )
}
