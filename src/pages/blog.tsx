import { Divider } from '../components/Divider'
import PostItem from '../components/PostItem'
import { getBlogPosts } from '../data/blog'

export default async function Blog() {
    meta.from({
        title: 'Blog',
    })

    const posts = getBlogPosts()

    return (
        <div class="space-y-28">
            <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8">
                <h1 class="text-4xl xs:text-6xl md:text-6xl">I Wrote These</h1>
                <Divider />
                <div class="space-y-2">
                    <p>Thought you might want to read them.</p>
                </div>
            </div>

            <div class="space-y-4">
                {posts.map(post => (
                    <PostItem post={post} />
                ))}
            </div>
        </div>
    )
}
