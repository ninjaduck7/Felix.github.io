import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { seo } from '@/settings'
import { withBase } from '@/lib/paths'

export async function GET(context) {
	const blog = await getCollection('blog', ({ data }) => !data.draft)
	return rss({
		title: `${seo.default_title} - Notes`,
		description: seo.default_description,
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			description: post.data.excerpt,
			link: withBase(`/blog/${post.id}`),
		})),
		customData: '<language>en-us</language>',
	})
}
