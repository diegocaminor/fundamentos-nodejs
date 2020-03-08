console.time("Cronometrando programa");

console.log("Algo");
console.info("Algo");
console.error("Algo");
console.warn("Algo");

var tabla = [
    {
        nombre: "Diego",
        apellido: "Camino"
    },
    {
        nombre: "Sasha",
        apellido: "Solomon"
    }
]

console.log(tabla);
console.table(tabla);

console.group("Conversación:");
console.log("Hola");
console.log("Bla bla bla");
console.log("Adios");
console.groupEnd("Conversación:");
console.log("Un línea que no tiene nada que ver con la conversación");

// contador
console.count("veces");
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
console.count("veces");

console.timeEnd("Cronometrando programa");

// Con console podemos imprimir todo tipo de valores por
// nuestra terminal.

// console.log: recibe cualquier tipo y lo muestra en el consola.
// console.info: es equivalente a log pero es usado para informar.
// console.error: es equivalente a log pero es usado para errores.
// console.warn: es equivalente a log pero es usado para warning.
// console.table: muestra una tabla a partir de un objeto.
// console.count: inicia un contador autoincremental.
// console.countReset: reinicia el contador a 0.
// console.time: inicia un cronometro en ms.
// console.timeEnd: Finaliza el cronometro.
// console.group: permite agrupar errores mediante identación.
// console.groupEnd: finaliza la agrupación.
// console.clear: Limpia la consola.