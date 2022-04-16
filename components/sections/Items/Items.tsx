import * as React from 'react'
import Link from 'next/link'
import Container from '../../common/Container'
import Divider from '../../common/Divider'
import { ItemsLayout } from '../ItemsLayout/types'
import DefaultLayout from '../ItemsLayout/DefaultLayout'

export interface ItemsProps<Item> {
    data: Item[]
    title: JSX.Element | string
    limitedWithMessage?: string
    render: (item: Item) => JSX.Element
    ItemsLayout?: ItemsLayout
}

function Items<Item>({
    data,
    title,
    limitedWithMessage,
    render,
    ItemsLayout = DefaultLayout,
}: ItemsProps<Item>) {
    const itemElements = data.map(render)
    const limitedItemElements = limitedWithMessage
        ? itemElements.slice(0, 3)
        : itemElements

    return (
        <Container spaced>
            {title}
            <Divider className="my-6" />
            <ItemsLayout items={limitedItemElements} />
            {limitedWithMessage ? (
                <div className="mt-4 flex w-full items-center space-x-8 md:mt-2">
                    <Divider className="flex-grow" />
                    <Link href="/blog">
                        <a className="link-style flex items-center justify-center">
                            {limitedWithMessage}
                        </a>
                    </Link>
                </div>
            ) : (
                <Divider className="mt-6" />
            )}
        </Container>
    )
}

export default Items
