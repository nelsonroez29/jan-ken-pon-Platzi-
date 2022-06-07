/* Segun el Video de Diago, el juego que la logica que él sugierer es

1. Hay que llamar una funcion y pasarle el parametro que es nuestra eleccion en el juego, la variable

2. Son 3 Variebles "Piedra, Papel o Tijera"

3. Tanto nosotros como la Maquina tendran su opcion.

4. La Funcion hara una validacion, para saber quien es el ganador

*/

// Zona de Trabajo

function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    resultado = opcionU === opcionMac ? console.log(`Es un empate, ambos eligieron ${opcion}`) : opcionU != 0 ? resultado = opcionU === 1 && opcionMac === 3 ? resultado = opcionU<opcionMac ? "El Ganador User" : "El Ganador Machine" : opcionU === 3 && opcionMac === 1 ? resultado = opcionU<opcionMac ? "El Ganador User" : "El Ganador Machine" : resultado = opcionU>opcionMac ? "El Ganador User" : "El Ganador Machine" : console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");
    return resultado;
}


/*Flujo Logico


1, 2, 3,


1. Piedra gana Tijera

2. Tijera gana a Papel

3. Papel Gana a Piedra

4. Si son iguales empate


secuencia: Piedra->Tijera->Papel=>Piedra

prueba: Piedra(3)>Tijera(2)>Papel(1)<Piedra(3)

entonces

1. Piedra gana Tijera (3>2) = true

2. Tijera gana a Papel (2>1) = true

3. Papel Gana a Piedra (1<3) = true jeje como el golfito, el menor gana

4. Si son iguales empate (n===n) = true

*/





/* Pruebas

function prueba (p){
    p = String(p)
    console.log(typeof(p))
}



prueba = function(p){

    console.log(typeof(p))
}

*/
/* Version no funciona piedra y papel

function verificar (PPT,opcionMac){
    resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine" 
    return resultado
}

function gameofPPT (opcion) {
    var opcionMac = 2;

    if (opcion === "Piedra" ) {
        piedra = 3;
        resultado=verificar(piedra,opcionMac);
        console.log("Si, es Piedra");
        console.log(resultado)


    }else if (opcion === "Tijera" ) {
        tijera = 2;
        resultado=verificar(tijera,opcionMac);
        console.log("Si, es Tijera");
        console.log(resultado)

    }else if (opcion === "Papel" ) {
        papel = 1;
        resultado=verificar(papel,opcionMac);
        console.log("Si, es papel");
        console.log(resultado)

    }else{
        console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");
    }
}*/





// Version 1 

function verificar (PPT,opcionMac){

    if (PPT === 1 && opcionMac === 3) {
        resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine";
        return resultado;

    }else if (PPT === 3 && opcionMac === 1) {
        resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine";
        return resultado;

    }else{
        resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine";
        return resultado;

    }
}

function empate (opcion){
    resultado = `Es un empate, ambos eligieron ${opcion}`;
    return resultado;
}

function gameofPPT (opcion) {
    var opcionMac = 1;

    if (opcion === "Piedra") {
        piedra = 3;
        if (piedra===opcionMac) {            
            resultado=empate(opcion);
            console.log(resultado); 

        }else{
            resultado=verificar(piedra,opcionMac);
            console.log("Si, es Piedra");
            console.log(resultado);

        }


    }else if (opcion === "Tijera" ) {
        tijera = 2;
        if (tijera===opcionMac) {            
            resultado=empate(opcion);
            console.log(resultado); 

        }else{
            resultado=verificar(tijera,opcionMac);
            console.log("Si, es Tijera");
            console.log(resultado);

        }

    }else if (opcion === "Papel" ) {
        papel = 1;

        if (papel===opcionMac) {            
            resultado=empate(opcion);
            console.log(resultado); 

        }else{
            resultado=verificar(papel,opcionMac);
            console.log("Si, es papel");
            console.log(resultado);

        }

    }else{
        console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");
    }
}

// Version 2 Comprimida 01

function verificar (PPT,opcionMac, opcion){

    if (PPT === 1 && opcionMac === 3) {
        resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine";
        console.log(`Si, es ${opcion}`);
        console.log(resultado);
        return resultado;

    }else if (PPT === 3 && opcionMac === 1) {
        resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine";
        console.log(`Si, es ${opcion}`);
        console.log(resultado);
        return resultado;

    }else{
        resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine";
        console.log(`Si, es ${opcion}`);
        console.log(resultado);
        return resultado;

    }
    
}

function empate (opcion){
    resultado = `Es un empate, ambos eligieron ${opcion}`;
    return resultado;
}

function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    if (opcionU === opcionMac) {            
        resultado=empate(opcion);
        console.log(resultado); 

    }else if (opcionU != 0) {
        resultado=verificar(opcionU,opcionMac, opcion);

    }else{
        console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");

    }
}


// Version 3 Comprimida 02

function verificar (PPT,opcionMac, opcion){

    resultado = PPT === 1 && opcionMac === 3 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : PPT === 3 && opcionMac === 1 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine";
    console.log(`Si, es ${opcion}`);
    console.log(resultado);
    return resultado;
    
}

function empate (opcion){
    resultado = `Es un empate, ambos eligieron ${opcion}`;
    return resultado;
}

function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    if (opcionU === opcionMac) {            
        resultado=empate(opcion);
        console.log(resultado); 

    }else if (opcionU != 0) {
        resultado=verificar(opcionU,opcionMac, opcion);

    }else{
        console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");

    }
}

// Version 4 Comprimirda 03


function verificar (PPT,opcionMac, opcion){

    resultado = PPT === 1 && opcionMac === 3 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : PPT === 3 && opcionMac === 1 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine";
    console.log(`Si, es ${opcion}`);
    console.log(resultado);
    return resultado;
    
}


function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    if (opcionU === opcionMac) {            
        resultado = `Es un empate, ambos eligieron ${opcion}`;
        console.log(resultado); 

    }else if (opcionU != 0) {
        resultado=verificar(opcionU,opcionMac, opcion);

    }else{
        console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");

    }
}

//Version 05 Comprimida 04

function verificar (PPT,opcionMac, opcion){

    resultado = PPT === 1 && opcionMac === 3 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : PPT === 3 && opcionMac === 1 ? resultado = PPT<opcionMac ? "El Ganador User" : "El Ganador Machine" : resultado = PPT>opcionMac ? "El Ganador User" : "El Ganador Machine";
    console.log(`Si, es ${opcion}`);
    console.log(resultado);
    return resultado;
    
}


function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    resultado = opcionU === opcionMac ? console.log(`Es un empate, ambos eligieron ${opcion}`) : opcionU != 0 ? resultado=verificar(opcionU,opcionMac, opcion) : console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");

}


// Version 06 Comprimida 05


function gameofPPT (opcion) {
    var opcionMac = 1;

    opcionU = opcion === "Piedra" ? 3 : opcion === "Tijera" ? 2 : opcion === "Papel" ? 1 : 0;

    resultado = opcionU === opcionMac ? console.log(`Es un empate, ambos eligieron ${opcion}`) : opcionU != 0 ? resultado = opcionU === 1 && opcionMac === 3 ? resultado = opcionU<opcionMac ? "El Ganador User" : "El Ganador Machine" : opcionU === 3 && opcionMac === 1 ? resultado = opcionU<opcionMac ? "El Ganador User" : "El Ganador Machine" : resultado = opcionU>opcionMac ? "El Ganador User" : "El Ganador Machine" : console.log("Por favor, intena escribir la Primera Letra Mayuscula y el resto en minuscula");
    return resultado;
}