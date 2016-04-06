const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');
debugger;

var files = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];
var gulpFiles = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js', 'test/**/*.js','package.json'];

gulp.task('lint:test',()=>{
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: {
        'semi': [2, 'always'],
        'strict': 0,
        'indent': [2, 2],
        'quotes': [1, 'single'],
        'no-multi-spaces': [1, {
          'exceptions': {
            'VariableDeclarator': true,
            'FunctionExpression': true
          }
        }],
        'key-spacing': [0, {'align': 'value'}],
        'no-underscore-dangle': 0
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
        'semi': [2, 'always'],
        'strict': 0,
        'indent': [2, 2],
        'quotes': [1, 'single'],
        'no-multi-spaces': [1, {
          'exceptions': {
            'VariableDeclarator': true,
            'FunctionExpression': true
          }
        }],
        'key-spacing': [0, {'align': 'value'}],
        'no-underscore-dangle': 0
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
  gulp.watch(gulpFiles,['lint']);
});

gulp.task('lint', ['lint:nontest', 'lint:test','test']);
gulp.task('default', ['rerun']);
