import React, { useRef } from 'react'
import styled from '@emotion/styled'
import Typist from 'react-typist'
import useOnScreen from '../../util/useOnScreen'

const LogoText = styled.p`
	font-family: 'Hack';
	font-weight: 700;
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	color: #d43c29;
	text-transform: uppercase;
	user-select: none;
`

const Spacer = styled.span`
	margin-right: 6px;
`

const Shape = styled.div`
	height: 15px;
	width: 8px;
	margin-left: 4px;
	background-color: #d43c29;
`

const ShapeWrapper = styled.div`
	height: 31px;
	display: flex;
	align-items: center;
`

export default function Logo({ isSticky }) {
	const ref = useRef()
	const onScreen = useOnScreen(ref)

	return (
		<LogoText ref={ref}>
			{onScreen &&
				(isSticky ? (
					<span>DW</span>
				) : (
					<Typist cursor={{ show: false }}>
						Daniel
						<Spacer />
						<Typist.Delay ms={100} />
						Westbrook
					</Typist>
				))}
			<ShapeWrapper>
				<Shape />
			</ShapeWrapper>
		</LogoText>
	)
}
