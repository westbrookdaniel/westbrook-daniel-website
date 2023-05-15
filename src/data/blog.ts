import _info from './generated/info.json'

export interface Info {
    title: string
    description: string
    date: number
    snippet: string
}

export type Post = PostInfo & {
    html: string
}

export type PostInfo = {
    id: string
    info: Info
}

const postsHtml = import.meta.glob('./generated/posts/*.html', { as: 'raw' })

const posts = _info as PostInfo[]

export const getBlogPostInfo = () => {
    return posts.sort((a, b) => b.info.date - a.info.date)
}

export const getBlogPost = async (id: string) => {
    const postInfo = posts.find(post => post.id === id)
    if (!postInfo) return null
    const html = await postsHtml[`./generated/posts/${id}.html`]()
    if (!html) throw new Error(`No html found for ${id}`)
    return { ...postInfo, html }
}
