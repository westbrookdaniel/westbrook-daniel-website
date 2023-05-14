import { ref } from 'documentx/util'
import { Divider } from '../components/Divider'

export default function Home() {
    meta.from({
        title: 'Daniel Westbrook | Web Developer',
        description:
            'I am a web developer primarily working with React building next-gen apps. I enjoy creating performant solutions and exploring new tools and technologies.',
        noSuffix: true,
    })

    return (
        <div class="space-y-28">
            <div class="min-h-[66vh] flex flex-col justify-center space-y-4 md:space-y-8">
                <h1 class="text-4xl xs:text-6xl md:text-9xl">
                    Daniel
                    <br />
                    <Typed text="Westbrook" />
                </h1>
                <Divider />
                <p class="xs:self-end">Currently developing at GLX Digitial</p>
            </div>
            <div class="prose">
                <h2 class="mb-4">About Me</h2>
                <Divider class="mb-10" />
                <p>
                    Hi, I'm Daniel Westbrook and I am a web developer primarily
                    working with React building next-gen apps. I enjoy creating
                    performant solutions and exploring new tools and
                    technologies.
                </p>
                <p>
                    Some of my favourite things are TailwindCSS, and Typescript.
                    When I'm not coding you can find me playing sport (tennis
                    and hockey), video games, or listening to music.
                </p>
            </div>
            <div>
                <div class="flex items-baseline justify-between">
                    <h2 class="text-2xl mb-4">Some Things I've Written</h2>
                    <a href="/">
                        <p class="text-sm">See all</p>
                    </a>
                </div>
                <Divider class="mb-10" />
                <div class="space-y-4">
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <div>
                <div class="flex items-baseline justify-between">
                    <h2 class="text-2xl mb-4">Other Things I've Made</h2>
                    <a href="/">
                        <p class="text-sm">See all</p>
                    </a>
                </div>
                <Divider class="mb-10" />
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}

function Typed({ text }: { text: string }) {
    const textEl = ref()
    const boxEl = ref()

    const chars = text.split('')
    let i = 0

    if (typeof document !== 'undefined') {
        const int = setInterval(() => {
            textEl.target.textContent = chars.slice(0, i).join('')
            i++
            if (i > chars.length) {
                clearInterval(int)

                setInterval(() => {
                    boxEl.target.classList.toggle('bg-text')
                }, 500)
            }
        }, 90)
    }

    return (
        <span class="space-x-[6px] xs:space-x-[8px] md:space-x-[14px]">
            <span ref={textEl} />
            <span
                ref={boxEl}
                class="mb-[-1px] h-[34px] w-[18px] xs:mb-[-2px] xs:h-[52px] xs:w-[24px] md:mb-[-4px] md:h-[114px] md:w-[54px] bg-text inline-block"
            />
        </span>
    )
}

function Post() {
    return (
        <div class="space-y-2 group/post">
            <a href="/" class="no-underline w-full">
                <h3 class="font-body underline group-hover/post:no-underline xs:mb-2 md:mb-0">
                    Auditing React Performance
                </h3>
                <div class="flex flex-col md:flex-row justify-between">
                    <p class="hidden xs:block">
                        How to use the React DevTools Profiler
                    </p>
                    <div class="flex-grow border-t-2 border-text/10 self-center mx-4" />
                    <p>20/5/2022</p>
                </div>
            </a>
        </div>
    )
}

function Project() {
    return (
        <a href="/">
            <h3 class="font-body">Brisk Poll</h3>
        </a>
    )
}
