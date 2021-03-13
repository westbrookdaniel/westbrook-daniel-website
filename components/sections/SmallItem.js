import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normal } from '../../util/transition'
import Divider from '../Divider'
import Image from '../Image'

export default function SmallItem({ data }) {
	return (
		<a href={data.slug} target="_blank" rel="noopener noreferrer">
			<div className="hover-arrow">
				<div className="flex w-full items-center">
					<h4 className="mr-4 text-themeGray-600">{data.title}</h4>
					<div className="arrow">
						<CgArrowRight color="#66767d" fontSize="1.2rem" />
					</div>
				</div>
			</div>
		</a>
	)
}
