import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import type { BlogMetaWithExtras } from '../../../lib/blog.server'
import { normalTransition } from '../../../util/constants'
import { formatDate } from '../../../util/formatDate'
import truncate from '../../../util/truncate'
import Image from '../../common/Image'

interface Props {
    data: BlogMetaWithExtras
}

const BlogItem: React.FC<Props> = ({
    data: { slug, title, imageProps, date, description },
}) => {
    return (
        <Link href={slug}>
            <a>
                <div className="flex flex-row hover-arrow md:space-x-6">
                    <div className="my-3 hidden w-full max-w-[116px] md:block">
                        <Image
                            alt={`${title} Project`}
                            className={`transform object-cover ${normalTransition}`}
                            loading="lazy"
                            {...imageProps}
                            width={400}
                            height={270}
                        />
                    </div>
                    <div className="flex flex-col justify-center col-span-5">
                        <div className="flex items-center w-full mb-2">
                            <h3 className="mr-4">{truncate(title, 90)}</h3>
                            <div className="hidden arrow md:block">
                                <CgArrowRight
                                    color="var(--lines)"
                                    fontSize="1.2rem"
                                />
                            </div>
                        </div>
                        <p>
                            {formatDate(date)} - {description}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogItem
