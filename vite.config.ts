import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(import.meta.dirname, 'index.html'),
        mumbai: path.resolve(import.meta.dirname, 'mumbai-luxury-real-estate.html'),
        dubai: path.resolve(import.meta.dirname, 'dubai-vs-mumbai-property.html'),
        apartments: path.resolve(import.meta.dirname, 'luxury-apartments-india.html'),
        investment: path.resolve(import.meta.dirname, 'real-estate-investment-india.html'),
        villas: path.resolve(import.meta.dirname, 'luxury-villas-india.html'),
        trends: path.resolve(import.meta.dirname, 'real-estate-trends-2026.html'),
        buying: path.resolve(import.meta.dirname, 'buying-first-luxury-home.html'),
        sustainable: path.resolve(import.meta.dirname, 'sustainable-luxury-homes.html'),
        penthouses: path.resolve(import.meta.dirname, 'luxury-penthouses-india.html'),
        market: path.resolve(import.meta.dirname, 'real-estate-market-india.html'),
        notfound: path.resolve(import.meta.dirname, '404.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
