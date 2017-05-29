const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

module.exports = (config) => {
    gulp.task('unit-tests', () => {
        return gulp.src(config.dir.test + '/**/*.spec.js')
            .pipe(jasmine());
    });
};
