const gulp = require('gulp');
const ts = require('gulp-typescript');

module.exports = (config) => {
    gulp.task('compile-ts', () => {
        return gulp.src(config.filesToBuild)
            .pipe(ts.createProject(config.tsConfig)())
            .pipe(gulp.dest(config.dir.build));
    });
};
