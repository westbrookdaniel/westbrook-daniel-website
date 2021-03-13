import Container from '../layout/Container'
import Image from '../Image'
import styled from '@emotion/styled'
import Link from 'next/link'
import Nav from '../parts/Nav'

const Half = styled.div`
	height: 50%;
`

export default function Hero() {

	return (
		<Container className="m-auto">
			<div className="w-full pb-10">
				<Nav className="pt-10" />
			</div>
			<h1 className="max-w-title">
				Full Stack Developer and Designer in Perth Building Modernistic Digital
				Solutions
			</h1>
			<Link href="/p/stories-for-reddit" scroll={false}>
				<a>
					<Image
						className="cursor-pointer w-auto object-contain"
						loading="eager"
						width={900}
						height={600}
						quality={90}
						src="/images/projects/hero-image.jpg"
						alt="Hero Project"
					/>
				</a>
			</Link>
		</Container>
	)
}
