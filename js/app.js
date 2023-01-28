function interes_cuotas( monto , cuotas ){ // calculara el interes de la cuota.


    if( cuotas == 6 ){
        let interes = monto * 0.25;
        return interes
    }

    else if ( cuotas == 12 ){
        let interes = monto * 0.50;
        return interes
    }

    else if  ( cuotas == 18 ){
        let interes = monto * 0.90;
        return interes
    }
    

}



let nombre_apellido = prompt("Ingrese su nombre y apellido")

let monto = prompt("¿Cuanto dinero necesitas?");
monto = parseInt(monto);

let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");



let total = monto + interes_cuotas(monto , cuotas);

console.log("Bienvenido/a a Prestamos Online", nombre_apellido)
console.log("Cantidad de dinero solicitado: ", monto);
console.log("Cantidad de cuotas: ", cuotas);
console.log("Total a pagar con interes: ", total);
console.log("Vas a pagar por cuota: ", total/cuotas );


 

let salida = prompt("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");


while ( salida != "SALIR" ){
   
    

    let nombre_apellido = prompt("Ingrese su nombre y apellido")

    let monto = prompt("¿Cuanto dinero necesitas?");
    monto = parseInt(monto);

    let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");




    let total = monto + interes_cuotas(monto , cuotas);

    console.log("Bienvenido/a a Prestamos Online", nombre_apellido)
    console.log("Cantidad de dinero solicitado: ", monto);
    console.log("Cantidad de cuotas: ", cuotas);
    console.log("Total a pagar con interes: ", total);
    console.log("Vas a pagar por cuota: ", total/cuotas );

    salida = prompt ("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");

}