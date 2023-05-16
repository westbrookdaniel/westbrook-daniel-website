import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeStringify from 'rehype-stringify'
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
    .use(() => tree => {
        visit(tree, 'element', node => {
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

// Check if the generated folder exists and clear it
if (!fs.existsSync('./src/data/generated')) {
    fs.mkdirSync('./src/data/generated')
} else {
    fs.rmSync('./src/data/generated', { recursive: true })
    fs.mkdirSync('./src/data/generated')
}

// Blog posts
fs.mkdirSync('./src/data/generated/posts')
blogPosts.forEach(({ id, html }) => {
    fs.writeFileSync(`./src/data/generated/posts/${id}.html`, html)
})

// Blog posts only with id and info
fs.writeFileSync(
    './src/data/generated/info.json',
    JSON.stringify(blogPosts.map(({ id, info }) => ({ id, info })))
)
