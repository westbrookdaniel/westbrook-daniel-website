import { CgArrowRight } from 'react-icons/cg'
import { Project } from '../../data/projects'

export default function SmallItem({ data }: { data: Project }) {
    const contents = (
        <div className="hover-arrow">
            <div className="flex items-center w-full">
                <h4 className="mr-2 font-normal font-body text-on-background">
                    {data.title}
                </h4>
                <div className="arrow">
                    <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                </div>
            </div>
        </div>
    )

    return (
        <a href={data.website} target="_blank" rel="noopener noreferrer">
            {contents}
        </a>
    )
}
