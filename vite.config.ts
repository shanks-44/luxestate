import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        mumbai: path.resolve(__dirname, 'mumbai-luxury-real-estate.html'),
        dubai: path.resolve(__dirname, 'dubai-vs-mumbai-property.html'),
        apartments: path.resolve(__dirname, 'luxury-apartments-india.html'),
        investment: path.resolve(__dirname, 'real-estate-investment-india.html'),
        villas: path.resolve(__dirname, 'luxury-villas-india.html'),
        trends: path.resolve(__dirname, 'real-estate-trends-2026.html'),
        buying: path.resolve(__dirname, 'buying-first-luxury-home.html'),
        sustainable: path.resolve(__dirname, 'sustainable-luxury-homes.html'),
        penthouses: path.resolve(__dirname, 'luxury-penthouses-india.html'),
        market: path.resolve(__dirname, 'real-estate-market-india.html'),
        notfound: path.resolve(__dirname, '404.html'),
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
