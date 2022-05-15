import * as React from 'react'
import { projects, sideProjects } from '../data/projects'
import Layout from '../components/layout/Layout'
import SmallItem from '../components/sections/SmallItem'
import ProjectItems from '../components/sections/Items/ProjectItems'
import Items from '../components/sections/Items/Items'
import SmallItemLayout from '../components/sections/ItemsLayout/SmallItemLayout'

const Projects: React.FC = () => {
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
