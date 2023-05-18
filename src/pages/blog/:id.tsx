import { Divider } from '../../components/Divider'
import NotFound from '../404'
import { getBlogPost } from '../../data/blog'
import { formatDate } from '../../util/date'

export default async function BlogPost() {
    const { id } = router.params()

    const post = await getBlogPost(id)

    if (!post) return <NotFound />

    meta.from({
        title: post.info.title,
        description: post.info.snippet,
    })

    return (
        <div>
            <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8 py-16">
                <h1 class="text-4xl xs:text-5xl md:text-6xl">
                    {post.info.title}
                </h1>
                <Divider />
                <div class="flex space-x-4">
                    <p>{formatDate(post.info.date)}</p>
                    <p>{post.info.description}</p>
                </div>
            </div>
            <div
                class="prose mb-16"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <a href="/blog" class="no-underline">
                <button class="space-x-1.5">
                    <span
                        class="py-0.5"
                        dangerouslySetInnerHTML={{ __html: ArrowLeft }}
                    />
                    <span>All Posts</span>
                </button>
            </a>
        </div>
    )
}

const ArrowLeft =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" /></svg>'
