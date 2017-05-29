const gulp = require('gulp');
const clean = require('gulp-clean');

module.exports = (config) => {
    gulp.task('clean', () => {
        return gulp.src(config.dir.build + '/*', {
            read: false,
        }).pipe(clean());
    });
};
