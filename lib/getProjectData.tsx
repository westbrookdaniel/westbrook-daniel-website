import { ProjectData } from '../util/types'

export default function getProjectData(): ProjectData[] {
    const fs = require('fs')
    const path = require('path')
    const reorder = require('../util/reorder').reorder

    const files = fs.readdirSync(
        path.join(process.cwd(), 'pages', 'p'),
        'utf-8'
    )
    const fileNames = files.filter((fn: string) => !fn.startsWith('.'))

    const rawData: ProjectData[] = []
    fileNames.forEach((file: string) => {
        const data = require(`../pages/p/${file}/index.mdx`).metadata
        if (data) {
            data.slug = '/p/' + file
            rawData.push(data)
        }
    })

    return reorder(rawData, 'order')
}

export async function getStaticProps() {
    const projectData = getProjectData()
    return { props: { projectData } }
}
