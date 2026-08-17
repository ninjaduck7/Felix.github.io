import { template } from '@/settings'

export function withBase(path = '/') {
	const normalized = path.startsWith('/') ? path : `/${path}`
	return normalized === '/' ? `${template.base}/` : `${template.base}${normalized}`
}
