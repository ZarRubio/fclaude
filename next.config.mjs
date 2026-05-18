/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ['192.168.18.200'],
}

export default nextConfig
