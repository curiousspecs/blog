import { defineCollection, type SchemaContext } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Type-check frontmatter using a schema
const schema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.optional(image()),
	});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: (context: SchemaContext) =>
		schema(context).extend({
			// Tags and categories carried over from WordPress; not displayed yet.
			tags: z.array(z.string()).optional(),
			// The post's address on the old WordPress.com site, kept for redirects.
			wordpressUrl: z.url().optional(),
		}),
});

// Standalone pages (About, Résumé). Rendered by src/pages/about.astro and src/pages/resume.astro;
// kept out of the blog collection so they never appear in the post list or the RSS feed.
const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema,
});

// Publications list (src/data/publications.json), shown on /publications/.
const publications = defineCollection({
	loader: file('src/data/publications.json'),
	schema: ({ image }) =>
		z.object({
			kind: z.enum(['article', 'catalogue']),
			title: z.string(),
			venue: z.string(),
			details: z.string(),
			year: z.number(),
			url: z.url().optional(),
			// Path relative to src/data/.
			image: image().optional(),
			// Slug of a post about this publication.
			post: z.string().optional(),
		}),
});

export const collections = { blog, pages, publications };
