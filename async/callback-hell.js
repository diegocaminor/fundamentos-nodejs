function hola(nombre, next) {
    setTimeout(() => {
        console.log("Hola " + nombre);
        next(nombre);
    }, 1500);
}

function hablar(next) {
    setTimeout(() => {
        console.log("Bla bla bla bla bla bla...");
        next();
    }, 1000);
}

function adios(nombre, next) {
    setTimeout(() => {
        console.log("Adios " + nombre);
        next();
    }, 1000);
}

// --

// console.log("Iniciando proceso");
// hola("Diego del futuro", function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function() {
//                     console.log("Terminando proceso");
//                 });
//             });
//         });
//     });
// });

//////

function conversacion(nombre, veces, next) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, next);
        });
    } else {
        adios(nombre, next);
    }
}

hola("DiegoCamino", function(nombre) {
    conversacion(nombre, 3, function() {
        console.log("Proceso terminado");
    });
});