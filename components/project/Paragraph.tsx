import React from 'react'

interface Props {
    withStack?: string[]
    children?: React.ReactNode
}

const Paragraph: React.FC<Props> = ({ withStack = [], children }) => {
    if (withStack.length > 0) {
        return (
            <div className="flex flex-col my-8 xl:flex-row xl:items-end">
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
    return <div className="max-w-4xl my-8">{children}</div>
}

export default Paragraph
