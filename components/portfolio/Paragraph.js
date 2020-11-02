import React from 'react'

export default function Paragraph({ withStack, children }) {
	if (withStack?.length > 0) {
		return (
			<div className="xl:flex items-end flex-row space-x-0 space-y-8 xl:space-y-8 xl:space-x-8 my-8 w-100">
				<div className="flex-grow max-w-4xl">{children}</div>
				<p className="xl:text-right flex-1">
					{withStack.map((item, index) => <p key={index}>{item}</p>)}
				</p>
			</div>
		)

	}
	return <div className="max-w-4xl my-8">{children}</div>
}
