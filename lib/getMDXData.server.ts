import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import fs from 'fs/promises'
import rehypePrism from 'rehype-prism-plus'
import { getDir } from './getDirPaths.server'

interface MdxData<Meta extends object> {
    code: string
    meta: Meta
}

export async function getMDXData<Meta extends object>(
    dir: string,
    slug: string
): Promise<MdxData<Meta>> {
    const directoryPath = getDir(dir)
    const filePath = path.join(directoryPath, `${slug}.mdx`)

    const source = String(await fs.readFile(filePath))

    const { code, frontmatter, errors } = await bundleMDX({
        source,
        cwd: directoryPath,
        mdxOptions(options) {
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                [
                    rehypePrism,
                    {
                        showLineNumbers: true,
                    },
                ],
            ]
            return options
        },
    })

    if (errors.length > 0) {
        console.error(errors)
        throw new Error('Failed to bundle mdx')
    }

    return { code, meta: frontmatter as Meta }
}
