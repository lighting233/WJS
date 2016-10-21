
var gulp = require('gulp');


var htmlmin = require('gulp-htmlmin');

gulp.task('html',function () {
	gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less',function () {
	gulp.src('src/styles/*.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var uglify = require('gulp-uglify');

gulp.task('script',function () {
	gulp.src('src/scripts/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('image',function () {
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.reload({
			stream: true
		}));
	gulp.src('src/font/.*')
		.pipe(gulp.dest('dist/font'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var browserSync = require('browser-sync');

// Static server
gulp.task('serve',function () {
	browserSync({
		server: {
			baseDir: ['dist'],
            routes: {
                "/bower_components": "bower_components"
            }
		}
	}, function(err, bs) {
		console.log(bs.options.getIn(["urls", "local"]));
	});

	gulp.watch('src/*.html',['html']);
	gulp.watch('src/styles/*.less',['less']);
	gulp.watch('src/scripts/*.js',['script']);
	gulp.watch('src/images/*.*',['image']);
});