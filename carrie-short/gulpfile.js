const gulp = require('gulp');
const eslint = require('gulp-eslint');
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
