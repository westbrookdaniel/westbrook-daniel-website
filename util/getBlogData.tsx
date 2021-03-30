export default function getBlogData() {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'blog'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => fn.endsWith('.mdx'))

    const rawData: any[] = []
    fileNames.forEach((file: string) => {
        const data = require(`../pages/blog/${file}`).meta
        if (data) {
            data.slug = '/blog/' + file.substring(0, file.length - 4)
            rawData.push(data)
        }
    })

    return reorder(rawData, 'date')
}

export async function getStaticProps() {
    const blogData = getBlogData()
    return { props: { blogData } }
}
