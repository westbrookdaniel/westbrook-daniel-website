import Divider from '../Divider'
import Link from 'next/link'
import Logo from '../Logo'
import BlogLogo from '../BlogLogo'

interface Props {
    isSticky?: boolean
    blog?: boolean
    className?: string
}

export default function Nav({ isSticky, blog, className = '' }: Props) {
    return (
        <div className={` ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <Link href="/" scroll={false}>
                    <a>
                        {blog ? (
                            <BlogLogo isSticky={isSticky} />
                        ) : (
                            <Logo isSticky={isSticky} />
                        )}
                    </a>
                </Link>
                <nav className="flex space-x-8 items-center">
                    <Link href="/blog" scroll={false}>
                        <a>Blog</a>
                    </Link>
                    <Link href="/p" scroll={false}>
                        <a>Projects</a>
                    </Link>
                </nav>
            </div>
            <Divider />
        </div>
    )
}
