import dayjs from 'dayjs'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { normal } from '../../util/transition'
import truncate from '../../util/truncate'
import { BlogData } from '../../util/types'
import Image from '../Image'

interface Props {
    data: BlogData
}

const BlogItem: React.FC<Props> = ({ data }) => {
    return (
        <Link href={data.slug} scroll={false}>
            <a className="mb-2">
                <div className="md:grid gap-8 grid-cols-5 hover-arrow">
                    <div className="md:block hidden my-3 rounded-lg overflow-hidden">
                        <Image
                            alt={`${data.title} Project`}
                            width={400}
                            height={270}
                            className={`object-cover transform ${normal}`}
                            loading="eager"
                            src={data.feature}
                        />
                    </div>
                    <div className="flex col-span-4 flex-col justify-center">
                        <div className="flex w-full items-center mb-2">
                            <h3 className="mr-4">{truncate(data.title, 90)}</h3>
                            <div className="arrow">
                                <CgArrowRight
                                    color="#66767d"
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
