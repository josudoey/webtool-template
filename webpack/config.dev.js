import { distPath } from '../expose.js'
import config from './config.js'

export default Object.assign({}, config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: [{
      serveIndex: true,
      directory: distPath
    }]
  }
})
