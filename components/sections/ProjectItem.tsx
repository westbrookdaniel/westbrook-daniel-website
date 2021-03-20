import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normal } from '../../util/transition'
import { ProjectMetadata } from '../../util/types'
import Divider from '../Divider'
import Image from '../Image'

interface Props {
    data: any
    nextProject?: boolean
}

const ProjectItem: React.FC<Props> = ({ data, nextProject }) => {
    return (
        <Link href={data.slug} scroll={false}>
            <a>
                <div className="hover-arrow">
                    {nextProject && (
                        <>
                            <h2 className="mb-2">Next Project</h2>{' '}
                            <Divider className="mb-4" />
                        </>
                    )}
                    <div className="flex w-full items-center">
                        <h3 className="mr-4">{data.title}</h3>
                        <div className="arrow">
                            <CgArrowRight color="#66767d" fontSize="1.2rem" />
                        </div>
                    </div>
                    <div className="my-3 overflow-hidden">
                        <Image
                            alt={`${data.title} Project`}
                            width={700}
                            height={400}
                            className={`object-cover transform ${normal}`}
                            loading="eager"
                            src={data.feature}
                        />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ProjectItem