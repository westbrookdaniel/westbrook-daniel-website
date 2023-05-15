import _posts from './posts.json'

export interface PostInfo {
    title: string
    description: string
    date: number
    snippet: string
}

export type Post = {
    id: string
    info: PostInfo
    html: string
}

const posts = _posts as Post[]

export const getBlogPosts = () => {
    return posts.sort((a, b) => b.info.date - a.info.date)
}

export const getBlogPost = (id: string) => {
    return posts.find(post => post.id === id)
}
