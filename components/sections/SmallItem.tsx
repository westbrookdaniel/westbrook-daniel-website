import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'

export default function SmallItem({ data }: { data: any }) {
    const contents = (
        <div className="hover-arrow">
            <div className="flex w-full items-center">
                <h4 className="font-body font-normal mr-2 text-on-background">
                    {data.title}
                </h4>
                <div className="arrow">
                    <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                </div>
            </div>
        </div>
    )

    if (!!data.external) {
        return (
            <a href={data.slug} target="_blank" rel="noopener noreferrer">
                {contents}
            </a>
        )
    }

    return (
        <Link href={data.slug} scroll={false}>
            <a>{contents}</a>
        </Link>
    )
}
