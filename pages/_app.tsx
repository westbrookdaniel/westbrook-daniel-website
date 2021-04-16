import '../styles/fonts.css'
import '../styles/index.css'
import { useRouter } from 'next/router'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react'
import StickyNav from '../components/nav/StickyNav'
import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { MdxComponents } from '../components/mdx'
import HeadWithGraph from '../util/HeadWithGraph'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    useEffect(() => {
        console.log(
            '%c Nothing to See Here...',
            'font-family: Hack, Helvetica, sans-serif; color: #4d5c63; padding: 16px 0; font-style: italic;'
        )
        if (!window) return
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push('js', new Date())
        window.dataLayer.push('config', 'G-L3S62B7X3T')
    }, [])

    return (
        <MDXProvider components={MdxComponents}>
            <StickyNav />
            <SwitchTransition>
                <CSSTransition
                    className="min-h-screen flex flex-col"
                    key={router.pathname}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false)
                    }}
                    classNames="fade"
                    onExited={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    <div className="min-h-screen flex flex-col">
                        <Component {...pageProps} />
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </MDXProvider>
    )
}

export default MyApp
