import path from 'path'
import fs from 'fs/promises'

const SOURCE_FOLDER = 'data'

export function getDir(dir: string) {
    return path.join(process.cwd(), SOURCE_FOLDER, dir)
}

export async function getDirPaths(dir: string) {
    const directoryPath = getDir(dir)

    const allFileNames = await fs.readdir(directoryPath, 'utf-8')
    // Ignore files like .DS_STORE
    const fileNames = allFileNames.filter((f: string) => !f.startsWith('.'))

    return { fileNames, directoryPath }
}

export function removeExtension(fileName: string) {
    return path.parse(fileName).name
}
