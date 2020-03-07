async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Bla bla bla bla bla bla...");
            resolve();
            // reject("ERROR A LA VISTA");
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    });
}


async function main() {
    let nombre = await hola("Diego");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

main();