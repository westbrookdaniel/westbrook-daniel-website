import Divider from '../Divider'
import Link from 'next/link'

export default function Nav() {
	return (
		<div>
			<div className="flex justify-between mb-2">
				<Link href="/" scroll={false}>
					<a>Logo</a>
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
