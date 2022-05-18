import { CgArrowRight } from 'react-icons/cg'
import { normalTransition } from '../../../util/constants'
import truncate from '../../../util/truncate'
import NextImage from 'next/image'
import type { DetailedProjectWithImage } from '../../../lib/projects.server'

interface Props {
    data: DetailedProjectWithImage
}

const ProjectItem: React.FC<Props> = ({
    data: { source, website, description, color, title, imageProps },
}) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={source || website}>
            <div className="hover-arrow project">
                <div className="flex w-full items-center">
                    <h3 className="mr-4">{truncate(title, 50)}</h3>
                    <div className="arrow">
                        <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                    </div>
                </div>
                <p className="mt-1 mb-4">{description}</p>
                <div
                    className={`overflow-hidden rounded-lg p-4 ${normalTransition}`}
                    style={{ backgroundColor: color }}
                >
                    <NextImage
                        alt={`${title} Project`}
                        {...imageProps}
                        width={400}
                        height={270}
                        loading="eager"
                        layout="responsive"
                        className={`translate-y-14 scale-110 transform transform object-contain ${normalTransition}`}
                    />
                </div>
            </div>
        </a>
    )
}

export default ProjectItem
