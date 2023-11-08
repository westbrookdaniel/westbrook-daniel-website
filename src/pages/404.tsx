import { Divider } from '../components/Divider'
import Layout from '../components/Layout'
import { setMeta } from '../util/setMeta'

export default function NotFound() {
    setMeta({
        title: 'Not Found',
    })

    return (
        <Layout>
            <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8 py-16">
                <h1 class="text-4xl xs:text-5xl md:text-6xl">Not Found</h1>
                <Divider />
                <div class="space-y-2">
                    <p>
                        You seem to have stumbled upon a page that doesn't
                        exist.
                    </p>
                    <a href="/">Head Home</a>
                </div>
            </div>
        </Layout>
    )
}
