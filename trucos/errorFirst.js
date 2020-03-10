function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err; // Lanzar una excepcion con Throw dentro de un callback asincrono no va a funcionar… Solo nos va a funcionar en n bloque de codigo sincrono
    }

    console.log('todo ha ido bien, mi data es', dato);
})