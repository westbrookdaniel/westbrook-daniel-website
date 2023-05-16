import { ref } from 'documentx/util'
import { Divider } from '../components/Divider'
import { getBlogPostInfo } from '../data/blog'
import { detailedProjects } from '../data/projects'
import PostItem from '../components/PostItem'
import DetailedProjectItem from '../components/DetailedProjectItem'

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
                <p class="xs:self-end">Currently developing at GLX Digitial</p>
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
                <div class="flex items-baseline justify-between">
                    <h2 class="text-2xl mb-4">Some Things I've Written</h2>
                    <a href="/blog">
                        <p class="text-sm">See all</p>
                    </a>
                </div>
                <Divider class="mb-10" />
                <div class="space-y-4">
                    {posts.slice(0, 3).map(post => (
                        <PostItem post={post} />
                    ))}
                </div>
            </div>
            <div>
                <div class="flex items-baseline justify-between">
                    <h2 class="text-2xl mb-4">Other Things I've Made</h2>
                    <a href="/projects">
                        <p class="text-sm">See all</p>
                    </a>
                </div>
                <Divider class="mb-10" />
                <div class="space-y-4 flex flex-col">
                    {detailedProjects.slice(0, 3).map(project => (
                        <DetailedProjectItem project={project} />
                    ))}
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
                class="mb-[-1px] h-[32px] w-[16px] xs:mb-[-2px] xs:h-[52px] xs:w-[24px] md:mb-[-4px] md:h-[114px] md:w-[54px] bg-text inline-block"
            />
        </span>
    )
}
