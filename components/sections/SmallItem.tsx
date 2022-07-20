import { CgArrowRight } from 'react-icons/cg'
import type { Project } from '../../data/projects'

export default function SmallItem({ data }: { data: Project }) {
    const contents = (
        <div className="hover-arrow">
            <div className="flex w-full items-center">
                <h3 className="mr-2 font-body text-lg font-normal text-on-background">
                    {data.title}
                </h3>
                <div className="arrow">
                    <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                </div>
            </div>
        </div>
    )

    return (
        <a
            href={data.source || data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="link-style"
        >
            {contents}
        </a>
    )
}
