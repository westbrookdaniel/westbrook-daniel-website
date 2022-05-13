import * as React from 'react'
import Container from '../common/Container'
import HeadWithGraph, { HeadWithGraphProps } from '../HeadWithGraph'
import Nav from '../nav/Nav'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

interface Props extends HeadWithGraphProps {
    withoutFooter?: boolean
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children, withoutFooter, ...props }) => {
    return (
        <>
            <HeadWithGraph {...props} />
            <Container className="m-auto">
                <div className="w-full pb-10">
                    <Nav className="pt-10" />
                </div>
            </Container>
            {children}
            {withoutFooter ? null : (
                <div className="bg-subtle">
                    <Contact className="pt-16 pb-32" />
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Layout
