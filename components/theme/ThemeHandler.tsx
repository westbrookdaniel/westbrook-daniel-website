import * as React from 'react'
import create from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeKey = 'light' | 'dark' | 'green' | 'outrun' | 'ocean'
const themeKeys: ThemeKey[] = ['light', 'dark', 'green', 'outrun', 'ocean']

interface ThemeStore {
    themeKey: ThemeKey
    updateTheme: (theme: ThemeKey) => void
    rotateTheme: () => void
}

function getPreferred() {
    return typeof window !== 'undefined'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        : 'dark'
}

export const useTheme = create(
    persist<ThemeStore>(
        set => ({
            themeKey: getPreferred(),
            updateTheme: themeKey => set({ themeKey }),
            rotateTheme: () =>
                set(s => {
                    const i = themeKeys.indexOf(s.themeKey)
                    const newTheme =
                        themeKeys.length - 1 > i
                            ? themeKeys[i + 1]
                            : themeKeys[0]
                    return { themeKey: newTheme }
                }),
        }),
        { name: 'dw-theme' }
    )
)

interface ThemeHandlerProps {
    children?: React.ReactNode
}

const ThemeHandler: React.FC<ThemeHandlerProps> = ({ children }) => {
    const themeKey = useTheme(s => s.themeKey)
    const updateTheme = useTheme(s => s.updateTheme)

    React.useEffect(() => {
        if (!document.documentElement) return

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e =>
                e.matches ? updateTheme('dark') : updateTheme('light')
            )

        document.body.className = themeKey
    }, [themeKey, updateTheme])

    return <>{children}</>
}

export default ThemeHandler
