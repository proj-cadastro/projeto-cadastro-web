import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignora os erros de ESLint durante o build
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
};

export default nextConfig;
