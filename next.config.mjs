/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/w8fc6tgspyjz/**",
      },

      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "clickup.com",
        pathname: "/**",
      }
      
    ],
  },
};

export default nextConfig;
