import type { CollectionEntry } from 'astro:content';

// Archive posts (migrated from WordPress, or marked `archive: true`) are listed after current posts and
// labelled on their pages.
export const isArchive = (data: CollectionEntry<'blog'>['data']) => Boolean(data.wordpressUrl || data.archive);
