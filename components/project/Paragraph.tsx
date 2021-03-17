import React from 'react'

interface Props {
	withStack?: string[]
}

const Paragraph: React.FC<Props> = ({ withStack = [], children }) => {
	if (withStack.length > 0) {
		return (
			<div className="xl:flex items-end flex-row space-x-0 space-y-8 xl:space-y-8 xl:space-x-8 my-8 w-100">
				<div className="flex-grow max-w-4xl">{children}</div>
				<div className="xl:text-right flex-1">
					<h3>Technologies</h3>
					{withStack.map((item, index) => (
						<p key={index}>{item}</p>
					))}
				</div>
			</div>
		)
	}
	return <div className="max-w-4xl my-8">{children}</div>
}

export default Paragraph