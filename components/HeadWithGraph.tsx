import Head from 'next/head'
import React from 'react'

export interface HeadWithGraphProps {
    title?: string
    image?: string
    description?: string
}

const HeadWithGraph: React.FC<HeadWithGraphProps> = ({
    title,
    image,
    description,
    children,
}) => {
    return (
        <Head>
            <meta
                property="og:title"
                content={
                    title
                        ? title + ' | Daniel Westbrook'
                        : 'Daniel Westbrook | Full Stack Developer'
                }
            />
            <title>
                {title
                    ? title + ' | Daniel Westbrook'
                    : 'Daniel Westbrook | Full Stack Developer'}
            </title>
            <meta
                property="og:image"
                content={image || '/images/projects/me.jpg'}
            />
            <meta
                property="og:description"
                content={
                    description ||
                    `I am a Full Stack Developer and Designer primarily working
                    with React building web apps. I enjoy formulating
                    performant, innovative solutions and exploring new tools and
                    technologies.`
                }
            />
            <meta
                property="description"
                content={
                    description ||
                    `I am a Full Stack Developer and Designer primarily working
                    with React building web apps. I enjoy formulating
                    performant, innovative solutions and exploring new tools and
                    technologies.`
                }
            />
            <meta property="og:site_name" content="Daniel Westbrook" />
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
}

export default HeadWithGraph
