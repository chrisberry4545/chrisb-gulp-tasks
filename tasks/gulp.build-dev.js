const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dev', (cb) => {
        runSequence.apply(
            null,
            [].concat(config.buildTasksDev, cb)
        );
    });
};
