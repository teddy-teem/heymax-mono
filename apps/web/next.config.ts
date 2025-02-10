import { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "react-native": "react-native-web",
      },
    },
  },
}
 
export default nextConfig