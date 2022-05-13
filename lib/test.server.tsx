import { bundleMDX } from 'mdx-bundler'
import { GetStaticProps } from 'next'
import { BlogMeta } from '../util/types'

const SOURCE_FOLDER = 'data'
const BLOG_DIR = 'blog'

export async function getMdxData(dir: string, slug: string) {
    const path = require('path')
    const fs = require('fs')

    const fullPath = path.join(
        process.cwd(),
        SOURCE_FOLDER,
        dir,
        slug,
        'index.mdx'
    )
    const source = fs.readFileSync(fullPath, 'utf8')

    const { code, frontmatter, errors } = await bundleMDX({ source })

    if (errors.length > 0) {
        console.error(errors)
        throw new Error('Failed to bundle mdx')
    }

    return { code, meta: frontmatter as BlogMeta }
}

export const getStaticProps: GetStaticProps = async context => {
    const postId = context.params?.id
    if (typeof postId !== 'string') throw new Error('postid is not valid')
    return {
        props: await getMdxData(BLOG_DIR, postId),
    }
}
