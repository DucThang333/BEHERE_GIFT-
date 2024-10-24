/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_APP_BASE_API: "http://localhost:5291/api/",
    NEXT_APP_ROOT: "http://localhost:3000/",
    AUTH_SECRET: "DDmP3WMjpgz+enVSg8RjbzwEc3sLRVmSSI7sM7jKOY8=",
  },
};

module.exports = nextConfig;
