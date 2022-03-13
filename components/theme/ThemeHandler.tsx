import * as React from 'react'
import create from 'zustand'
import { getLocalStorage, setLocalStorage } from '../../util/localStorage'

interface ThemeStore {
    theme: keyof typeof themes
    updateTheme: (theme: keyof typeof themes) => void
    rotateTheme: () => void
}

export const useTheme = create<ThemeStore>((set, get) => ({
    theme:
        getLocalStorage('theme') ||
        (typeof window !== 'undefined'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : 'light'),
    updateTheme: theme => {
        setLocalStorage('theme', theme)
        set({ theme })
    },
    rotateTheme: () =>
        set(s => {
            const keys = Object.keys(themes)
            const i = keys.indexOf(s.theme)
            const newTheme = (
                keys.length - 1 > i ? keys[i + 1] : keys[0]
            ) as keyof typeof themes
            setLocalStorage('theme', newTheme)
            return { theme: newTheme }
        }),
}))

const defaultTheme = {
    brand: '#d43c29',
    'on-brand': '#fff',

    accent: '#6f5623',
    'accent-hover': '#846929',
    'accent-focus': '#9a7c2e',
    'on-accent': '#fff',

    background: '#fff',
    subtle: '#dadde1',
    'on-background': '#4d5c63',
    'heading-on-background': '#000',

    lines: '#bdc6ca',
    selection: '#bdc6ca',
}

export const themes = {
    light: defaultTheme,
    dark: {
        brand: '#e36552',
        'on-brand': '#fff',

        accent: '#846929',
        'accent-hover': '#9a7c2e',
        'accent-focus': '#af8f3e',
        'on-accent': '#000',

        background: '#000000',
        subtle: '#141618',
        'on-background': '#959fa8',
        'heading-on-background': '#ffffff',

        lines: '#383838',
        selection: '#2b2b2b',
    },
    green: {
        brand: '#10B981',
        'on-brand': '#fff',

        accent: '#6EE7B7',
        'accent-hover': '#A7F3D0',
        'accent-focus': '#D1FAE5',
        'on-accent': '#064E3B',

        background: '#064E3B',
        subtle: '#065F46',
        'on-background': '#6EE7B7',
        'heading-on-background': '#ECFDF5',

        lines: '#059669',
        selection: '#047857',
    },
    outrun: {
        brand: '#ffb773',
        'on-brand': '#fff',

        accent: '#ffdf99',
        'accent-hover': '#ffcc6c',
        'accent-focus': '#e0b25b',
        'on-accent': '#42064e',

        background: '#14132c',
        subtle: '#1a1931',
        'on-background': '#887d9e',
        'heading-on-background': '#fff0d4',

        lines: '#4b355c',
        selection: '#5f1c68',
    },
    ocean: {
        brand: '#83bad3',
        'on-brand': '#fff',

        accent: '#83bad3',
        'accent-hover': '#729da8',
        'accent-focus': '#5d8392',
        'on-accent': '#162635',

        background: '#162635',
        subtle: '#213244',
        'on-background': '#a1bad1',
        'heading-on-background': '#ffffff',

        lines: '#2e465c',
        selection: '#4f6f94',
    },
}

const ThemeHandler: React.FC = ({ children }) => {
    const { theme, rotateTheme } = useTheme()
    const updateTheme = useTheme(s => s.updateTheme)

    React.useEffect(() => {
        if (!document.documentElement) return

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', e => {
                if (e.matches) {
                    updateTheme('dark')
                } else {
                    updateTheme('light')
                }
            })

        const currentTheme = themes[theme]

        if (!currentTheme) return rotateTheme()

        Object.keys(currentTheme).forEach(key => {
            const value = currentTheme[key as keyof typeof currentTheme]
            document.documentElement.style.setProperty(`--${key}`, value)
        })
    }, [rotateTheme, theme, updateTheme])

    return <>{children}</>
}

export default ThemeHandler
