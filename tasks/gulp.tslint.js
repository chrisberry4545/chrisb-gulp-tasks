const gulp = require('gulp');
const baseLintProcess = require('./shared/base-lint-process');

module.exports = (config) => {
    gulp.task('tslint', () => {
        return baseLintProcess(config, false);
    });
};
