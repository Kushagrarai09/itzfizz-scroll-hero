/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  ...(isProd && {
    basePath: "/itzfizz-scroll-hero",
    assetPrefix: "/itzfizz-scroll-hero/",
  }),
};

export default nextConfig;