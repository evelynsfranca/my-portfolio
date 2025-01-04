/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL,
        RESEND_TOKEN: process.env.RESEND_TOKEN,
        RESEND_MAIL_FROM: process.env.RESEND_MAIL_FROM,
        RESEND_MAIL_TO: process.env.RESEND_MAIL_TO,
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
                source: "/servicos",
                destination: "/services"
            },
        ];
    },
};

export default nextConfig;
