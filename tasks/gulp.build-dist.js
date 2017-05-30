const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = (config) => {
    gulp.task('build-dist', (cb) => {
        config.buildTasksDist.push(cb);
        runSequence.apply(
            null,
            config.buildTasksDev
        );
    });
};
