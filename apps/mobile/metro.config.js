const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require("nativewind/metro");


const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');
const uiRoot = path.resolve(monorepoRoot, 'packages/ui');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [monorepoRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
  path.resolve(uiRoot, 'node_modules'),
];

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
};

module.exports = withNativeWind(config, { input: "./global.css" });;
