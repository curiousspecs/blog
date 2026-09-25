import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	// `context.site` has no base path ('/blog'), so build every URL from site + base.
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		// The feed's <link> is the site home.
		site: new URL(`${base}/`, context.site).href,
		items: posts.map((post) => ({
			...post.data,
			link: new URL(`${base}/blog/${post.id}/`, context.site).href,
		})),
	});
}
