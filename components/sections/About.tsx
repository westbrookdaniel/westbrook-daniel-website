import Container from '../layout/Container'
import Divider from '../Divider'

export default function About() {
    return (
        <Container spaced>
            <h2>About Me</h2>
            <Divider className="mt-4 mb-5" />
            <div className="row">
                <p>
                    I am a Full Stack Developer and Designer primarily working
                    with React building web apps. I enjoy formulating
                    performant, innovative solutions and exploring new tools and
                    technologies.
                </p>
                <p>
                    Some of my favourite things are{' '}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Next.js
                    </a>
                    ,{' '}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TailwindCSS
                    </a>
                    , and{' '}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Typescript
                    </a>
                    . When I'm not coding you can find me playing sport (tennis
                    and hockey), video games, or listening to{' '}
                    <a
                        href="https://open.spotify.com/user/the12thdan?si=e7c_O6S1TDW6z7kr83TD9Q"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        music
                    </a>
                    .
                </p>
            </div>
        </Container>
    )
}
