export interface Project {
    title: string
    href: string
}

export interface DetailedProject extends Project {
    description: string
}

export const projects: Project[] = [
    {
        title: 'Dungeon Delivery',
        href: 'https://github.com/westbrookdaniel/dungeon-delivery',
    },
    {
        title: 'Timetable Builder',
        href: 'https://github.com/westbrookdaniel/timetable-builder',
    },
    {
        title: 'etc.',
        href: 'https://github.com/westbrookdaniel/',
    },
]

export const detailedProjects: DetailedProject[] = [
    {
        title: 'DocumentX',
        description: 'Fullstack JSX Framework',
        href: 'https://github.com/westbrookdaniel/documentx',
    },
    {
        title: 'Stories for Reddit',
        description: 'Discover and read community made short stories',
        href: 'https://github.com/westbrookdaniel/stories-for-reddit',
    },
    {
        title: 'Space of the Day',
        description: 'Discover astronomy pictures with a visual focus',
        href: 'https://github.com/westbrookdaniel/space-of-the-day',
    },
    {
        title: 'TeaHome',
        description: 'Online based tea store for limited run teas',
        href: 'https://github.com/westbrookdaniel/teahome',
    },
]
