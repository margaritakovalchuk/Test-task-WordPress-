import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import autoPrefix from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import pug from 'gulp-pug';
import del from 'del';
import imgmin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import svgSprite from 'gulp-svg-sprite';

const path = {
    baseDir: './dist',
    css: {
        src: './src/sass',
        dist: './dist/css',
    },
    html: {
        src: './src/pug',
        dist: './dist',
    },
    img: {
        src: './src/img',
        dist: './dist/img',
    },
    js: {
        src: './src/js',
        dist: './dist/js',
    },
    fonts: {
        src: './src/fonts',
        dist: './dist/fonts',
    },
    libs: {
        global: {
            bootstrap4: {
                scss: './node_modules/bootstrap/scss/bootstrap.scss',
            }
        },
        local: {
            baseDir: './src/libs',
        },
    },
};

const sass = () => {
    return gulp
        .src([`${path.libs.global.bootstrap4.scss}`, `${path.libs.local.baseDir}/**/*.scss`, `${path.css.src}/**/*.scss`])
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoPrefix())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.css.dist))
        .pipe(cleanCSS())
        .pipe(rename({
            basename: 'main',
            suffix: '.min',
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.css.dist))
        .pipe(browserSync.stream());
};

const html = () => {
    return gulp
        .src(`${path.html.src}/*.pug`)
        .pipe(plumber())
        .pipe(pug({
            pretty: true,
            basedir: path.html.src,
        }))
        .pipe(gulp.dest(path.html.dist))
        .pipe(browserSync.stream());
};

const js = () => {
    return gulp.src([`${path.libs.local.baseDir}/**/*.js`, `${path.js.src}/**/*.js`])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.js.dist))
        .pipe(uglify())
        .pipe(rename({
            basename: 'main',
            suffix: '.min',
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.js.dist))
        .pipe(browserSync.stream());
};

const sync = () => {
    browserSync.init({
        server: {
            baseDir: path.baseDir,
        }
    });
    gulp.watch([`${path.libs.local.baseDir}/**/*.scss`, `${path.css.src}/**/*.scss`], gulp.series(sass));
    gulp.watch(`${path.html.src}/**/*.pug`, gulp.series(html));
    gulp.watch([`${path.libs.local.baseDir}/**/*.js`, `${path.js.src}/**/*.js`], gulp.series(js));
    gulp.watch(`${path.html.dist}/**/*.html`).on('change', browserSync.reload);
};

const images = () => {
    return gulp
        .src(`${path.img.src}/**/*.{png,jpg,gif,jpeg,webp}`)
        // .pipe(imgmin())
        .pipe(gulp.dest(path.img.dist));
};

const spriteSvg = () => {
    const config = {
        mode: {
            symbol: true,
        },
        shape: {
            transform: ['svgo'],
        },
        svg: {
            namespaceClassnames: true,
        },
    };

    return gulp
        .src(`${path.img.src}/**/*.svg`)
        .pipe(svgSprite(config))
        .pipe(rename({
            basename: 'sprite'
        }))
        .pipe(gulp.dest(path.img.dist));
};

const clean = () => {
    return del([
        path.css.dist,
        path.html.dist,
        path.js.dist,
    ]);
};

const fonts = () => {
    return gulp.src(`${path.fonts.src}/**/*.{woff,woff2}`)
        .pipe(gulp.dest(path.fonts.dist));
};

export default gulp.series(clean, images, spriteSvg, fonts, gulp.parallel(sass, js, html), sync);
