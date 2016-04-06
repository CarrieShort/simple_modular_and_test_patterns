const gulp = require('gulp');
const eslint = require('gulp-eslint');
debugger;

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
