const fs = require('fs');

const tasksDir = 'tasks';

module.exports = (config) => {
    fs.readdirSync(__dirname + '/' + tasksDir).forEach(file => {
        if (
            file.indexOf('gulp') > -1 &&
            file != 'gulp.all.js' &&
            file != 'shared'
        ) {
            require('./' + tasksDir + '/' + file)(config);
        }
    });
};
