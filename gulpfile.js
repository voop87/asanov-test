const {src, dest, parallel, series, watch, prependListener} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const browsersync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const include = require('posthtml-include');
const svgstore = require('gulp-svgstore');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;

const htmlInclude = () => {
  return src(['./src/index.html'])
  .pipe(fileInclude({
    prefix: '@',
    basepath: '@file'
  }))
  .pipe(dest('./app'))
  .pipe(browsersync.stream());
};

const createSprite = () => {
  return src("./src/images/sprite/*.svg")
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename("sprite.svg"))
  .pipe(dest("./app/images"));
};

const css = () => {
  return src('./src/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', notify.onError()))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cleanCss({
    level: 2
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./app/css'))
  .pipe(browsersync.stream());
};

const imageToApp = () => {
  return src(['./src/images/**/*.jpg', './src/images/**/*.png', './src/images/**/*.jpeg', './src/images/*.svg'])
  .pipe(dest('./app/images'));
};

const copyFavicon = () => {
  return src('./src/favicon.ico')
  .pipe(dest('./app'));
}

const clean = () => {
  return del(['app/*']);
};

const scripts = () => {
  return src('./src/js/main.js')
  .pipe(webpackStream({
    output: {
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }))
  .pipe(sourcemaps.init())
  .pipe(uglify().on('error', notify.onError()))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./app/js'))
  .pipe(browsersync.stream());
};

const watchFiles = () => {
  browsersync.init({
    server: {
        baseDir: "./app"
    }
  });

  watch('./src/scss/**/*.scss', css);
  watch(['./src/index.html', './src/html/**.html'], htmlInclude);
  watch('./src/images/sprite/*.svg', createSprite);
  watch('./src/images/**/*.jpg', imageToApp);
  watch('./src/images/**/*.png', imageToApp);
  watch('./src/images/**/*.jpeg', imageToApp);
  watch('./src/images/*.svg', imageToApp);
  watch('./src/js/**/*.js', scripts);
};

exports.css = css;
exports.htmlInclude = htmlInclude;
exports.watchFiles = watchFiles;


exports.default = series(clean, parallel(htmlInclude, imageToApp, createSprite, scripts, copyFavicon), css, watchFiles);
