/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Disable ESLint for production builds
      config.module.rules = config.module.rules.filter(
        (rule) => !(rule.use && rule.use.loader === "eslint-loader"),
      );
    }
    return config;
  },
};

export default nextConfig;
