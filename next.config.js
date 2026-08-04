/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
