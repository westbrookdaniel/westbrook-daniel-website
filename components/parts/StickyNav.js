import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { useScrollPosition } from '../../util/useScrollPosition'
import Container from '../layout/Container'
import Nav from './Nav'

const Wrapper = styled.div`
	top: ${(props) =>
		props.isScrolling || props.scrollTopPos < 700 ? '-100px' : '0'};
`

export default function StickyNav() {
	const scrollProps = useScrollPosition()

	return (
		<Wrapper
			className="w-full fixed z-10 transition-all duration-300 ease-in-out"
			{...scrollProps}
		>
			<Container>
				<Nav isSticky className="pt-3 bg-white" />
			</Container>
		</Wrapper>
	)
}
