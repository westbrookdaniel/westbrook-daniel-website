import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/lib/helpers'
import type { IconDefinition } from '@ant-design/icons-svg/lib/types'

export const getIconHtml = (def: IconDefinition) => {
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
