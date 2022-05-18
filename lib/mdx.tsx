import * as React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

export function useMDXComponent(code: string) {
    return React.useMemo(() => getMDXComponent(code), [code])
}
