const config = require("./data/config.json");
const basePath = config.basePath && config.basePath !== "/" ? config.basePath : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath,
  baseUrl: config.baseUrl,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
