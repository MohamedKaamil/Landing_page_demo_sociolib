import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.sociolib.com',
        pathname: '/mulk/**',
      },
    ],
  },
  
};

export default nextConfig;
