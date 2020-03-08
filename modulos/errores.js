function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch(err) {
            console.error("Se capturó error en función asincrona");
            cb(err);
        }
    }, 100);
}

try {
    // otraFuncion()
    seRompeAsincrona(function(err) {
        console.log("Hay error! ");
        console.log(err.message);
    });
} catch(err) {
    console.error("Algo se ha roto: ");
    console.log(err);
}

console.log("esto debe continuar");