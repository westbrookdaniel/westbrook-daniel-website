export function Divider({ class: c = '' }: { class?: string }) {
    return <div class={['border-t-2 border-text/10 w-full', c].join(' ')} />
}
