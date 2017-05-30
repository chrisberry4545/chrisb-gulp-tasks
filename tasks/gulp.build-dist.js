const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dist', (cb) => {
        runSequence.apply(
            null,
            [].concat(config.buildTasksDist, cb)
        );
    });
};
