import Divider from '../common/Divider'

interface Props {
    array: (() => JSX.Element)[]
}

export default function ProjectGrid({ array }: Props) {
    const arrOut = useDividers(array)
    return (
        <div>
            <Divider className="col-span-1 mt-6 mb-5 md:hidden" />
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
                {arrOut.map((El, i) =>
                    typeof El === 'function' ? <El key={i} /> : null
                )}
            </div>
        </div>
    )
}

const useDividers = (arr: (() => JSX.Element)[]) => {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        const El = arr[i] as any
        if (!(i % 2)) {
            output.push(() => (
                <Divider className="col-span-1 mt-6 mb-5 hidden md:col-span-2 md:block" />
            ))
        }
        output.push(() => (
            <div className="mb-6 md:mb-0" key={i}>
                <El />
            </div>
        ))
    }
    return output
}
