import Divider from '../Divider'
import Link from 'next/link'
import Logo from './Logo'
import { CgMenuRightAlt } from 'react-icons/cg'

export default function Nav({ isSticky, className = '' }) {
	return (
		<div className={`px-8 md:px-16 lg:px-24 ${className}`}>
			<div className="flex justify-between items-center mb-2">
				<Link href="/" scroll={false}>
					<a>
						<Logo isSticky={isSticky} />
					</a>
				</Link>
				<div className="flex space-x-8 items-center">
					<CgMenuRightAlt
						onClick={() => console.log('click')}
						color="#66767d"
						fontSize="1.5rem"
					/>
				</div>
			</div>
			<Divider />
		</div>
	)
}
