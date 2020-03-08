const { exec, spawn } = require("child_process"); // esto es equivalente a escribir const exec = require("child_process").exec;

// exec("node modulos/consola.js", (err, stdout, sterr) => {
//     if(err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// });

// spawn nos va permitir invocar un proceso nuevo de nodejs
let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function(dato) {
    console.log("El proceso está muerto?");
    console.log(proceso.killed);
    console.log(dato.toString());
})

proceso.on("exit", function() {
    console.log("Se terminó el proceso!");
    console.log("El proceso está muerto?");
    console.log(proceso.killed);
})