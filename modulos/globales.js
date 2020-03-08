// Dentro de globales también tenemos todo el sistema de módulos mediante require()
console.log(process);

let i = 0;
let intervalo = setInterval(function () {
    console.log("Hola");
    if(i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

//Hace que se ejecute de forma asíncrona en cuanto pueda
setImmediate(function() {
    console.log("Set immediate!!");
    console.log(__dirname);
    console.log(__filename);
    global.miVariable = "el valor";
    console.log(miVariable);
});