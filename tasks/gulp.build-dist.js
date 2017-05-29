const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dist', (cb) => {
        runSequence(
            'clean',
            'compile-ts',
            'scripts-dist',
            cb
        );
    });
};
