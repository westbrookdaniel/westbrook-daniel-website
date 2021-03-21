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
import { AppProps } from 'next/dist/next-server/lib/router/router'

interface NavContext {
    data: any[] | null
    setData: Dispatch<SetStateAction<any[] | null>>
}

export const NavContext = createContext<NavContext | null>(null)

declare global {
    interface Window {
        dataLayer: any[]
    }
}

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const [data, setData] = useState<any[] | null>(null)

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
        <NavContext.Provider value={{ data, setData }}>
            <StickyNav />
            <SwitchTransition>
                <CSSTransition
                    key={router.pathname}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false)
                    }}
                    appear
                    classNames="fade"
                    onExited={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    <Component {...pageProps} />
                </CSSTransition>
            </SwitchTransition>
        </NavContext.Provider>
    )
}

export default MyApp
