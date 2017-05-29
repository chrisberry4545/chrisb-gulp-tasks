const gulp = require('gulp');
const codecov = require('gulp-codecov');

module.exports = (config) => {
    gulp.task('code-cov-upload', ['code-cov'], () => {
        gulp.src(config.dir.coverageOutput + '/lcov.info')
            .pipe(codecov());
    });
};
