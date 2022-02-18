import { BlogData, BlogMeta } from '../util/types'

export default async function getBlogData(): Promise<BlogData[]> {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'blog'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => !fn.startsWith('.'))

    const modulePromises = fileNames.map(
        async (file: string) => await require(`../pages/blog/${file}/index.mdx`)
    )
    const modules = await Promise.all(modulePromises)

    const rawData: BlogMeta[] = []
    modules.forEach((module: any, i) => {
        const data = module.meta
        if (data) {
            data.slug = '/blog/' + fileNames[i]
            rawData.push(data)
        }
    })

    return reorder(rawData, 'date')
}

export async function getStaticProps() {
    const blogData = await getBlogData()
    return { props: { blogData } }
}
