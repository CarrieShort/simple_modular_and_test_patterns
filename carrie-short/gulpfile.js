const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
debugger;

var files = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];


gulp.task('lint:test',()=>{
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: {
        'indent': ['error', 2],
      },
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:nontest', () => {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'indent': ['error', 2]
      },
      envs: [
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('test', ()=>{
  return gulp.src('./test/**/*test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha());
});

gulp.task('rerun',function () {
  gulp.watch(['**/*'],['lint']);
});

gulp.task('lint', ['lint:nontest', 'lint:test','test']);
gulp.task('default', ['rerun']);
