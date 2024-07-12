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
  };
  