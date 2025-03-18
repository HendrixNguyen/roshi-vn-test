import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3030",
      },
      {
        protocol: "https",
        hostname: "vn-admin.roshi.sg",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
