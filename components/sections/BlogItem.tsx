import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normalTransition } from '../../util/constants'
import { formatDate } from '../../util/formatDate'
import truncate from '../../util/truncate'
import { BlogData } from '../../util/types'
import Image from '../common/Image'

interface Props {
    data: BlogData
}

const BlogItem: React.FC<Props> = ({ data }) => {
    return (
        <Link href={data.slug}>
            <a className="mb-2">
                <div className="hover-arrow grid-cols-8 gap-8 md:grid">
                    <div className="my-3 hidden md:block">
                        <Image
                            alt={`${data.title} Project`}
                            className={`transform object-cover ${normalTransition}`}
                            loading="eager"
                            width={400}
                            height={270}
                            src={data.feature}
                        />
                    </div>
                    <div className="col-span-5 flex flex-col justify-center">
                        <div className="mb-2 flex w-full items-center">
                            <h3 className="mr-4">{truncate(data.title, 90)}</h3>
                            <div className="arrow">
                                <CgArrowRight
                                    color="var(--lines)"
                                    fontSize="1.2rem"
                                />
                            </div>
                        </div>
                        <p>
                            {formatDate(data.date)} - {data.description}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogItem
