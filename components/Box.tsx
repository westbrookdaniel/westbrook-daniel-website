import * as React from 'react'

export function Box() {
    return (
        <div className="flex h-[31px] items-center">
            <div className="ml-[4px] h-[15px] w-[8px] bg-brand" />
        </div>
    )
}

export function BoxContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex select-none items-center font-mono text-[1.3rem] font-bold uppercase text-brand">
            {children}
        </div>
    )
}
