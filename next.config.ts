import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Optional: Use SWC for minification
  basePath: '/<your-repository-name>', // replace with your repository name
  assetPrefix: '/<your-repository-name>', // needed for asset files like images
  trailingSlash: true,
};

export default nextConfig;
