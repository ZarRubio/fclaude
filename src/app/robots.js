export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sahmparts.com/sitemap.xml',
    host: 'https://sahmparts.com',
  }
}
