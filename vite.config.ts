import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })



export default defineConfig(({command, mode}) => {
  console.log(command, mode, '配置初始化');
  // console.log(process.env.VITE_BASE_URL, 'ENV');
  return {
    root: process.cwd(),
    plugins: [vue()],
    resolve: {
      alias: {
          '@': path.resolve(__dirname, 'src'),
      }
  },
  }
})