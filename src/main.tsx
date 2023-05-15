import './styles/index.css'
import './styles/gambarino.css'
import './styles/general-sans.css'

import { Meta, createRouter, fileRouter, ref } from 'documentx/util'
import { render } from 'documentx'
import { register } from 'documentx-ssr'
import Header from './components/Header'

register({
    router: createRouter(
        fileRouter(import.meta.glob('./pages/**/*.tsx'), './pages')
    ),
    meta: new Meta({ suffix: ' | Daniel Westbrook' }),
})

export default async function App() {
    const el = ref()

    meta.from({
        description:
            'I am a web developer primarily working with React building next-gen apps. I enjoy creating performant solutions and exploring new tools and technologies.',
    })

    const route = await router.bind(el, {
        error: err => <h1>Error: {err}</h1>,
    })

    if (typeof document !== 'undefined') {
        await document.fonts.ready
    }

    return (
        <div class="max-w-3xl m-auto px-6">
            <Header />
            <main ref={el}>{route}</main>
            <footer class="py-8 mt-64 text-sm">
                <p>Made By Daniel Westbrook ({new Date().getFullYear()})</p>
            </footer>
        </div>
    )
}

if (typeof document !== 'undefined') {
    render(<App />).then(children => {
        document.querySelector('#app')!.replaceChildren(...children)
    })
}

/**
 * Things TODO
 *
 * Router Link Preload
 * Markdown formatting, images, codes
 * Favicon
 * Socials
 * Type
 */
