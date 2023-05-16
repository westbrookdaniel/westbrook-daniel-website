import type { IconDefinition } from '@ant-design/icons-svg/lib/types'
import Github from '@ant-design/icons-svg/lib/asn/GithubFilled'
import Linkedin from '@ant-design/icons-svg/lib/asn/LinkedinFilled'
import Twitter from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled'
import Email from '@ant-design/icons-svg/lib/asn/MailFilled'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/lib/helpers'

const getHtml = (def: IconDefinition) => {
    let actualDef = def
    // TODO: Why the server be like this
    if ('default' in def) actualDef = def.default as IconDefinition
    return renderIconDefinitionToSVGElement(actualDef, {
        extraSVGAttrs: {
            width: '1.2em',
            height: '1.2em',
            fill: 'currentColor',
        },
    })
}

export default function Header() {
    return (
        <header class="py-8 w-full flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mb-8">
            <nav class="flex space-x-4">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/projects">Projects</a>
            </nav>

            <div class="flex items-center space-x-1 self-end">
                <a
                    href="mailto:westy12dan@gmail.com"
                    aria-label="Email"
                    label="Email"
                    class="pr-2 hover:opacity-80"
                    dangerouslySetInnerHTML={{ __html: getHtml(Email) }}
                />
                <a
                    href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    class="px-2 hover:opacity-80"
                    dangerouslySetInnerHTML={{ __html: getHtml(Linkedin) }}
                />
                <a
                    href="https://github.com/westbrookdaniel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    class="px-2 hover:opacity-80"
                    dangerouslySetInnerHTML={{ __html: getHtml(Github) }}
                />
                <a
                    href="https://twitter.com/DanielW29381255"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    class="pl-2 hover:opacity-80"
                    dangerouslySetInnerHTML={{ __html: getHtml(Twitter) }}
                />
            </div>
        </header>
    )
}
