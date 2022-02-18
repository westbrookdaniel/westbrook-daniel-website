import React from 'react'

interface Props {
    withStack?: string[]
}

const Paragraph: React.FC<Props> = ({ withStack = [], children }) => {
    if (withStack.length > 0) {
        return (
            <div className="w-100 my-8 flex-row space-x-0 space-y-8 xl:flex xl:items-end xl:space-y-8 xl:space-x-8">
                <div className="flex-grow max-w-4xl">{children}</div>
                <div className="flex-1 xl:text-right">
                    <h3>Technologies</h3>
                    <p>
                        {withStack.map((item, index) => (
                            <span className="block" key={index}>
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        )
    }
    return <div className="my-8 max-w-4xl">{children}</div>
}

export default Paragraph
