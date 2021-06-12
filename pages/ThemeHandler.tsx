import React, { useEffect } from 'react'
import create from 'zustand'

interface ThemeStore {
    theme: keyof typeof themes
    updateTheme: (theme: keyof typeof themes) => void
    rotateTheme: () => void
}

const getLocalStorage = (key: string) =>
    typeof window !== 'undefined'
        ? JSON.parse(window.localStorage.getItem(key)!)
        : null
const setLocalStorage = (key: string, value: string) =>
    typeof window !== 'undefined' &&
    window.localStorage.setItem(key, JSON.stringify(value))

console.log(getLocalStorage('theme'))

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
            const newTheme = (keys.length - 1 > i
                ? keys[i + 1]
                : keys[0]) as keyof typeof themes
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
        'on-accent': '#fff',

        background: '#09181e',
        subtle: '#1f2d34',
        'on-background': '#9eabb1',
        'heading-on-background': '#fff',

        lines: '#4d5c63',
        selection: '#36444b',
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
    mono: {
        brand: '#ffffff',
        'on-brand': '#000000',

        accent: '#ffffff',
        'accent-hover': '#dbdbdb',
        'accent-focus': '#c5c5c5',
        'on-accent': '#000',

        background: '#000000',
        subtle: '#141414',
        'on-background': '#fafafa',
        'heading-on-background': '#ffffff',

        lines: '#383838',
        selection: '#2b2b2b',
    },
}

const ThemeHandler: React.FC = ({ children }) => {
    const theme = useTheme(s => s.theme)
    const updateTheme = useTheme(s => s.updateTheme)
    useEffect(() => {
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

        Object.keys(currentTheme).forEach(key => {
            const value = currentTheme[key as keyof typeof currentTheme]
            document.documentElement.style.setProperty(`--${key}`, value)
        })
    }, [theme, updateTheme])

    return <div>{children}</div>
}

export default ThemeHandler
