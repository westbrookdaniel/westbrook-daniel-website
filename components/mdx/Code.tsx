import Highlight, {
    defaultProps,
    Language,
    PrismTheme,
} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'

interface Props {
    className: string
    children: string
}

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
                <pre
                    className={
                        className + ' rounded-md overflow-scroll my-4 p-8'
                    }
                    style={style}
                >
                    {tokens.map((line, i) => {
                        const { className, ...lineProps } = getLineProps({
                            line,
                            key: i,
                        })
                        return (
                            <div
                                className={className + ' table-row'}
                                key={i}
                                {...lineProps}
                            >
                                <span className="hidden md:table-cell text-right pr-2 select-none opacity-25">
                                    {i + 1}
                                </span>
                                <span className="table-cell">
                                    {line.map((token, key) => (
                                        <span
                                            key={key}
                                            {...getTokenProps({
                                                token,
                                                key,
                                            })}
                                        />
                                    ))}
                                </span>
                            </div>
                        )
                    })}
                </pre>
            )}
        </Highlight>
    )
}

export default Code
