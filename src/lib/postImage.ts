// Pick an image to represent a post on cards: its hero image, or else the first local image in its body.
import type { ImageMetadata } from 'astro';
import type { CollectionEntry } from 'astro:content';

// Every image under src/assets, keyed by its path from the project root ('/src/assets/…').
const assets = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png,webp,gif}', {
	eager: true,
});

export function postImage(post: CollectionEntry<'blog'>): ImageMetadata | undefined {
	if (post.data.heroImage) return post.data.heroImage;
	// Posts reference images relative to src/content/blog/, e.g. ../../assets/wordpress/2015/12/x.jpg
	const match = post.body?.match(/!\[[^\]]*\]\(\.\.\/\.\.\/(assets\/[^)\s]+)\)/);
	return match ? assets[`/src/${match[1]}`]?.default : undefined;
}
