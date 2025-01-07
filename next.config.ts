import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Optional: Use SWC for minification
<<<<<<< HEAD
  basePath: '/icho',
  assetPrefix: '/icho',
=======
  basePath: '/icho', // replace with your repository name
  assetPrefix: '/icho', // needed for asset files like images
  trailingSlash: true,
>>>>>>> ebdd9c734fc872418d326543daa212a37ed45b9f
};

export default nextConfig;
