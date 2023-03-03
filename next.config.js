// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
