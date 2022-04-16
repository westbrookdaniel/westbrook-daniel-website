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
            <div className="mb-2 flex items-center justify-between">
                <Link href="/">
                    <a>
                        <Logo isSticky={isSticky} />
                    </a>
                </Link>
                <nav className="flex items-center space-x-8 text-base">
                    <NavLinks />
                </nav>
            </div>
            {withDivider ? <Divider /> : null}
        </div>
    )
}
