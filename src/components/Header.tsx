import type { IconDefinition } from '@ant-design/icons-svg/es/types'
import Github from '@ant-design/icons-svg/es/asn/GithubFilled'
import Linkedin from '@ant-design/icons-svg/es/asn/LinkedinFilled'
import Twitter from '@ant-design/icons-svg/es/asn/TwitterCircleFilled'
import Email from '@ant-design/icons-svg/es/asn/MailFilled'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers'

const getHtml = (def: IconDefinition) => {
    return renderIconDefinitionToSVGElement(def, {
        extraSVGAttrs: {
            width: '1.2em',
            height: '1.2em',
            fill: 'currentColor',
        },
    })
}

export default function Header() {
    console.log(Github)
    return (
        <header class="py-8 w-full flex justify-between">
            <nav class="flex space-x-4">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/projects">Projects</a>
            </nav>

            <div class="flex items-center space-x-1">
                <a
                    href="mailto:westy12dan@gmail.com"
                    aria-label="Email"
                    label="Email"
                    class="px-2 hover:opacity-80"
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
