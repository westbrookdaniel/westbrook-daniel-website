import React from 'react'
import styled from '@emotion/styled'

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
	width: 6px;
`

const Shape = styled.div`
	height: 15px;
	width: 8px;
	margin-left: 4px;
	background-color: #d43c29;
`

export default function Logo() {
	return (
		<LogoText>
			<span>Daniel</span> <Spacer />
			<span>Westbrook</span>
			<Shape />
		</LogoText>
	)
}
