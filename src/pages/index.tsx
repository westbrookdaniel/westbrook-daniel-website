import { ref } from 'documentx/util'
import { Divider } from '../components/Divider'
import { getBlogPostInfo } from '../data/blog'
import PostItem from '../components/PostItem'
import { randomiseTheme } from '../components/Themer'

export default async function Home() {
    meta.from({
        title: 'Daniel Westbrook - Web Developer',
        description:
            "I love building awesome web apps with React (and more). I'm always looking for ways to make my code faster, cleaner and more fun to work with.",
        noSuffix: true,
    })

    const posts = getBlogPostInfo()

    return (
        <div class="space-y-28">
            <div class="min-h-[66vh] flex flex-col justify-center space-y-4 md:space-y-8">
                <h1 class="text-4xl xs:text-6xl md:text-9xl">
                    Daniel
                    <br />
                    <Typed text="Westbrook" />
                </h1>
                <Divider />
                <div class="text-right">
                    <p class="xs:self-end">
                        Currently developing at{' '}
                        <a
                            href="https://www.glxdigital.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GLX Digital
                        </a>
                    </p>
                    <p class="xs:self-end">
                        You can find my other projects on my{' '}
                        <a
                            href="https://github.com/westbrookdaniel/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </p>
                </div>
            </div>
            <div class="prose">
                <h2 class="mb-4">About Me</h2>
                <Divider class="mb-10" />
                <p>
                    Hey there, I'm Daniel Westbrook and I love building awesome
                    web apps with React (and more). I'm always looking for ways
                    to make my code faster, cleaner and more fun to work with.
                    When I take a break from coding, I play sports like hockey
                    and tennis, and unwind with music and video games.
                </p>
            </div>
            <div>
                <div class="flex items-end justify-between mb-4">
                    <h2 class="text-2xl">Some Things I've Written</h2>
                    <a href="/blog" class="no-underline mb-0.5">
                        <button>See all</button>
                    </a>
                </div>
                <Divider class="mb-10" />
                <div class="space-y-4">
                    {posts.slice(0, 3).map(post => (
                        <PostItem post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

let firstTime = router.history.location.pathname === '/'

function Typed({ text }: { text: string }) {
    const textEl = ref()
    const boxEl = ref()

    const chars = text.split('')
    let i = 0

    if (typeof document !== 'undefined') {
        const int = setInterval(() => {
            textEl.target.textContent = chars.slice(0, i).join('')
            i++
            if (!(i % 2) && firstTime) randomiseTheme()
            if (i > chars.length) {
                clearInterval(int)
                firstTime = false

                setInterval(() => {
                    boxEl.target.classList.toggle('bg-accent')
                }, 500)
            }
        }, 180)
    }

    return (
        <span class="space-x-[6px] xs:space-x-[8px] md:space-x-[14px]">
            <span ref={textEl} />
            <span
                ref={boxEl}
                class="mb-[-1px] h-[32px] w-[16px] xs:mb-[-2px] xs:h-[52px] xs:w-[24px] md:mb-[-4px] md:h-[114px] md:w-[54px] bg-accent inline-block"
            />
        </span>
    )
}
