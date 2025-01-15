/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        API_URL: process.env.API_URL,
        RESEND_TOKEN: process.env.RESEND_TOKEN,
        RESEND_MAIL_FROM: process.env.RESEND_MAIL_FROM,
        RESEND_MAIL_TO: process.env.RESEND_MAIL_TO,
        BLOB_HOSTNAME: process.env.BLOB_HOSTNAME
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:  process.env.BLOB_HOSTNAME,
                pathname: "/projects/**"
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: "/sobre",
                destination: "/about"
            },
            {
                source: "/contato",
                destination: "/contact"
            },
            {
                source: "/projetos",
                destination: "/projects"
            },
            {
                source: "/projetos/:id",
                destination: "/projects/:id"
            },
            {
                source: "/servicos",
                destination: "/services"
            }
        ];
    }
};

export default nextConfig;
