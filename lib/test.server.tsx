import { GetStaticProps } from 'next'
import { BlogMeta } from '../util/types'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import fs from 'fs/promises'
import { MdxComponents } from '../components/mdx'

const SOURCE_FOLDER = 'data'
const BLOG_DIR = 'blog'

interface MdxData<Meta extends object> {
    code: string
    meta: Meta
}

export async function getMdxData<Meta extends object>(
    dir: string,
    slug: string
): Promise<MdxData<Meta>> {
    const directoryPath = path.join(process.cwd(), SOURCE_FOLDER, dir, slug)
    const filePath = path.join(directoryPath, 'index.mdx')

    const source = String(await fs.readFile(filePath))

    const { code, frontmatter, errors } = await bundleMDX({
        source,
        cwd: directoryPath,
    })

    if (errors.length > 0) {
        console.error(errors)
        throw new Error('Failed to bundle mdx')
    }

    return { code, meta: frontmatter as Meta }
}

export const getStaticProps: GetStaticProps = async context => {
    const postId = context.params?.id
    if (typeof postId !== 'string') throw new Error('postid is not valid')
    const props = await getMdxData<BlogMeta>(BLOG_DIR, postId)
    return { props }
}