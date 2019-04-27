const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const purgecss = require("gulp-purgecss");

const PATHS = {
  css: "./src/styles.css",
  confing: "./tailwind.js",
  dist: "./"
};

gulp.task("css", () => {
  return gulp
    .src(PATHS.css)
    .pipe(postcss([tailwindcss(PATHS.config), require("autoprefixer")]))
    .pipe(
        purgecss({
          content: [PATHS.dist + "*.html"]
        })
      )
    .pipe(gulp.dest(PATHS.dist));
});

