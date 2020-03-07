function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Bla bla bla bla bla bla...");
            resolve(nombre);
            // reject("ERROR A LA VISTA");
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}

// --
console.log("Iniciando el proceso");
hola("Diego")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("Fin proceso");
    })
    .catch(error => {
        console.error("Ooops, hubo un error");
        console.log(error);
    });