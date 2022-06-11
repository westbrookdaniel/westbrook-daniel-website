import * as React from 'react'
import { repeat, useFrameSequencer, usePause } from 'sequence-man'
import WebFont from 'webfontloader'
import Type from './Type'

const textContent = 'Daniel Westbrook'

function* typing() {
    const message = textContent
    let str = ''
    while (str.length !== message.length) {
        str += message[str.length]
        yield* repeat(6, <Type>{str}</Type>)
    }
}

function* blink() {
    for (let i = 1; i <= 6; i++) {
        yield* repeat(45, <Type>{textContent}</Type>)
        yield* repeat(45, <Type withoutBox>{textContent}</Type>)
    }
    yield* repeat(45, <Type>{textContent}</Type>)
}

function* deleting() {
    let str = textContent
    while (str.length > 0) {
        str = str.split('').slice(0, -1).join('')
        yield* repeat(6, <Type>{str}</Type>)
    }
}

function* empty() {
    yield* repeat(12, <Type></Type>)
}

const config = {
    scenes: [empty, typing, blink, deleting],
    shouldLoop: true,
}

export default function Typing() {
    const { play } = usePause()

    const { view } = useFrameSequencer(config)

    React.useEffect(() => {
        WebFont.load({
            custom: {
                families: ['Hack'],
            },
            fontactive: () => setTimeout(() => play(), 200),
            fontinactive: () => setTimeout(() => play(), 200),
        })
    }, [play])

    return view
}
