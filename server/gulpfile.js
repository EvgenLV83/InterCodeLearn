const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function styles() {
  return gulp.src([
    '../client/css/reset.css',
    '../client/css/base.css',
    '../client/css/header.css',
    '../client/css/hero.css',
    '../client/css/courses.css',
    '../client/css/cards.css',
    '../client/css/card1.css',
    '../client/css/info.css',
    '../client/css/code.css',
    '../client/css/footer.css',
    '../client/css/responsive.css'
  ])
  .pipe(concat('combined.css'))
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(gulp.dest('css/dist'));
}

exports.default = styles;