const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js'];
var gulpFiles = ['index.js', 'lib/**/*.js', 'bin/*', 'gulpfile.js', 'test/**/*.js','package.json'];
var lintRules = {
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
};

gulp.task('lint:test',()=>{
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: lintRules,
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
      rules: lintRules,
      envs: [
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('test', ()=>{
  return gulp.src('./test/**/*test.js')
		.pipe(mocha());
});

gulp.task('allTests', ['lint:nontest', 'lint:test','test']);
gulp.task('default', ['allTests']);
gulp.watch(gulpFiles,['allTests']);
