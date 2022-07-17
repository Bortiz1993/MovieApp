/** @type {import('next').NextConfig} */
const nextConfig = {
  // The experemintal syntax was causing problems and the image quality was blurry, I also changed the layout from raw to fix and the dimensions were at 100px so i changed them to h325px, w250px.
  // reactStrictMode: true,
  // experimental: {images:  {layoutRaw: true, allowFutureImage: true}},
  images: {
    domains: ['www.themoviedb.org'],
    // formats: ['image/avif', 'image/webp']
    // loader: 'imgix',
    // path: ['www.themoviedb.org'],

  },
}

module.exports = nextConfig
