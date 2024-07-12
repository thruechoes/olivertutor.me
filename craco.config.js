const path = require('path');

module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          buffer: false,
        };
        return webpackConfig;
      },
    },
    style: {
      postcss: {
        plugins: [
          require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
          require('autoprefixer'),
        ],
      },
    },
  };
  