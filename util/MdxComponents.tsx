import React from 'react'
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer'
import theme from "./theme-gruvbox-dark"

interface Props {
    className: string
    children: string
}

const Code = ({ children, className }: Props) => {
    const language = className.replace(/language-/, '') as Language
    return (
        <Highlight
            {...defaultProps}
            theme={theme as PrismTheme}
            code={children.trim()}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{
                        ...style,
                        borderRadius: 0,
                        overflow: 'scroll',
                        marginTop: 24,
                        marginBottom: 24,
                        padding: 18,
                    }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export const MdxComponents = {
    code: Code,
    pre: ({ children }: any) => children,
}
