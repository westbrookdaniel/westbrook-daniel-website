import { StaticImageData } from 'next/image'

export interface Feature {
    author: {
        name: string
        referral: string
    }
    href: string
}

export interface ProjectMeta {
    title: string
    description?: string
    link?: string
    feature?: StaticImageData
    order?: number
    external?: boolean
    source?: string
}

// TODO: Remove these
export interface ProjectData extends ProjectMeta {
    slug: string
}

export interface BlogMeta {
    title: string
    description: string
    date: number
    feature: Feature
    snippet: string
}

// TODO: Remove these
export interface BlogData extends BlogMeta {
    slug: string
}
