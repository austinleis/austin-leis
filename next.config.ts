import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: { viewTransition: true },
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
