function hola(nombre, next) {
    setTimeout(() => {
        console.log("Hola " + nombre);
        next(nombre);
    }, 1500);
}

function adios(nombre, next) {
    setTimeout(() => {
        console.log("Adios " + nombre);
        next();
    }, 1000);
}

console.log("Iniciando proceso");
hola("Diego", function(nombre) {
    adios(nombre, function() {
        console.log("Terminando proceso");
    });
});