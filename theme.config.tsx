import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
	useNextSeoProps() {
		const { asPath } = useRouter()
		if (asPath !== '/') {
			return {
				titleTemplate: '%s - NeoPromisance Guide',
			}
		}
	},
	head: (
		<>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta property='og:title' content='NeoPromisance Guide' />
			<meta
				property='og:description'
				content='The guide to NeoPromisance - Modern Promisance Game'
			/>
		</>
	),
	logo: <strong style={{ fontSize: '1.7rem' }}> NeoPromisance</strong>,
	project: {
		link: 'https://github.com/blake365',
	},
	chat: {
		link: 'https://discord.gg/bnuVy2pdgM',
	},
	docsRepositoryBase: 'https://github.com/blake365/neo-guide/tree/main/',
	footer: {
		text: 'NeoPromisance 2023',
	},
	toc: {
		backToTop: true,
	},
}

export default config
