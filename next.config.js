const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com", "github.com"],
  },
};

module.exports = withMDX(nextConfig);
