/** @type {import('next').NextConfig} */

const ARTIST_URL = 'http://localhost:4000/';
// const ARTIST_URL = 'https://spotify-clone-abhik-b.vercel.app';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/artist',
        destination: `${ARTIST_URL}/artist`,
      },
      {
        source: '/artist/:path*',
        destination: `${ARTIST_URL}/artist/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
