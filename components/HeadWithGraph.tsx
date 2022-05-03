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
                        : 'Daniel Westbrook | Web Developer'
                }
            />
            <title>
                {title
                    ? title + ' | Daniel Westbrook'
                    : 'Daniel Westbrook | Web Developer'}
            </title>
            <meta
                property="og:image"
                content={image || '/images/projects/me.jpg'}
            />
            <meta
                property="og:description"
                content={
                    description ||
                    `I am a web developer who creates and formulates performant and innovative solutions. 
                    I also love exploring new and exciting tools and technologies.`
                }
            />
            <meta
                property="description"
                content={
                    description ||
                    `I am a web developer who creates and formulates performant and innovative solutions. 
                    I also love exploring new and exciting tools and technologies.`
                }
            />
            <meta property="og:site_name" content="Daniel Westbrook" />
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
}

export default HeadWithGraph
