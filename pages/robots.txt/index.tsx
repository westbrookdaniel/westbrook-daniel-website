import { NextPage } from 'next'

const crawlableRobotsTxt = `User-agent: *\nAllow: /`
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`

const Robots: NextPage = () => {
    return null
}

Robots.getInitialProps = async ({ res }) => {
    if (!res) return

    res.setHeader('Content-Type', 'text/plain')
    // Return a non-crawlable robots.txt in non-production environments
    res.write(
        process.env.VERCEL_ENV === 'production'
            ? crawlableRobotsTxt
            : uncrawlableRobotsTxt
    )
    res.end()
}

export default Robots
