/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io**",
      },
    ],
  },
};

export default nextConfig;
