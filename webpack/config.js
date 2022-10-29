import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { entry, distPath, publicPath, html } from '../expose.js'
import { createRequire } from 'module'

import { fileURLToPath } from 'url'
const webpackOutputPath = path.join(distPath, publicPath)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

export default {
  target: 'web',
  mode: 'production',
  entry,
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js'
    }
  },
  output: {
    clean: {
      keep (asset) {
        // console.log(asset)
        return asset.includes('ignored/dir')
      }
    },
    path: webpackOutputPath,
    publicPath: 'auto',
    filename: 'main.js',
    chunkFilename: '[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({}),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {}
      }]
    }, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {}
      }, {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: 'tsconfig.webpack.json'
        }
      }]
    }, {
      test: /render.pug$/,
      use: [{
        loader: require.resolve('vue-loader/dist/templateLoader.js'),
        options: {
          minimize: {
            collapseBooleanAttributes: true
          }
        }
      }, {
        loader: require.resolve('pug-plain-loader')
      }]
    }, {
      test: /module\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {}
      }, {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
            namedExport: true,
            localIdentName: '__[hash:base64:5]'
          },
          importLoaders: 0
        }
      }]
    }, {
      test: /\.css$/,
      exclude: /module\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
        }
      }, {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 0
        }
      }]
    }]
  },
  plugins: [
    new webpack.WatchIgnorePlugin({
      paths: [
        /\.d\.ts$/
      ]
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
      chunkFilename: 'css/[contenthash].css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin(Object.assign({}, html, {
      inject: true,
      template: path.resolve(__dirname, './template.ejs'),
      filename: './index.html',
      alwaysWriteToDisk: true
    }))
  ]
}
