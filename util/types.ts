export interface ProjectMeta {
    title: string
    description?: string
    link?: string
    feature?: string
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
    feature: string
}

export interface BlogData extends BlogMeta {
    slug: string
}
