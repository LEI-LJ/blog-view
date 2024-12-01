/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['localhost', 'imgs.boblog.com']
    }
}

export default nextConfig
