import * as React from 'react'
import { repeat, useFrameSequencer, usePause } from 'sequence-man'
import WebFont from 'webfontloader'
import Type from './Type'

const logoContent = [
    'Daniel',
    <span key="spacer" className="ml-2" />,
    'Westbrook',
]

function* typing() {
    const messageArr = [...logoContent]
    const elArr = []
    while (elArr.length !== messageArr.length) {
        const currentItem: string | JSX.Element = messageArr[elArr.length]
        if (typeof currentItem === 'string') {
            let msg = ''
            while (msg.length !== currentItem.length) {
                msg += currentItem[msg.length]
                yield* repeat(
                    6,
                    <Type>
                        {elArr}
                        {msg}
                    </Type>
                )
            }
            elArr.push(currentItem)
        } else {
            elArr.push(currentItem)
            yield* repeat(6, <Type>{elArr}</Type>)
        }
    }
}

function* blink() {
    for (let i = 1; i <= 6; i++) {
        yield* repeat(45, <Type>{logoContent}</Type>)
        yield* repeat(45, <Type withoutBox>{logoContent}</Type>)
    }
    yield* repeat(45, <Type>{logoContent}</Type>)
}

function* deleting() {
    let elArr = [...logoContent]
    while (elArr.length > 0) {
        const currentItem: string | JSX.Element = elArr[elArr.length - 1]
        if (typeof currentItem === 'string') {
            let msg = currentItem
            elArr = elArr.slice(0, -1)
            while (msg.length > 0) {
                msg = msg.split('').slice(0, -1).join('')
                yield* repeat(
                    6,
                    <Type>
                        {elArr}
                        {msg}
                    </Type>
                )
            }
        } else {
            elArr = elArr.slice(0, -1)
            yield* repeat(6, <Type>{elArr}</Type>)
        }
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
