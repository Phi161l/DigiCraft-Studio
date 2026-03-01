import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",   // allow Picsum images
      "images.unsplash.com", // if you use Unsplash
      "cdn.pixabay.com",      // if you use Pixabay
      "upload.wikimedia.org"
    ],
  },
};

export default nextConfig;