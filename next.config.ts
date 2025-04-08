import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  // Nonaktifkan optimasi CSS yang menggunakan critters
  experimental: {
    optimizeCss: false, // Ubah true menjadi false
  },
};

export default nextConfig;
