import { CgArrowRight } from 'react-icons/cg'
import { DetailedProject } from '../../../data/projects'
import { normalTransition } from '../../../util/constants'
import truncate from '../../../util/truncate'
import NextImage from 'next/image'

interface Props {
    data: DetailedProject
}

const ProjectItem: React.FC<Props> = ({ data }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.source || data.website}
        >
            <div className="hover-arrow project">
                <div className="flex items-center w-full">
                    <h3 className="mr-4">{truncate(data.title, 50)}</h3>
                    <div className="arrow">
                        <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                    </div>
                </div>
                <p className="mt-1 mb-4">{data.description}</p>
                <div
                    className={`overflow-hidden rounded-lg p-4 ${normalTransition}`}
                    style={{ backgroundColor: data.color }}
                >
                    <NextImage
                        alt={`${data.title} Project`}
                        width={400}
                        height={270}
                        loading="eager"
                        src={data.screenshot}
                        layout="responsive"
                        className={`translate-y-14 scale-110 transform transform object-contain ${normalTransition}`}
                        placeholder="empty"
                    />
                </div>
            </div>
        </a>
    )
}

export default ProjectItem
