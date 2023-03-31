/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'images.asos-media.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.asos-media.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    compiler: {
        styledComponents: true,
    },
};
