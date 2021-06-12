import Container from '../components/layout/Container'
import Nav from '../components/nav/Nav'
import Footer from '../components/sections/Footer'
import Contact from '../components/sections/Contact'
import React from 'react'
import BlogSection from '../components/sections/BlogSection'
import { BlogData } from '../util/types'
import HeadWithGraph from '../util/HeadWithGraph'

export { getStaticProps } from '../util/getBlogData'

interface Props {
    blogData: BlogData[]
}

const Blog: React.FC<Props> = ({ blogData }) => {
    return (
        <>
            <HeadWithGraph title="Blog" />
            <Container className="m-auto">
                <div className="w-full mb-12">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <div className="mb-16 flex-grow">
                <BlogSection
                    title={
                        <>
                            <h1 className="max-w-title">Blog</h1>
                            <p className="mt-4 mb-10">
                                Read my latest posts where I write about what
                                I'm finding interesting
                            </p>
                        </>
                    }
                    data={blogData}
                />
            </div>
            <div className="bg-subtle">
                <Contact className="pt-16 pb-32" />
                <Footer />
            </div>
        </>
    )
}

export default Blog
