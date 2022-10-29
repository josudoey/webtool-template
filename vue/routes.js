export default [{
  name: 'home',
  path: '/',
  component: () => import('./pages/home/index.js')
}, {
  name: 'jsx',
  path: '/jsx',
  component: () => import('./pages/jsx/index.jsx')
}]
