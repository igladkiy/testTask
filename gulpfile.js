const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

const scssFiles = [
    './src/scss/main.scss', 
    './src/scss/media.scss' 
]

const cssFiles = [
    './src/css/main.css', 
    './src/css/media.css'
];

const jsFiles = [
    './src/js/lib.js', 
    './src/js/main.js'
];
const jsFilesEcma6 = [
    './src/jsECMA6/lib.js', 
    './src/jsECMA6/main.js'
];

function scssCompile(){
    return gulp.src(scssFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
};

function styles(){
    return gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserlist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))

    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());

};
function changeJsCode(){
    return gulp.src(jsFilesEcma6)
    .pipe(babel({
        "presets": ["@babel/preset-env"]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/js'))
}

function scripts(){
    return gulp.src(jsFiles)
    .pipe(concat('script.js'))
    .pipe(uglify({
        mangle: {toplevel: true}
    }))

    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
};

function clean(){
    return del(['build/*'])
};

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/jsECMA6/**/*.js', changeJsCode)
    gulp.watch('./src/scss/**/*.scss', scssCompile)
    gulp.watch('./src/css/**/*.css', styles)
    gulp.watch('./src/js/**/*.js', scripts)
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('sass-compile', scssCompile);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('babel', changeJsCode);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(changeJsCode, scssCompile), gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));