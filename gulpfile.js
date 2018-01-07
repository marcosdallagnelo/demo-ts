const gulp = require('gulp');
const ts = require('gulp-typescript');
const jasmine = require('gulp-jasmine');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

gulp.task('build', function() {
    const tsProject = ts.createProject('tsconfig.json');

    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(tsProject.config.compilerOptions.outDir));
});

gulp.task('clean', function () {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/*.ts', ['default']);
});

gulp.task('test:run', function() {
    return gulp.src('dist/**/*.spec.js')
        .pipe(jasmine({
            reporter: new SpecReporter({
                spec: {
                  displayPending: true
                }
              })
        }));
});

gulp.task('test', [], function(cb) {
    runSequence('clean', 'build', 'test:run', 'clean', cb);
});

gulp.task('default', [], function(cb) {
    runSequence('clean', 'build', cb);
});