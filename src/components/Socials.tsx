import Github from '@ant-design/icons-svg/lib/asn/GithubFilled'
import Linkedin from '@ant-design/icons-svg/lib/asn/LinkedinFilled'
import Twitter from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled'
import Email from '@ant-design/icons-svg/lib/asn/MailFilled'
import { getIconHtml } from '../util/icon'

export default function Socials() {
    return (
        <div class="flex items-center space-x-2 self-end">
            <a
                href="mailto:westy12dan@gmail.com"
                aria-label="Email"
                label="Email"
                class="pr-2 hover:opacity-80"
                dangerouslySetInnerHTML={{ __html: getIconHtml(Email) }}
            />
            <a
                href="https://www.linkedin.com/in/daniel-westbrook-692227196/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="px-2 hover:opacity-80"
                dangerouslySetInnerHTML={{ __html: getIconHtml(Linkedin) }}
            />
            <a
                href="https://github.com/westbrookdaniel/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                class="px-2 hover:opacity-80"
                dangerouslySetInnerHTML={{ __html: getIconHtml(Github) }}
            />
            <a
                href="https://twitter.com/DanielW29381255"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                class="pl-2 hover:opacity-80"
                dangerouslySetInnerHTML={{ __html: getIconHtml(Twitter) }}
            />
        </div>
    )
}
