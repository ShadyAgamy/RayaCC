var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

//Copy All HTML Files
gulp.task('copyHTML', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
})

//Optimize Images
gulp.task('imagemin', () =>
    gulp.src('src/img/**/*.+(png|jpg|gif|svg|ico)')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 6}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(gulp.dest('build/img'))
);

gulp.task('css', function () {
    return gulp.src('src/sass/main.scss')
        
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError)
        )
        .pipe(prefix("last 5 version"))
        
        .pipe(gulp.dest('build/css'))
        .pipe(rtlcss()) // Convert to RTL.
        .pipe(sourcemaps.init())
        .pipe(rename({ suffix: '-rtl'})) // Append "-rtl" to the filename.
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css')) // Output RTL stylesheets.
});


gulp.task('scripts', function() {
    return gulp.src("src/js/*.js")
        .pipe(concat('script.js'))
        .pipe(gulp.dest('build/js'))
      
      
});



gulp.task('default', ["copyHTML", "css", "imagemin", "scripts"]);

gulp.task('watch', function() {
    gulp.watch('src/*.html', ['copyHTML']);
    gulp.watch('src/images/**/*.+(png|jpg|gif|svg|ico)', ['imagemin']);
    gulp.watch('src/sass/**/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['scripts']);

})

// gulp.watch('src/images/**/*', ['images']);
