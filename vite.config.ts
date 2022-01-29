import { defineConfig } from 'vite';
import fs from 'fs'

export default defineConfig({
  plugins: [
    {
      name: 'vite-inject-importing-statements',
      load(id) {
        if (!id.includes('bootstrap')) {
          return
        }
        
        return fs.readFileSync(id, 'utf-8').replace(
          'Promise.all([])',
          `
          Promise.all([
            import('./pixi'),
          ])
          `
        )
      }
    },
  ]
});
