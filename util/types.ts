import { StaticImageData } from 'next/image'

export interface ProjectMeta {
    title: string
    description?: string
    link?: string
    feature?: StaticImageData
    order?: number
    external?: boolean
    source?: string
}

export interface ProjectData extends ProjectMeta {
    slug: string
}

export interface BlogMeta {
    title: string
    description: string
    date: number
    feature: StaticImageData
    snippet: string
}

export interface BlogData extends BlogMeta {
    slug: string
}
