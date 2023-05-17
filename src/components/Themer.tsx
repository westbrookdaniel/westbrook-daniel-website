import { getRandomTheme } from '../util/color'

const createFavicon = (color: string) => {
    return (
        <link
            rel="icon"
            type="image/svg+xml"
            href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect x=%2225%22 y=%225%22 width=%2255%22 height=%2290%22 rx=%220%22 fill=%22${color}%22></rect></svg>`}
        />
    )
}

export function Themer() {
    if (typeof document === 'undefined') {
        let theme: Record<string, number[]>
        try {
            // Try to read theme from cookie
            theme = JSON.parse(req.cookies.theme)
        } catch {
            // Fallback to a random theme
            theme = getRandomTheme()
        }
        // Throw it in the head
        meta.set([
            createFavicon(`rgb(${theme['--accent'].join(',')})`),
            <style
                dangerouslySetInnerHTML={{
                    __html: `:root{${Object.entries(theme)
                        .map(([key, value]) => `${key}:${value.join(' ')}`)
                        .join(';')}}`,
                }}
            />,
        ])
    }

    function onClick() {
        const newVars = getRandomTheme()
        // Set the CSS variables
        Object.entries(newVars).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value.join(' '))
        })
        // Set the favicon
        meta.set([createFavicon(`rgb(${newVars['--accent'].join(',')})`)])
        // Store the theme in a cookie for
        document.cookie = `theme=${JSON.stringify(newVars)};`
    }

    return (
        <button onClick={onClick} class="space-x-1.5">
            <span>New Theme</span>
            <span
                class="py-0.5"
                dangerouslySetInnerHTML={{ __html: SparkleIcon }}
            />
        </button>
    )
}

const SparkleIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" /></svg>`
