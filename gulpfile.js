//se impota gulpo
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// se crea la funcion
function css() {
    return gulp
    /// es la direccion para correr la funcion de css
    // los demas al tenet el gion bajo se agregan al app.scss
        .src('scss/app.scss')
    // se agregan los pipes el primero agrega el autoprefixer
        .pipe(autoprefixer() )
    // cual es la salida de sass        
        .pipe(sass({ outputStyle: "expanded" }))
    // donde se almacenan
        .pipe(gulp.dest("css"))
}

//Esta parte revisa el cambio y ejecutar esta funcion
//para actualizar  los cambios
function watchFiles() {
    // carpeta contenedora, lugar de destino
    // *.scss este es el comodin que hace que se escuchen todos lso que tengan esa extencion
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}

// tareas
gulp.task('css', css);
// paralel ejecuta de forma paralela las acciones en watch
gulp.task("watch", gulp.parallel(watchFiles));