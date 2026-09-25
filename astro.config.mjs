// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://curiousspecs.github.io',
	base: '/blog',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// Reading face for headings and body text. Variable (weight 200–800, optical size);
			// self-hosted, SIL Open Font License (src/assets/fonts/newsreader-OFL.txt).
			provider: fontProviders.local(),
			name: 'Newsreader',
			cssVariable: '--font-newsreader',
			fallbacks: ['Georgia', 'serif'],
			options: {
				variants: [
					...['normal', 'italic'].flatMap((style) => [
						{
							src: [`./src/assets/fonts/newsreader-latin-opsz-${style}.woff2`],
							weight: '200 800',
							style,
							display: 'swap',
							unicodeRange: [
								'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
							],
						},
						{
							src: [`./src/assets/fonts/newsreader-latin-ext-opsz-${style}.woff2`],
							weight: '200 800',
							style,
							display: 'swap',
							unicodeRange: [
								'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF',
							],
						},
					]),
				],
			},
		},
		{
			// Interface face (navigation, dates, labels).

			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
