const gulp = require('gulp');
const terser = require('gulp-terser');
const eslint = require('gulp-eslint');

gulp.task('build', function () {
    return gulp.src('./src/**/*.js') // путь к папке со скриптами
        .pipe(eslint.format())
        .pipe(eslint())
        .pipe(terser())
        .pipe(gulp.dest('./build/'));
});