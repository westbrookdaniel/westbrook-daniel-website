export interface Feature {
    author: {
        name: string
        referral: string
    }
    href: string
}

export interface BlogMeta {
    title: string
    description: string
    date: number
    feature: Feature
    snippet: string
}
