import React from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'
import { createContext, useState, useEffect } from 'react'

export const TailwindCSS = createContext()

export default function TailwindProvider({ children }) {
	const [config, setConfig] = useState()

	useEffect(() => {
		const fullConfig = resolveConfig(tailwindConfig)
		setConfig(fullConfig)
	}, [])

	return (
		<TailwindCSS.Provider value={config}>{children}</TailwindCSS.Provider>
	)
}
