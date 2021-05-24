const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  eslint: {
    dev: true,
  },
  preventAssignment: true,
});
