const
	gulp = require('gulp'),
	mason = require('gulp-mason'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

gulp.task('compile', () => pipeMason(gulp.src(src)))
gulp.task('watch', () => pipeMason(srcWatch(src)))

// See http://mason-lang.org/options
const masonOptions = {
	includeAmdefine: true,
	mslPath: 'msl/dist'
}

const src = 'src/**/*.ms'

function pipeMason(stream) {
	return stream
	.pipe(sourcemaps.init())
	.pipe(mason(masonOptions))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('lib'))
}

function srcWatch(glob) {
	return gulp.src(glob).pipe(watch(glob, {verbose: true})).pipe(plumber())
}
