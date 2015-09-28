var gulp = require('gulp');
//var server = require('./server');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');

gulp.task('start', ['watch'], function () {
  nodemon({
  script: 'server.js', ext: 'js html', env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('index', function () {
  livereload.reload('./index.html');
});

gulp.task('server', function () {
  livereload.reload('./server.js');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./css/*.css', ['index']);
  gulp.watch('./*.html', ['index']);
  gulp.watch('./js/*.js', ['index']);
});
