const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dev', (cb) => {
        runSequence(
            'clean',
            'compile-ts',
            'scripts-dev',
            cb
        );
    });
};
