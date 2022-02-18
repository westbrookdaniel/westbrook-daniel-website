import { ProjectData } from '../util/types'

export default async function getProjectData(): Promise<ProjectData[]> {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'p'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => !fn.startsWith('.'))

    const modulePromises = fileNames.map(
        async (file: string) => await require(`../pages/p/${file}/index.mdx`)
    )
    const modules = await Promise.all(modulePromises)

    const rawData: ProjectData[] = []
    modules.forEach((module: any, i) => {
        const data = module.metadata
        if (data) {
            data.slug = '/p/' + fileNames[i]
            rawData.push(data)
        }
    })

    return reorder(rawData, 'order')
}

export async function getStaticProps() {
    const projectData = await getProjectData()
    return { props: { projectData } }
}
