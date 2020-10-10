export default function Divider({ className = '', ...props }) {
	return <div className={`h-line bg-themeGray-200 ${className}`} {...props}></div>
}
