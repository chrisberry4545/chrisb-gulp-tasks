const gulp = require('gulp');
const tslint = require('gulp-tslint');

module.exports = (config, emitError) => {
    return gulp.src(config.filesToBuild)
        .pipe(tslint({
            formatter: 'verbose',
        }))
        .pipe(tslint.report({
            emitError: emitError
        }));
};
