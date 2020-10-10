export default function Divider({ className = '', ...props }) {
	return <div className={`h-1 bg-gray-400 ${className}`} {...props}></div>
}
