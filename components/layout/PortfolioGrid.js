import Divider from '../Divider'
import { useContext, useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Gap = styled.div`
	gap: 0 2rem;
`

export default function PortfolioGrid({ array }) {
	const arrOut = useDividers(array)

	return (
		<div>
			<Divider className="mt-6 mb-5 col-span-1 md:hidden" />
			<Gap className="grid grid-cols-1 md:grid-cols-2">
				{arrOut.map((El, i) =>
					typeof El === 'function' ? <El key={i} /> : null
				)}
			</Gap>
		</div>
	)
}

const useDividers = (arr) => {
	const output = []
	for (let i = 0; i < arr.length; i++) {
		const El = arr[i]
		if (!(i % 2)) {
			output.push(() => (
				<Divider className="mt-6 mb-5 col-span-1 md:col-span-2 hidden md:block" />
			))
		}
		output.push(() => (
			<div className="mb-6 md:mb-0" key={i}>
				<El />
			</div>
		))
	}
	return output
}
