import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import { CgArrowRight } from 'react-icons/cg'
import Divider from '../Divider'
import Image from '../Image'

export default function PortfolioItem({ data, nextProject }) {
	return (
		<Fade fraction={0.5} triggerOnce>
			<Link href={data.slug} scroll={false}>
				<a>
					<div className="hover-arrow">
						{nextProject && (
							<>
								<h2 className="mb-2">Next Project</h2>{' '}
								<Divider className="mb-4" />
							</>
						)}
						<div className="flex w-full items-center">
							<h3 className="mr-4">{data.title}</h3>
							<div className="arrow">
								<CgArrowRight color="#66767d" fontSize="1.2rem" />
							</div>
						</div>
						<Image className="my-3" loading="eager" src={data.feature} />
					</div>
				</a>
			</Link>
		</Fade>
	)
}
