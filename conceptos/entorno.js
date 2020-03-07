let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.MI_WEB || 'No tengo web';
 
console.log(`Hola ${nombre}`);
console.log(`Mi web es ${web}`);

console.log('otra cosa...!!!');

// la variable global se definiría de la siguiente manera
// NOMBRE="DiegoCamino" node entorno.js