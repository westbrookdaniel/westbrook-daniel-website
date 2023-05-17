import './styles/index.css'
import './styles/gambarino.css'
import './styles/general-sans.css'

import { Meta, createRouter, fileRouter, ref } from 'documentx/util'
import { render, register } from 'documentx'
import Socials from './components/Socials'
import { Themer } from './components/Themer'

register({
    router: createRouter(
        fileRouter(import.meta.glob('./pages/**/*.tsx'), './pages')
    ),
    meta: new Meta({ suffix: ' - Daniel Westbrook' }),
})

export default async function App() {
    const el = ref()

    meta.from({
        description:
            'I am a web developer primarily working with React building next-gen apps. I enjoy creating performant solutions and exploring new tools and technologies.',
    })

    console.log(
        'Source code available at https://github.com/westbrookdaniel/westbrook-daniel-website'
    )

    const route = await router.bind(el)

    return (
        <div class="max-w-3xl m-auto px-6">
            <header class="py-8 w-full flex justify-between items-center mb-8">
                <nav class="flex space-x-4">
                    <a href="/">Home</a>
                    <a href="/blog">Blog</a>
                    <a href="/projects">Projects</a>
                </nav>
                <Themer />
            </header>
            <main ref={el}>{route}</main>
            <footer class="py-8 mt-64 text-sm space-y-4">
                <Socials />
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
