/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  async redirects() {
    return [
      {
        source: '/guide',
        destination: 'https://docs.google.com/document/d/1YkaZb08YBlyKaE9JvEWDza2RJIUztic3vLehU8p5SZM/edit?usp=sharing',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig;
