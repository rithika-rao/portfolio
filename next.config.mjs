import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Forces a static build
  images: {
    unoptimized: true,   // Required because GitHub doesn't have an image server
  },
  reactStrictMode: true,
  // You must REMOVE or COMMENT OUT the 'async headers()' section. 
  // Static exports (GitHub Pages) do not support custom headers in next.config.
};

export default withContentCollections(nextConfig);
