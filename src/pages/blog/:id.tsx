import { Divider } from '../../components/Divider'
import NotFound from '../404'
import { getBlogPost } from '../../data/blog'
import { formatDate } from '../../util/date'

export default async function BlogPost() {
    const { id } = router.params()

    const post = getBlogPost(id)

    if (!post) return <NotFound />

    meta.from({
        title: post.info.title,
        description: post.info.snippet,
    })

    return (
        <div>
            <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8">
                <h1 class="text-4xl xs:text-6xl md:text-6xl">
                    {post.info.title}
                </h1>
                <Divider />
                <div class="flex space-x-4">
                    <p>{formatDate(post.info.date)}</p>
                    <p>{post.info.description}</p>
                </div>
            </div>
            <div
                class="prose"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
    )
}
