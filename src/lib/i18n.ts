import { withBase } from '@/lib/paths'
import { template } from '@/settings'

export type Locale = 'en' | 'zh'

const translatedRoutes = new Set(['/', '/research', '/papers', '/projects', '/cv'])

export function getLocale(pathname: string): Locale {
	const route = pathname.startsWith(template.base)
		? pathname.slice(template.base.length) || '/'
		: pathname
	return route === '/zh' || route.startsWith('/zh/') ? 'zh' : 'en'
}

export function localizedPath(path: string, locale: Locale): string {
	const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
	if (locale === 'en') return withBase(normalized)
	return withBase(normalized === '/' ? '/zh/' : `/zh${normalized}`)
}

export function alternatePath(pathname: string, locale: Locale): string {
	let route = pathname.startsWith(template.base)
		? pathname.slice(template.base.length) || '/'
		: pathname
	route = route.replace(/^\/zh(?=\/|$)/, '') || '/'
	return localizedPath(route, locale)
}

export function hasTranslation(pathname: string): boolean {
	let route = pathname.startsWith(template.base)
		? pathname.slice(template.base.length) || '/'
		: pathname
	route = route.replace(/^\/zh(?=\/|$)/, '') || '/'
	route = route.length > 1 ? route.replace(/\/$/, '') : route
	return translatedRoutes.has(route) || route.startsWith('/blog/')
}
