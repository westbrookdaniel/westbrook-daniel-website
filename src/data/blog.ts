import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeStringify from 'rehype-stringify'
import { matter } from 'vfile-matter'

const processMarkdown = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(() => (_, file) => {
        matter(file)
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })

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

const files = import.meta.glob('./posts/*.md', { as: 'raw' })

export const blogPosts = Object.entries(files).map(([path, loader]) => {
    const id = path.split('/').pop()!.replace('.md', '')
    return { id, loader }
})

const cache = new Map<string, Post>()

export async function getBlogPost(id: string) {
    const cached = cache.get(id)
    if (cached) return cached
    const post = blogPosts.find(post => post.id === id)
    if (!post) throw new Error(`Post ${id} not found`)
    const file = await processMarkdown.process(await post.loader())
    const data = {
        id: post.id,
        info: file.data.matter as PostInfo,
        html: file.value as string,
    }
    cache.set(id, data)
    return data
}

export async function getBlogPosts() {
    const posts = await Promise.all(blogPosts.map(post => getBlogPost(post.id)))
    return posts.sort((a, b) => b.info.date - a.info.date)
}
