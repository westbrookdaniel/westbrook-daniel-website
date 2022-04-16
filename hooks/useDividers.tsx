const useDividers = (
    arr: JSX.Element[],
    divider: JSX.Element
): JSX.Element[] => {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (!(i % 2) && i !== 0) {
            output.push(divider)
        }
        output.push(
            <div className="mb-6 md:mb-0" key={i}>
                {element}
            </div>
        )
    }
    return output
}

export default useDividers
