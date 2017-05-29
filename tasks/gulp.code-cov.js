const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const istanbul = require('gulp-istanbul');
const codecov = require('gulp-codecov');

module.exports = (config) => {
    gulp.task('pre-code-cov', () => {
        return gulp.src(config.dir.src + '/**/*.js')
            .pipe(istanbul())
            .pipe(istanbul.hookRequire());
    });

    gulp.task('code-cov', ['pre-code-cov'], () => {
        return gulp.src(config.dir.test +'/**/*.spec.js')
            .pipe(jasmine())
            .pipe(istanbul.writeReports({
                dir: config.dir.coverageOutput
            }));
    });
};
