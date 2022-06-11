function Box() {
    return <span className="ml-[4px] inline-block h-[15px] w-[8px] bg-brand" />
}

export default function Type({
    children,
    withoutBox,
}: {
    children?: React.ReactNode
    withoutBox?: boolean
}) {
    return (
        <div className="leading-4">
            {children}
            {withoutBox ? null : <Box />}
        </div>
    )
}
