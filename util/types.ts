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
    feature?: Feature
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
    feature: Feature
    snippet: string
}

export interface BlogData extends BlogMeta {
    slug: string
}
