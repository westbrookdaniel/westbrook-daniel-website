import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeStringify from 'rehype-stringify'
import { matter } from 'vfile-matter'
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

fs.writeFileSync('./src/data/posts.json', JSON.stringify(blogPosts))
