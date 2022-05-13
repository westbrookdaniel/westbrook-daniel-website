import type { BlogData, BlogMeta } from '../util/types'

const SOURCE_FOLDER = 'data'

const BLOG_DIR = 'blog'
const BLOG_SLUG_PREFIX = '/blog/'
const BLOG_REORDER_KEY = 'date'

export default async function getBlogData(): Promise<BlogData[]> {
    return []
    // const fs = require('fs')
    // const path = require('path')
    // const reorder = require('../util/reorder').reorder

    // const files = fs.readdirSync(
    //     path.join(process.cwd(), SOURCE_FOLDER, BLOG_DIR),
    //     'utf-8'
    // )
    // const fileNames = files.filter((fn: string) => !fn.startsWith('.'))

    // const modulePromises = fileNames.map(
    //     async (file: string) =>
    //         await require(`../${SOURCE_FOLDER}/${BLOG_DIR}/${file}/index.mdx`)
    // )
    // const modules = await Promise.all(modulePromises)

    // const rawData: BlogMeta[] = []
    // modules.forEach((module: any, i) => {
    //     const data = module.meta
    //     if (data) {
    //         data.slug = BLOG_SLUG_PREFIX + fileNames[i]
    //         rawData.push(data)
    //     }
    // })

    // return reorder(rawData, BLOG_REORDER_KEY)
}

export async function getStaticProps() {
    const blogData = await getBlogData()
    return { props: { blogData } }
}
