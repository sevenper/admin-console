const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
} = require('customize-cra');

const webpack = require('webpack');
const path = require('path');

const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    '/api/*': {
      target: 'https://xinxue.niubibeta.com',
      changeOrigin: true,
    },
  };
  return configFunction;
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'es',
      style: 'css',
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#4881FF',
        '@body-background': '#fff',
        '@component-background': '#fff',
      },
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, './src'),
      '@axios': path.resolve(__dirname, './src/utils/axios'),
    })
  ),
  devServer: overrideDevServer(addProxy()),
};
