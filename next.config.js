/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "demo.vendure.io", "www.hyperui.dev"],
  },
};

module.exports = nextConfig;
