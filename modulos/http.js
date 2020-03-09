const http = require("http");

http.createServer(function(req, res) {
    console.log("Nueva petición!");
    console.log(req.url);

    switch(req.url) {
        case "/hola":
            res.write("Hola! que tal?");
            res.end();
            break;
        default:
            res.write("Error 404: No sé lo que quieres");
            res.end();
    }
    // res.writeHead(201, { "Content-type": "text/plain" });
    // res.write("Hola Diego! vamos por buen camino con HTTP de NodeJS");
    // res.end();
}).listen(3000);

console.log("Escuchando en el puerto 3000");