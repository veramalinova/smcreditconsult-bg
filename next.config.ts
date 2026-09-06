import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Cursor cloud preview / local proxy hosts to load Next.js HMR assets.
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.sh",
    "*.cursor.com",
  ],
};

export default nextConfig;
