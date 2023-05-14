export interface Project {
    title: string
    website: string
    source: string
}

export interface DetailedProject extends Project {
    description: string
    screenshot: string
    color: string
}

export const projects: Project[] = [
    {
        website: 'https://timetablebuilder.netlify.app/',
        source: 'https://github.com/westbrookdaniel/timetable-builder',
        title: 'Timetable Builder',
    },
]

export const detailedProjects: DetailedProject[] = [
    {
        title: 'Brisk Poll',
        description: 'Create and vote in polls quickly and easily',
        website: 'https://brisk-poll.fly.dev/',
        source: 'https://github.com/westbrookdaniel/brisk-poll',
        screenshot: '/images/projects/brisk-poll.png',
        color: '#a6c1ee',
    },
    {
        title: 'Stories for Reddit',
        description: 'Discover and read community made short stories',
        website: 'https://stories-for-reddit.vercel.app/',
        source: 'https://github.com/westbrookdaniel/stories-for-reddit',
        screenshot: '/images/projects/stories-for-reddit.png',
        color: '#c6b6b7',
    },
    {
        title: 'Space of the Day',
        description: 'Discover astronomy pictures with a visual focus',
        website: 'https://spaceoftheday.netlify.app/',
        source: 'https://github.com/westbrookdaniel/space-of-the-day',
        screenshot: '/images/projects/space-of-the-day.jpg',
        color: '#91beb7',
    },
    {
        title: 'TeaHome',
        description: 'Online based tea store for limited run teas',
        website: 'https://tea-home.herokuapp.com/',
        source: 'https://github.com/westbrookdaniel/teahome',
        screenshot: '/images/projects/teahome.png',
        color: '#bdadca',
    },
]
