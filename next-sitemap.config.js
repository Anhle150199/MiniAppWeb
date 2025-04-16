/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_CURRENT_DOMAIN || 'https://minitoolhub.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/server-sitemap.xml', 
    '/admin*',
    '/api*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL}/sitemap.xml`,
    ],
  },
};