const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dev', (cb) => {
        config.buildTasksDev.push(cb);
        runSequence.apply(
            null,
            config.buildTasksDev
        );
    });
};
