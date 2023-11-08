import { ref } from 'documentx'
import { randomiseTheme } from '../components/Themer'

let firstTime = location.pathname === '/'

export function Typed({ text }: { text: string }) {
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
