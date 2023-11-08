import '../styles/index.css'
import '../styles/gambarino.css'
import '../styles/general-sans.css'

import { ref } from 'documentx'

import Socials from './Socials'
import { Themer } from './Themer'
import { Children } from 'documentx'

export default function Layout({ children }: { children: Children }) {
    const routes = [
        { path: '/', name: 'Home', ref: ref() },
        { path: '/blog', name: 'Blog', ref: ref() },
    ]

    if (typeof window !== 'undefined') {
        console.log(
            'Source code available at https://github.com/westbrookdaniel/westbrook-daniel-website'
        )
    }

    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Daniel Westbrook - Web Developer</title>
                <meta
                    name="description"
                    content="I am a web developer primarily working with React building next-gen apps. I enjoy creating performant solutions and exploring new tools and technologies."
                />
            </head>
            <body>
                <div class="max-w-3xl m-auto px-6">
                    <header class="py-8 w-full flex justify-between items-center mb-8">
                        <nav class="flex space-x-2">
                            {routes.map(({ name, path, ref }) => {
                                const matching =
                                    path === '/'
                                        ? location.pathname === path
                                        : location.pathname.startsWith(path)
                                return (
                                    <a href={path} class="no-underline">
                                        <button
                                            ref={ref}
                                            class={
                                                matching
                                                    ? undefined
                                                    : 'bg-[unset]'
                                            }
                                        >
                                            {name}
                                        </button>
                                    </a>
                                )
                            })}
                        </nav>
                        <Themer />
                    </header>
                    <main>{children}</main>
                    <footer class="py-8 mt-64 text-sm space-y-6">
                        <Socials />
                        <p>Made By Daniel Westbrook</p>
                    </footer>
                </div>
            </body>
        </html>
    )
}
