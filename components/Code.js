export default Code = ({ language, value }) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language}>
			{value}
		</SyntaxHighlighter>
	)
}