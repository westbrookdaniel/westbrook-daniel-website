import Head from 'next/head'
import { FC, useContext, useEffect } from 'react'
import { NavContext } from '../../pages/_app'
import getProjectData from '../../util/getProjectData'
import { ProjectMetadata } from '../../util/types'
import Divider from '../Divider'
import Nav from '../nav/Nav'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Container from './Container'

interface Props {
    prefix: string
    meta: {
        title: string
        description: string
        feature: string
    }
    projectData: any[]
}

const BlogLayout: FC<Props> = ({ meta, children, projectData }) => {
    const { setData, data } = useContext(NavContext)!
    useEffect(() => {
        if (!data) {
            setData(projectData)
        }
    }, [])

    return (
        <div>
            <Head>
                <title>
                    {meta.title} | Blog {'>'} Daniel Westbrook
                </title>
                <meta name="description" content={meta.description}></meta>
            </Head>
            <Container>
                <div className="w-full pb-10">
                    <Nav className="pt-10" blog />
                </div>
            </Container>
            <Container spaced>
                <div className="flex-row lg:items-end mb-6">
                    <div className="max-w-6xl lg:mr-16">
                        <h1 className="mb-4">{meta.title}</h1>
                        <p>{meta.description}</p>
                    </div>
                </div>
                <Divider />
            </Container>
            <Container className="pb-8 lg:pb-10">{children}</Container>
            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-40" />
                <Footer />
            </div>
        </div>
    )
}

export default BlogLayout
