import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 部署到 GitHub Pages 时，资源需要走 /personal-site/ 子路径；
// 本地开发仍走根路径，不受影响。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/personal-site/' : '/',
  plugins: [react()],
}))
