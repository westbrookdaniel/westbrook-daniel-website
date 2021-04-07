import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Head from 'next/head'
import { FC } from 'react'
import { BlogMeta } from '../../util/types'
import Image from '../Image'
import Nav from '../nav/Nav'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Container from './Container'

interface Props {
    prefix: string
    meta: BlogMeta
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
                <title>{meta.title} | Blog by Daniel Westbrook</title>
                <meta name="description" content={meta.snippet}></meta>
            </Head>
            <Container>
                <div className="w-full pb-10">
                    <Nav className="pt-10" />
                </div>
            </Container>
            <Container spaced>
                <div className="space-y-8 items-end">
                    <div className="max-w-6xl">
                        <h1 className="mb-4">{meta.title}</h1>
                        <p>
                            {dayjs(meta.date).format('DD/MM/YYYY')} -{' '}
                            {meta.description}
                        </p>
                    </div>
                    {meta.feature ? (
                        <div className="max-w-lg">
                            <Image
                                width={500}
                                height={300}
                                className="object-cover transform"
                                loading="eager"
                                src={meta.feature}
                            />
                        </div>
                    ) : null}
                </div>
            </Container>
            <Container className="pb-24">
                <Wrapper className="prose lg:prose-lg">{children}</Wrapper>
            </Container>
            <div className="bg-themeGray-100">
                <Contact blog className="pt-16 pb-40" />
                <Footer />
            </div>
        </div>
    )
}

export default BlogLayout
