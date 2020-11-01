import React from 'react'

export default function Paragraph({ withStack, children }) {
	if (withStack?.length > 0) {
		return (
			<div className="flex items-end flex-row space-x-8 my-8 w-100">
				<div className="flex-grow max-w-4xl">{children}</div>
				<p className="text-right flex-1">
					{withStack.map(item => <>{item}<br/></>)}
				</p>
			</div>
		)

	}
	return <div className="max-w-4xl my-8">{children}</div>
}
