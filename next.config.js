/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
}

module.exports = {
    webpack: (config, { isServer }) => {
  
      if (!isServer) {
        config.target = 'electron-renderer';
        config.node = {
          __dirname: true,
        }
      }
      return config;
    },
  };
