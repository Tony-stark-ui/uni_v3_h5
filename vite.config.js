/*
 * @FilePath: \经销商版本\code\vite.config.js
 * @Date: 2022-10-01 21:03:09
 * @Author: itmanyong@gmail.com
 * @LastEditors: itmanyong@gmail.com
 * @LastEditTime: 2022-10-02 06:55:09
 * @Description:
 */
import path from 'path'

const fs = require('fs')
import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'
import { getDirFileApi } from './.config/util.js'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config = {
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.json', '.vue'],
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      uni(),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.md$/],
        imports: [
          'vue',
          'pinia',
          'uni-app',
          {
            // utils自定义函数自动导入
            ...getDirFileApi('utils', { prefix: `util_` }),
          },
        ],
        dirs: ['src/model', 'src/common', 'src/hooks', 'src/api'],
        vueTemplate: true,
        dts: 'types/autoImport.d.ts',
      }),
      Unocss(),
    ],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        // 防止构建因为这东西出错
        external: ['regenerator-runtime'],
      },
    },


    server: {
      https: {
        cert: fs.readFileSync(path.join(__dirname, 'src/ssl/192.168.0.102+1.pem')),
        key: fs.readFileSync(path.join(__dirname, 'src/ssl/192.168.0.102+1-key.pem')),
      },
      proxy: {// 跨域代理
        '/apis': {
          // target: 'http://' + env.VUE_APP_BASE_API,
          target: 'https://yshj.guyatec.com/api/v1', //
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/apis/, ''),
        },
        // 代理 WebSocket 或 socket
        // '/socket.io': {
        //   target: 'ws://localhost:3000',
        //   ws: true
        //  }
      },
    },
  }
  // 只有h5才有用
  if (process.env.UNI_PLATFORM === 'h5') {
    config.plugins.push(h5ProdEffectPlugin())
  }

  return config
})
