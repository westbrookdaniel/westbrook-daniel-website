import { GetStaticPaths, GetStaticProps } from 'next'
import { reorder } from '../util/reorder'
import type { BlogMeta } from '../util/types'
import { getDirMeta, WithSlug } from './getDirMeta.server'
import { getDirPaths, removeExtension } from './getDirPaths.server'
import { getMDXData } from './getMDXData.server'

const BLOG_DIR = 'blog'

export type BlogMetaWithSlug = BlogMeta & WithSlug

export const getBlogsMeta = async () => {
    const allMeta = await getDirMeta<BlogMetaWithSlug>(
        BLOG_DIR,
        fileName => '/blog/' + removeExtension(fileName)
    )
    return reorder(allMeta, 'date')
}

export const getStaticProps: GetStaticProps = async context => {
    const blogId = context.params?.id
    if (typeof blogId !== 'string') throw new Error('Blog id is not valid')
    const props = await getMDXData<BlogMeta>(BLOG_DIR, blogId)
    return { props }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { fileNames } = await getDirPaths(BLOG_DIR)
    return {
        paths: fileNames.map(file => ({
            params: { id: removeExtension(file) },
        })),
        // Pregenerate all posts
        fallback: false,
    }
}
