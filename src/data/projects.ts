export interface Project {
    title: string
    href: string
}

export interface DetailedProject extends Project {
    description: string
    screenshot: string
}

export const projects: Project[] = [
    {
        href: 'https://github.com/westbrookdaniel/timetable-builder',
        title: 'Timetable Builder',
    },
]

export const detailedProjects: DetailedProject[] = [
    {
        title: 'Brisk Poll',
        description: 'Create and vote in polls quickly and easily',
        href: 'https://github.com/westbrookdaniel/brisk-poll',
        screenshot: '/images/projects/brisk-poll.png',
    },
    {
        title: 'Stories for Reddit',
        description: 'Discover and read community made short stories',
        href: 'https://github.com/westbrookdaniel/stories-for-reddit',
        screenshot: '/images/projects/stories-for-reddit.png',
    },
    {
        title: 'Space of the Day',
        description: 'Discover astronomy pictures with a visual focus',
        href: 'https://github.com/westbrookdaniel/space-of-the-day',
        screenshot: '/images/projects/space-of-the-day.jpg',
    },
    {
        title: 'TeaHome',
        description: 'Online based tea store for limited run teas',
        href: 'https://github.com/westbrookdaniel/teahome',
        screenshot: '/images/projects/teahome.png',
    },
]
