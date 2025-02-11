import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        'react-native': 'react-native-web',
        'react-native-reanimated': 'react-native-web',
      },
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['react-native-reanimated'] = require.resolve('react-native-web');
    }
    return config;
  },
};

export default nextConfig;
