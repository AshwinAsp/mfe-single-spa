
const path = require('path');
const { mergeWithRules } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExposeRuntimeCssAssetsPlugin = require("single-spa-css/ExposeRuntimeCssAssetsPlugin.cjs");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'orgname',
    projectName: 'dimo',
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
      },
    },
  })(defaultConfig, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new ExposeRuntimeCssAssetsPlugin({
        // The filename here must match the filename for the MiniCssExtractPlugin
        filename: "[name].css",
      }),
    ],
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, {
            loader: 'style-loader',
            options: { injectType: 'lazyStyleTag' }
          },
          {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 }
          }, 'postcss-loader'],
        },
      ],
    },
  });
  return config;
};
