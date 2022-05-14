import * as React from 'react'
import { ProjectData } from '../util/types'
import { sideData } from '../lib/sideData'
import Layout from '../components/layout/Layout'
import SmallItem from '../components/sections/SmallItem'
import ProjectItems from '../components/sections/Items/ProjectItems'
import Items from '../components/sections/Items/Items'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'

export { getStaticProps } from '../lib/getProjectData.server'

interface Props {
    projectData: ProjectData[]
}

const Blog: React.FC<Props> = ({ projectData }) => {
    return (
        <Layout
            title="Projects"
            image="/images/projects/space-of-the-day/space"
        >
            <div className="flex-grow mb-24">
                <ProjectItems
                    title={
                        <>
                            <h1 className="max-w-title">Projects</h1>
                            <p className="my-4">
                                Read about some of the projects or experiments
                                I&apos;ve worked on.
                            </p>
                        </>
                    }
                    data={projectData}
                />
                <Items
                    title={<h2>Other Projects</h2>}
                    render={p => <SmallItem data={p} />}
                    ItemsLayout={SmallItemLayout}
                    data={sideData}
                />
            </div>
        </Layout>
    )
}

export default Blog
