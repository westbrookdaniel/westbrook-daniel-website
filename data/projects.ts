export interface SideProject {
    title: string
    website: string
    source?: string
}

export const sideProjects: SideProject[] = [
    {
        // TODO: Should put the source for this on github
        website: 'https://img-board.netlify.app/',
        title: 'IMG Board',
    },
    {
        // TODO: Should put the source for this on github
        website: 'https://color-maker.netlify.app/',
        title: 'Color Maker',
    },
    {
        // TODO: Should put the source for this on github
        website: 'https://inspoapp.netlify.app/',
        title: 'Inspo App',
    },
    {
        website: 'https://timetablebuilder.netlify.app/',
        source: 'https://github.com/westbrookdaniel/timetable-builder',
        title: 'Timetable Builder',
    },
]

export interface Project extends SideProject {
    description: string
    feature: string
}

export const projects: Project[] = [
    {
        title: 'Stories for Reddit',
        description: 'Discover and read community made short stories',
        website: 'https://stories-for-reddit.vercel.app/',
        source: 'https://github.com/westbrookdaniel/stories-for-reddit',
        feature: '',
    },
    {
        title: 'Space of the Day',
        description: 'Discover astronomy pictures with a visual focus',
        website: 'https://spaceoftheday.netlify.app/',
        source: 'https://github.com/westbrookdaniel/space-of-the-day',
        feature: '',
    },
    {
        title: 'TeaHome',
        description: 'Online based tea store for limited run teas',
        website: 'https://tea-home.herokuapp.com/',
        source: 'https://github.com/westbrookdaniel/teahome',
        feature: '',
    },
    {
        title: 'Distinctive Homes WA',
        description: 'Marketing Website for Distinctive Homes WA',
        website: 'https://www.distinctivehomeswa.com.au/',
        feature: '',
    },
]
