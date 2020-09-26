import fs from 'fs';
import { join } from 'path';

const HTTPS_KEY = join(__dirname, 'credentials/ca.key');
const HTTPS_CERT = join(__dirname, 'credentials/ca.cert');

export default {
  target: 'static',

  head: {
    title: 'netlify-cms-playground',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ],
  },

  components: true,

  buildModules: [ '@nuxtjs/tailwindcss' ],

  server: {
    https:
      process.env.NODE_ENV === 'development' ?
        {
          /* eslint-disable no-sync */
          key: fs.readFileSync(HTTPS_KEY, 'ascii'),
          cert: fs.readFileSync(HTTPS_CERT, 'ascii'),
          /* eslint-enable no-sync */
        } :
        null,
  },

  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
