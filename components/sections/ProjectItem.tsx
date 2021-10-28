import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normalTransition } from '../../util/constants'
import truncate from '../../util/truncate'
import { ProjectData } from '../../types'
import Divider from '../Divider'
import Image from '../project/Image'

interface Props {
    data: ProjectData
    nextProject?: boolean
}

const ProjectItem: React.FC<Props> = ({ data, nextProject }) => {
    return (
        <Link href={data.slug}>
            <a>
                <div className="hover-arrow">
                    {nextProject && (
                        <>
                            <h2 className="mb-2">Next Project</h2>{' '}
                            <Divider className="mb-4" />
                        </>
                    )}
                    <div className="flex w-full items-center">
                        <h3 className="mr-4">{truncate(data.title, 50)}</h3>
                        <div className="arrow">
                            <CgArrowRight
                                color="var(--lines)"
                                fontSize="1.2rem"
                            />
                        </div>
                    </div>
                    {data.feature ? (
                        <div className="my-3 rounded-lg overflow-hidden">
                            <Image
                                alt={`${data.title} Project`}
                                width={400}
                                height={270}
                                className={`object-cover transform ${normalTransition}`}
                                loading="eager"
                                src={data.feature}
                            />
                        </div>
                    ) : null}
                </div>
            </a>
        </Link>
    )
}

export default ProjectItem
