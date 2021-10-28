import { BlogData, BlogMeta } from '../util/types'

export default function getBlogData(): BlogData[] {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'blog'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => !fn.startsWith('.'))

    const rawData: BlogMeta[] = []
    fileNames.forEach((file: string) => {
        const data = require(`../pages/blog/${file}/index.mdx`).meta
        if (data) {
            data.slug = '/blog/' + file
            rawData.push(data)
        }
    })

    return reorder(rawData, 'date')
}

export async function getStaticProps() {
    const blogData = getBlogData()
    return { props: { blogData } }
}
