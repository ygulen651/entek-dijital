import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  images: {
    // Admin panelinden yüklenen (Firebase Storage) veya URL ile eklenen görseller için.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
