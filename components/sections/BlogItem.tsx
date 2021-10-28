import dayjs from 'dayjs'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normalTransition } from '../../util/constants'
import truncate from '../../util/truncate'
import { BlogData } from '../../types'
import Image from '../Image'

interface Props {
    data: BlogData
}

const BlogItem: React.FC<Props> = ({ data }) => {
    return (
        <Link href={data.slug}>
            <a className="mb-2">
                <div className="md:grid gap-8 grid-cols-8 hover-arrow">
                    <div className="md:block hidden my-3">
                        <Image
                            alt={`${data.title} Project`}
                            className={`object-cover transform ${normalTransition}`}
                            loading="eager"
                            width={400}
                            height={270}
                            src={data.feature}
                        />
                    </div>
                    <div className="flex col-span-5 flex-col justify-center">
                        <div className="flex w-full items-center mb-2">
                            <h3 className="mr-4">{truncate(data.title, 90)}</h3>
                            <div className="arrow">
                                <CgArrowRight
                                    color="var(--lines)"
                                    fontSize="1.2rem"
                                />
                            </div>
                        </div>
                        <p>
                            {dayjs(data.date).format('DD/MM/YYYY')} -{' '}
                            {data.description}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogItem
