/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['life-cdn.lifepharmacy.com', 'lifeadmin-app.s3.me-south-1.amazonaws.com', 'www.lifepharmacy.com', 'via.placeholder.com'],
  },
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['ae-en', 'ae-ar', 'sa-en', 'sa-ar'],
    defaultLocale: 'ae-en',
  }
}

module.exports = nextConfig
