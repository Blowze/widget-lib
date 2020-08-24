const path = require('path');
// Общие переменные для нескольких конфигов
const PATHS = {
    src_bannerMobile: path.join(__dirname, './src/bannerMobile'),
    src_youtubeWidget: path.join(__dirname, './src/youtubeWidget'),
    dist: path.join(__dirname, 'build'),

  }
  var config = {
    entry: {
        bannerMobile: PATHS.src_bannerMobile,
        youtubeWidget: PATHS.src_youtubeWidget
    },
    output: {
        filename: `[name]-[contenthash:4]/build.js`,
        path: PATHS.dist,
        publicPath: '/'
      }
  };
  module.exports = (env, argv) => {

    if (argv.mode === 'development') {
      config.output.filename = '[name]-dev/build.js';
    }
  
    if (argv.mode === 'production') {
      config.output.filename = '[name]-[contenthash:4]/build.js';

    }
  
    return config;
  };