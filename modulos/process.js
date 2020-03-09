process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
});

process.on("exit", () => {
    console.log("Diego, el proceso acabó");
    setTimeout(() => {
        console.log("Esto no se va ver nunca");
    }, 0);
});

setTimeout(() => {
    console.log("Esto SÍ se va ver nunca");
}, 0);

// si hay algún que no esté controlado con try catch, la siguiente función se encarga de dicha tarea
process.on("uncaughtException", (err, origen) => {
    console.log("Vaya, se nos olvidó capturar los errores");
    console.log(err.message);
});

