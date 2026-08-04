/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The current /public/images are generated SVG placeholders (see
    // scripts/generate-placeholder-images.mjs) rather than real photography.
    // Vercel's hosted image-optimization pipeline handles SVGs differently
    // than `next start` does locally, and was serving them as empty
    // responses in production. Skipping optimization sidesteps that
    // entirely and is harmless for vector placeholders. Once real
    // photography (jpg/png/webp) replaces these files, remove
    // `unoptimized: true` to get responsive resizing/format conversion back.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
