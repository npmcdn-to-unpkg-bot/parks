var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', shell.task([
    "tsc && concurrently \"tsc -w\" \"lite-server\" "
]));
