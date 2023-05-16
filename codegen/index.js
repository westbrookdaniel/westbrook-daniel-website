import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyPlugin from 'rehype-pretty-code'
import { matter } from 'vfile-matter'
import { visit } from 'unist-util-visit'
import fs from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

const processMarkdown = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .use(() => (_, file) => {
        matter(file)
    })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyPlugin, {
        theme: 'github-dark-dimmed',
    })
    .use(() => tree => {
        visit(tree, 'element', node => {
            if ('data-rehype-pretty-code-fragment' in node.properties) {
                // If pretty code fragment move it's children to replace it
                Object.entries(node.children[0]).forEach(([key, value]) => {
                    node[key] = value
                })
            }
            if (['a'].includes(node.tagName)) {
                node.properties.target = '_blank'
                node.properties.rel = 'noopener noreferrer'
            }
            if (['img'].includes(node.tagName)) {
                node.properties.loading = 'lazy'
                // Turn https://example.com/image.jpg?100x100 into [100, 100] and remove it from the src
                const dims = node.properties.src.split('?')[1]
                if (dims) {
                    const [width, height] = dims.split('x')
                    node.properties.width = width
                    node.properties.height = height
                    node.properties.src = node.properties.src.split('?')[0]
                }
                // TODO: Do some image processing and add srcset
            }
        })
    })
    .use(rehypeStringify, { allowDangerousHtml: true })

const blogPosts = await Promise.all(
    fs.readdirSync(path.resolve(__dirname, './posts')).map(async fileName => {
        const id = fileName.split('/').pop().replace('.md', '')
        const contents = fs.readFileSync(
            path.resolve(__dirname, `./posts/${fileName}`),
            'utf-8'
        )
        const file = await processMarkdown.process(contents)
        return {
            id,
            info: file.data.matter,
            html: file.value,
        }
    })
)

const root = path.resolve(__dirname, '../src/data/generated')

// Check if the generated folder exists and clear it
if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
} else {
    fs.rmSync(root, { recursive: true })
    fs.mkdirSync(root)
}

// Blog posts
fs.mkdirSync(path.join(root, 'posts'))
blogPosts.forEach(({ id, html }) => {
    fs.writeFileSync(path.join(root, `posts/${id}.html`), html)
})

// Blog posts only with id and info
fs.writeFileSync(
    path.join(root, 'info.json'),
    JSON.stringify(blogPosts.map(({ id, info }) => ({ id, info })))
)
