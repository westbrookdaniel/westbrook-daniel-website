import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Head from 'next/head'
import { FC, useContext, useEffect } from 'react'
import { ProjectMeta } from '../../util/types'
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
        date: number
    }
    projectData: ProjectMeta[]
}

const Wrapper = styled.div`
    max-width: unset;

    & > :not(pre) {
        max-width: 750px;
    }
    pre {
        max-width: 900px;
    }
`

const BlogLayout: FC<Props> = ({ meta, children }) => {
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
                <div className="flex-row lg:items-end">
                    <div className="max-w-6xl lg:mr-16">
                        <h1 className="mb-4">{meta.title}</h1>
                        <p>
                            {dayjs(meta.date).format('DD/MM/YYYY')} -{' '}
                            {meta.description}
                        </p>
                    </div>
                </div>
            </Container>
            <Container className="pb-24">
                <Wrapper className="prose lg:prose-lg">
                    <Divider />
                    {children}
                </Wrapper>
            </Container>
            <div className="bg-themeGray-100">
                <Contact className="pt-16 pb-40" />
                <Footer />
            </div>
        </div>
    )
}

export default BlogLayout
