import * as React from 'react'
import { sideProjects } from '../data/projects'
import Layout from '../components/layout/Layout'
import SmallItem from '../components/sections/SmallItem'
import ProjectItems from '../components/sections/Items/ProjectItems'
import Items from '../components/sections/Items/Items'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'
import type { DetailedProjectWithImage } from '../lib/projects.server'

export { getStaticProps } from '../lib/projects.server'

interface Props {
    projects: DetailedProjectWithImage[]
}

const Projects: React.FC<Props> = ({ projects }) => {
    return (
        <Layout
            title="Projects"
            image="/images/projects/space-of-the-day/space"
        >
            <div className="mb-24 flex-grow">
                <ProjectItems
                    title={
                        <>
                            <h1 className="max-w-title">Projects</h1>
                            <p className="my-4">
                                Read about some of the fun projects and
                                experiments I&apos;ve made.
                            </p>
                        </>
                    }
                    data={projects}
                />
                <Items
                    title={<h2>Other Projects</h2>}
                    render={p => <SmallItem data={p} />}
                    ItemsLayout={SmallItemLayout}
                    data={sideProjects}
                />
            </div>
        </Layout>
    )
}

export default Projects
