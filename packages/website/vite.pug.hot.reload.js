import colors from 'picocolors'
import path from 'path'

export default function PugHotReload () {
  return {
    name: 'pug-hot-reload',
    handleHotUpdate ({ file, server }) {
      // ref https://github.com/vitejs/vite/blob/fd9de0473e075c8d69bb3a8867ab15300506e67b/packages/vite/src/node/server/hmr.ts#L138
      const { config } = server
      if (file.endsWith('.pug')) {
        config.logger.info(
          colors.green(
            `${path.relative(process.cwd(), file)} changed, restarting server...`
          ),
          { clear: true, timestamp: true }
        )

        server.restart()
      }
    }
  }
}
