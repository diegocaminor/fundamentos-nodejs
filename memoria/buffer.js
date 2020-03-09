// let buffer = Buffer.alloc(1);
// let buffer2 = Buffer.from([1, 2, 3]);
let buffer3 = Buffer.from("Diego");

// Buffer nos permite trabajar con el dato en la versión más cruda que podamos tener
// Un Buffer suele ser algo que sale desde un "stream"
// console.log(buffer); // <Buffer 00>
// console.log(buffer2); // <Buffer 01 02 03>
// console.log(buffer3); // <Buffer 44 69 65 67 6f>
// console.log(buffer3.toString()); // Diego

let abc = Buffer.alloc(26);
console.log(abc); // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

for(let i=0; i<26; i++) {
    abc[i] = i + 97;
}
console.log(abc); // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
console.log(abc.toString()); // abcdefghijklmnopqrstuvwxyz
