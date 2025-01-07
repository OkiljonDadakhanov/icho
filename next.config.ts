import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Optional: Use SWC for minification
  basePath: '/icho', // replace with your repository name
  assetPrefix: '/icho', // needed for asset files like images
  trailingSlash: true,
};

export default nextConfig;
