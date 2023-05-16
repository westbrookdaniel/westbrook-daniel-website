import { Divider } from '../components/Divider'

export default function NotFound() {
    meta.from({
        title: 'Not Found',
    })

    return (
        <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8 py-16">
            <h1 class="text-4xl xs:text-6xl md:text-6xl">Not Found</h1>
            <Divider />
            <div class="space-y-2">
                <p>You seem to have stumbled upon a page that doesn't exist.</p>
                <a href="/">Head Home</a>
            </div>
        </div>
    )
}
