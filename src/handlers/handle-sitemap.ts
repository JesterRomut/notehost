import { NoteHostSiteConfigFull } from '../types'
import { siteConfig } from '@/src/reverse-proxy-init'

export function handleSitemap(request: Request, siteConfig: NoteHostSiteConfigFull) {
  const { domain, slugs } = siteConfig
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  slugs.forEach((slug) => {
    if (slug == siteConfig.fof?.slug || slug == '404') return;
    sitemap += `<url><loc>https://${domain}/${slug}</loc></url>`
  })
  sitemap += '</urlset>'

  const response = new Response(sitemap)

  response.headers.set('content-type', 'application/xml')

  return response
}
