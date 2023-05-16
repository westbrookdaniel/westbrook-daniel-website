import { PostInfo } from '../data/blog'
import { formatDate } from '../util/date'

export default async function PostItem({ post }: { post: PostInfo }) {
    return (
        <div class="space-y-2 group/post">
            <a href={`/blog/${post.id}`} class="no-underline w-full">
                <h3 class="font-body underline group-hover/post:no-underline xs:mb-2 md:mb-0">
                    {post.info.title}
                </h3>
                <div class="flex flex-col md:flex-row justify-between text-text">
                    <p class="hidden xs:block">{post.info.description}</p>
                    <div class="flex-grow border-t-2 border-text/10 self-center mx-4" />
                    <p>{formatDate(post.info.date)}</p>
                </div>
            </a>
        </div>
    )
}
