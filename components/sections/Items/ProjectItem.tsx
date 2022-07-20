import { CgArrowRight } from 'react-icons/cg'
import { normalTransition } from '../../../util/constants'
import truncate from '../../../util/truncate'
import NextImage from 'next/future/image'
import type { DetailedProjectWithImage } from '../../../lib/projects.server'

interface Props {
    data: DetailedProjectWithImage
}

const ProjectItem: React.FC<Props> = ({
    data: { source, website, description, color, title, imageProps },
}) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={source || website}
            className="hover-arrow"
        >
            <div>
                <div className="flex w-full items-center">
                    <h3 className="mr-4">{truncate(title, 50)}</h3>
                    <div className="arrow">
                        <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                    </div>
                </div>
                <p className="mt-1 mb-4">{description}</p>
                <div
                    className={`flex justify-center overflow-hidden rounded-lg p-4 ${normalTransition}`}
                    style={{ backgroundColor: color }}
                >
                    <NextImage
                        alt={`${title} Project`}
                        {...imageProps}
                        width={400}
                        height={300}
                        loading="eager"
                        className={`h-[300px] translate-y-14 transform object-cover object-top hover:translate-y-8 ${normalTransition}`}
                    />
                </div>
            </div>
        </a>
    )
}

export default ProjectItem
