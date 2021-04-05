import React from 'react'
import Highlight, {
    defaultProps,
    Language,
    PrismTheme,
} from 'prism-react-renderer'
import theme from './theme-gruvbox-dark'

import styled from '@emotion/styled'

interface Props {
    className: string
    children: string
}

const Pre = styled.pre`
    border-radius: 0.5rem;
    overflow: scroll;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 20px;
`

const Line = styled.div`
    display: table-row;
`

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1.25em;
    user-select: none;
    opacity: 0.3;
`

const LineContent = styled.span`
    display: table-cell;
`

const Code = ({ children, className }: Props) => {
    const language = className
        ? (className.replace(/language-/, '') as Language)
        : 'markup'
    return (
        <Highlight
            {...defaultProps}
            theme={theme as PrismTheme}
            code={children.trim()}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo className="hidden md:block">{i + 1}</LineNo>
                            <LineContent>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
}

export const MdxComponents = {
    code: Code,
    pre: ({ children }: any) => children,
    a: ({ children, ...props }: any) => (
        <a target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    ),
}
