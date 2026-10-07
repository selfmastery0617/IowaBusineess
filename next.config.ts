import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (written to /out) so the site can be uploaded to any
  // standard web host, such as Hostinger shared hosting. No Node.js server needed.
  output: "export",
  // Emit /services/index.html instead of /services.html so Apache serves clean URLs.
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
