/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
