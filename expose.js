import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export { __filename, __dirname }
const projectPath = __dirname
const distPath = path.resolve(projectPath, 'dist')
const publicPath = './'
const entry = path.join(projectPath, './vue/entry.js')
const html = {
  appMountId: 'app',
  appMountHtmlSnippet: '',
  lang: 'en-US',
  title: '',
  meta: [{
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
  }, {
    name: 'robots',
    content: 'noindex, nofollow'
  }],
  links: [],
  scripts: []
}

export {
  entry, distPath, publicPath, html
}
