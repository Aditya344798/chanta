import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "i.imgur.com" },
      { hostname: "api.escuelajs.co" },
      { hostname: "eduport.webestica.com" },
      { hostname: "placeimg.com" },
      { hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;
