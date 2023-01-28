/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  rewrites() {
    return [
      {
        source: "/update/:path*",
        destination: "https://test-legend-app.zecrey.com/:path*",
      },
    ];
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
