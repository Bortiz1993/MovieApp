/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {images:  {layoutRaw: true, allowFutureImage: true}},
  images: {
    domains: ['www.themoviedb.org'],
  },
}

module.exports = nextConfig
