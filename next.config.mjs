/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    async headers() {
        return [{
            source: "/:path*",
            headers: [{
                    key: "X-DNS-Prefetch-Control",
                    value: "on",
                },
                {
                    key: "Strict-Transport-Security",
                    value: "max-age=63072000; includeSubDomains; preload",
                },
                {
                    key: "X-XSS-Protection",
                    value: "1; mode=block",
                },
                {
                    key: "X-Frame-Options",
                    value: "SAMEORIGIN",
                },
                {
                    key: "X-Content-Type-Options",
                    value: "nosniff",
                },
                {
                    key: "Referrer-Policy",
                    value: "origin-when-cross-origin",
                },
            ],
        }, ];
    },
    async rewrites() {
        return [{
            source: "/api/download/file/:path*",
            destination: "/api/download?filename=:path*",
        }, ];
    },
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.56.1:3000"],
    images: {
        remotePatterns: [{
                protocol: "https",
                hostname: "vdbyai.vercel.app",
            },
            {
                protocol: "https",
                hostname: "**.cdninstagram.com",
            },
            {
                protocol: "https",
                hostname: "**.fbcdn.net",
            },
        ],
    },
};

export default nextConfig;