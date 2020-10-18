import Divider from '../Divider'
import Link from 'next/link'
import Logo from './Logo'

export default function Nav({ isSticky, className = '' }) {
	return (
		<div className={`px-8 md:px-16 lg:px-24 ${className}`}>
			<div className="flex justify-between items-center mb-2">
				<Link href="/" scroll={false}>
					<a>
						<Logo isSticky={isSticky} />
					</a>
				</Link>
				<div className="flex space-x-8">
					<Link href="/p/example-project" scroll={false}>
						<a>Example</a>
					</Link>
					<Link href="/p/normal" scroll={false}>
						<a>Normal</a>
					</Link>
				</div>
			</div>
			<Divider />
		</div>
	)
}
