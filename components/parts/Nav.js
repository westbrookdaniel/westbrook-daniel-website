import Divider from '../Divider'
import Link from 'next/link'

export default function Nav() {
	return (
		<div>
			<div className="flex justify-between mb-2">
				<Link href="/">
					<a>Logo</a>
				</Link>
				<div className="flex space-x-8">
					<Link href="/p/example-project">
						<a>Example</a>
					</Link>
					<Link href="/p/normal">
						<a>Normal</a>
					</Link>
				</div>
			</div>
			<Divider />
		</div>
	)
}
