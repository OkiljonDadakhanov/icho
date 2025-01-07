import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Optional: Use SWC for minification
  basePath: "/icho",
  assetPrefix: "/icho",
};

export default nextConfig;
