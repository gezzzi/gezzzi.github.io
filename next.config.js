/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "", // ユーザーサイトでは空にする
  images: { unoptimized: true },
  // ユーザーサイト（gezzzi.github.io）ではプレフィックスは不要
  assetPrefix: "",
};

module.exports = nextConfig;
