const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');
const uiRoot = path.resolve(monorepoRoot, 'packages/ui');

const config = getDefaultConfig(projectRoot);

// Ensure Metro looks in the right places for node_modules
config.watchFolders = [monorepoRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
  path.resolve(uiRoot, 'node_modules'),
];

module.exports = config;
