const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
                port: '',
                pathname: '/img/wn/**',
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/feature/common/style')],
    },
};

module.exports = nextConfig;
