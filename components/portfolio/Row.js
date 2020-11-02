import React from 'react'

export default function Row({ side = 'left', slot, children }) {
	const colClass = 'flex-1'
	return (
		<div className="xl:flex items-end flex-row space-x-0 space-y-8 xl:space-x-8 xl:space-y-0 my-8 w-100">
			{side === 'left' && <div className={colClass + ' max-w-lg'}>{children}</div>}
			<div className={colClass}>{slot}</div>
			{side === 'right' && <div className={colClass + ' max-w-lg'}>{children}</div>}
		</div>
	)
}
