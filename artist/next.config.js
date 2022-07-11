/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/artist',
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'http://localhost:3000/profile',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
