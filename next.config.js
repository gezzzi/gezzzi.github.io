/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  images: { unoptimized: true },
  // GitHub Pagesではサブパスがリポジトリ名になるため、本番環境では設定が必要
  assetPrefix: process.env.NODE_ENV === "production" ? "/io" : "",
};

module.exports = nextConfig;
