import { defineConfig } from 'vite'
import { documentxssr } from 'documentx/plugin'

export default defineConfig({
    plugins: [documentxssr()],
})
