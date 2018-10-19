var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html");
//----------压缩HTML文件--------------//
gulp.task('minify-html', function () {
    gulp.src('static/*.html') // 要压缩的html文件
        .pipe(minifyHtml()) //压缩
        .pipe(gulp.dest('dist/html'));
});
//----------压缩css文件--------------//
var minifyCss = require("gulp-minify-css");
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
        .pipe(minifyCss()) //压缩css
        .pipe(gulp.dest('dist/css'));
});
//----------压缩js文件--------------//
uglify = require("gulp-uglify");
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist/js')); //压缩后的路径
});
//----------压缩图片文件--------------//
var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant'); //png图片压缩插件

gulp.task('minify-img', function () {
    return gulp.src('img/*.{jpg,png,gif}')
        .pipe(imagemin({
            progressive: true,
            // use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist'));
});
//----------文件合并--------------//
    var concat = require("gulp-concat");

gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('dist/js'));
});
//----------监听文件--------------//
gulp.task('watch',function(){

});
gulp.watch('css/*.css',['watch']);
gulp.watch('js/*.js',['watch']);
gulp.watch('img/*.*',['watch']);
gulp.watch('*.html',['watch']);

