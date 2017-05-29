const gulp = require('gulp');
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('watch', () => {
        return watch(config.filesToWatch, () => {
            runSequence(
                [
                    'tslint',                
                    'build-dev'
                ],
                'unit-tests'
            );
        });
    });
};
