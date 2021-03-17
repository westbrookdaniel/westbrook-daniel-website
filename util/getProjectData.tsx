export default function getProjectData() {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'p'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => fn.endsWith('.mdx'))

    const rawData: any[] = []
    fileNames.forEach((file: string) => {
        const data = require(`../pages/p/${file}`).metadata
        data.slug = '/p/' + file.substring(0, file.length - 4)
        rawData.push(data)
    })

    const projectData = reorder(rawData, 'order')

    return { props: { projectData } }
}

export async function getStaticProps() {
    return getProjectData()
}
