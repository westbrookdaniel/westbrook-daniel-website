import { CgArrowRight } from 'react-icons/cg'
import { Project } from '../../../data/projects'
import { normalTransition } from '../../../util/constants'
import truncate from '../../../util/truncate'
import Image from '../../project/Image'

interface Props {
    data: Project
}

const ProjectItem: React.FC<Props> = ({ data }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={data.website}>
            <div className="hover-arrow">
                <div className="flex items-center w-full">
                    <h3 className="mr-4">{truncate(data.title, 50)}</h3>
                    <div className="arrow">
                        <CgArrowRight color="var(--lines)" fontSize="1.2rem" />
                    </div>
                </div>
                {data.feature ? (
                    <div className="my-3 overflow-hidden rounded-lg">
                        <Image
                            alt={`${data.title} Project`}
                            width={400}
                            height={270}
                            className={`transform object-cover ${normalTransition}`}
                            loading="eager"
                            src={data.feature}
                        />
                    </div>
                ) : null}
            </div>
        </a>
    )
}

export default ProjectItem
