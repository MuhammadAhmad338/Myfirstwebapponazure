import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default {
  server: {
    port: 5173, // Ensure this matches the port you're exposing in Docker
  },
};