import React, { useEffect } from 'react'
import create from 'zustand'

interface ThemeStore {
    theme: keyof typeof themes
    changeTheme: (theme: keyof typeof themes) => void
    rotateTheme: () => void
}

const getLocalStorage = (key: string) =>
    typeof window !== 'undefined'
        ? JSON.parse(window.localStorage.getItem(key)!)
        : null
const setLocalStorage = (key: string, value: string) =>
    typeof window !== 'undefined' &&
    window.localStorage.setItem(key, JSON.stringify(value))

export const useTheme = create<ThemeStore>(set => ({
    theme: getLocalStorage('theme') || 'light',
    changeTheme: theme => set({ theme }),
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
}

const ThemeHandler: React.FC = ({ children }) => {
    const theme = useTheme(s => s.theme)
    useEffect(() => {
        if (!document.documentElement) return
        const currentTheme = themes[theme]
        Object.keys(currentTheme).forEach(key => {
            const value = currentTheme[key as keyof typeof currentTheme]
            document.documentElement.style.setProperty(`--${key}`, value)
        })
    }, [theme])

    return <div>{children}</div>
}

export default ThemeHandler
