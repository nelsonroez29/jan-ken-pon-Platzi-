
/*
 PRUEBAS

&& Machine === "Piedra" || Machine === "Tijera" || Machine === "Papel"

Usuario === "Piedra" && Machine === "Piedra"  || Usuario === "Tijera" && Machine === "Tijera" || Usuario === "Papel" && Machine === "Papel"

function prueba (num1, num2){


    switch (num1) {

        case num1===num2:
            console.log("empate")
    
        default:
            console.log('default');  

    }


} */

// num1 === 3 LOS CASOS DEL switch no acepta esta expresion o similares, SOLO RESULTADO


//logica

        // Usuario mayor

        // 3>1 Piedra Papel         | 31 | 3 | 4

        // 3>2 Piedra Tijera        | 32 | 6 | 5

        // 2>1 Tijera Papel         | 21 | 2 | 3




        // Usuario menor


        // 1<2 papel tijera         | 12 | 2 | 3

        // 1<3 papel piedra         | 13 | 3 | 4

        // 2<3 tijeras piedra       | 23 | 6 | 5


        // empate


        // 3<3 Piedra Piedra        | 33 | 9 | 6

        // 2<2 Tijera Tijera        | 22 | 4 | 4

        // 1<1 Papel  Papel         | 11 | 2 | 2

///--------------------------------------------------------------------


        // Gana usuario


        // 3>2 Piedra Tijera        | 32 | 6 | 5

        // 2>1 Tijera Papel         | 21 | 2 | 3

        // 1<3 papel piedra         | 13 | 3 | 4



        // Gana Machine


        // 2<3 tijeras piedra       | 23 | 6 | 5

        // 1<2 papel tijera         | 12 | 2 | 3

        // 3>1 Piedra Papel         | 31 | 3 | 4


//---------------Secuencia Numerica-----------------

        // Gana Usuario

        // 32, 21, 13  | 13, 21, 32 |

        // resultado === 13 || resultado === 21 || resultado === 32
        
        // 13 >= resultado <= 21 || resultado === 32





// Version 1 Empleando varios Switchs

function verificar(opcionU, opcionMac){

    switch (opcionU===opcionMac) {

        case true:
            console.log("Es un empate")
            break;

        default:
            switch(opcionU<opcionMac){

                case true:
                    switch(opcionU){
                        case 2:
                            console.log("Gana Machine")
                            break;
                        default:
                            switch(opcionMac){
                                case 3:
                                    console.log("Gana Usuario")
                                    break;

                                default:
                                    console.log("Gana Machine")

                            }

                    }
                    break;

                default:
                    switch(opcionMac){
                        case 2:
                            console.log("Gana Usuario")
                            break;

                        default:
                            switch(opcionU){
                                case 3:
                                    console.log("Gana Machine")
                                    break;

                                default:
                                    console.log("Gana Usuario")
                            }

                    }

            }



    }


}


function gameofPPT (opcion) {

    var opcionMac = 2;


    switch (opcion) {

        case "Piedra":
            opcionU = 3;
            console.log("Soy una Piedra");
            resultado = verificar(opcionU, opcionMac);
            //console.log(resultado);
            break;

        case "Tijera":
            opcionU = 2;
            console.log("Soy una Tijera");
            resultado = verificar(opcionU, opcionMac)
            //console.log(resultado);
            break;

        case "Papel":
            opcionU = 1;
            console.log("Soy un Papel");
            resultado = verificar(opcionU, opcionMac)
            //console.log(resultado);
            break;
    
        default:
            console.log('Escribe entre las 3 opciones: "Piedra", "Papel" o "Tijera" ');

    }
}



// Version 2 Empleando 1 Switch

function verificar(opcionU, opcionMac){

    resultado = opcionU+opcionMac;

    switch (resultado) {

        case "32":
            console.log("Gana Usuario");
            break;

        case "21":
            console.log("Gana Usuario");
            break;

        case "13":
            console.log("Gana Usuario");
            break;

        case "23":
            console.log("Gana Machine");
            break;

        case "12":
            console.log("Gana Machine");
            break;

        case "31":
            console.log("Gana Machine");
            break;
    

        default:
            console.log("Es un empate");
    }


}


function gameofPPT (opcion) {

    var opcionMac = "2";


    switch (opcion) {

        case "Piedra":
            opcionU = 3;
            console.log("Soy una Piedra");
            resultado = verificar(opcionU, opcionMac);
            //console.log(resultado);
            break;

        case "Tijera":
            opcionU = 2;
            console.log("Soy una Tijera");
            resultado = verificar(opcionU, opcionMac)
            //console.log(resultado);
            break;

        case "Papel":
            opcionU = 1;
            console.log("Soy un Papel");
            resultado = verificar(opcionU, opcionMac)
            //console.log(resultado);
            break;
    
        default:
            console.log('Escribe entre las 3 opciones: "Piedra", "Papel" o "Tijera" ');

    }
}


// Version 3 Comprimida 01


function verificar(opcionU, opcionMac){

    suma = opcionU+opcionMac;

    switch (suma === "11" || suma === "22" || suma === "33") {

        case true:
            console.log("Es un Empate");
            break;

        default:

            switch (suma === "13" || suma === "21" || suma === "32") {

                case true:
                    console.log("Gana Usuario");
                    break;

                default:
                    
                    console.log("Gana Machine");

            }
    }

}


function gameofPPT (opcion) {

    var opcionMac = "1";


    switch (opcion) {

        case "Piedra":
            opcionU = 3;
            verificar(opcionU, opcionMac);

            break;

        case "Tijera":
            opcionU = 2;
            verificar(opcionU, opcionMac)
            break;

        case "Papel":
            opcionU = 1;
            verificar(opcionU, opcionMac)
            break;
    
        default:
            console.log('Escribe entre las 3 opciones: "Piedra", "Papel" o "Tijera" ');

    }
}



// Version 4 Comprimida 02 y retorno de resultado



function verificar(opcionU, opcionMac){

    suma = opcionU+opcionMac;

    switch (opcionU == opcionMac) {

        case true:
            resultado = "Es un Empate";
            break;

        default:

            switch ( suma === "21" || suma === "13" || suma === "32" ) {

                case true:
                    resultado = "Gana Usuario";
                    break;

                default:
                    resultado = "Gana Machine";

            }
    }
    return resultado;
}


function gameofPPT (opcion) {

    var opcionMac = "1";


    switch (opcion) {

        case "Piedra":
            opcionU = 3;
            verificar(opcionU, opcionMac);
            break;

        case "Tijera":
            opcionU = 2;
            verificar(opcionU, opcionMac)
            break;

        case "Papel":
            opcionU = 1;
            verificar(opcionU, opcionMac)
            break;
    
        default:
            console.log('Escribe entre las 3 opciones: "Piedra", "Papel" o "Tijera" ');

    }
    return resultado;
}


// Version 05 Comprimida 03 Aplicando Criterios anteriores


function verificar(opcionU, opcionMac){
    suma = opcionU+opcionMac;

    switch (opcionU == opcionMac) {
        case true:
            resultado = "Es un Empate";
            break;

        default:

            switch ( suma === "21" || suma === "13" || suma === "32" ) {
                case true:
                    resultado = "Gana Usuario";
                    break;

                default:
                    resultado = "Gana Machine";

            }
    }
    return resultado;
}


function gameofPPT (Usuario, Machine) {

    opcionU = Usuario === "Piedra" ? 3 : Usuario === "Tijera" ? 2 : Usuario === "Papel" ? 1 : 0;
    opcionMac = Machine === "Piedra" ? "3" : Machine === "Tijera" ? "2" : Machine === "Papel" ? "1" : 0;

    switch ((Usuario === "Piedra" || Usuario === "Tijera" || Usuario === "Papel") && (Machine === "Piedra" || Machine === "Tijera" || Machine === "Papel")) {
        case true:
            verificar(opcionU, opcionMac);
            var valido = 1;
            break;

        default:
            console.log('Escribe entre las 3 opciones: "Piedra", "Papel" o "Tijera" ');

    }
    return resultado = valido === 1 ? resultado : "Volver a Intentar";
}






