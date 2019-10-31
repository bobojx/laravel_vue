const path = require('path');
require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(
    __dirname,
    '/resources/src',
    dir,
  );
}

const rawArgv = process.argv.slice(2);
rawArgv.join(' ');
const report = rawArgv.includes('--report');
const plugins = [];
if (report) {
  plugins.push(new BundleAnalyzerPlugin({
    openAnalyzer: true,
  }));
}
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/resources/src'),
      '_c': path.join(__dirname, '/resources/src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('icons')],
        options: {
          symbolId: 'icon-[name]',
        },
      },
    ],
  },
  plugins: plugins,
};
