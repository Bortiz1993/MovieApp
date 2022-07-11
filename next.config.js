/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {images:  {layoutRaw: true, allowFutureImage: true}}

}

module.exports = nextConfig
