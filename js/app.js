

function interes_cuotas( monto , cuotas ){ 


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
        return interes;
    }
    
    
}

const usuarios = [];
const pago_cuota = [];



class Usuario {
    constructor ( nombre_apellido, monto, total, cuotas , pago_cuota){
        this.nombre_apellido = nombre_apellido;
        this.monto = monto;
        this.cuotas = cuotas;
        this.total = total;
        this.pago_cuota = pago_cuota;

    }

    

    get_datos(){
        console.log("Bienvenido/a a Prestamos Online", this.nombre_apellido)
        console.log("Cantidad de dinero solicitado: ", this.monto);
        console.log("Cantidad de cuotas elegidas: ", this.cuotas);
        console.log("Total a pagar con interes: ", this.total);
        console.log("Vas a pagar por cuota: ", this.pago_cuota = (this.total/this.cuotas));
        
    }
}



let nombre_apellido = prompt("Ingresa tu nombre y apellido")

let monto = parseInt(prompt("¿Cuanto dinero necesitas?"));

let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");

let total = monto + interes_cuotas(monto , cuotas);


const user = new Usuario (nombre_apellido, monto, total, cuotas, pago_cuota);
usuarios.push(user);  
user.get_datos();

let salida = prompt("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");



while ( salida != "SALIR"){
   
    

    let nombre_apellido = prompt("Ingrese su nombre y apellido")

    let monto = parseInt(prompt("¿Cuanto dinero necesitas?"));
   
    let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");

    let total = monto + interes_cuotas(monto , cuotas);


    const user = new Usuario (nombre_apellido, monto, total, cuotas, pago_cuota);

    usuarios.push(user);
    
    user.get_datos();

       
    
    salida = prompt ("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");

}


console.log(usuarios);




function seleccion_usuario( user ) {
    return user.nombre_apellido == buscar_usuario
}

console.log("Busqueda de usuario");

const buscar_usuario = prompt ("BUSQUEDA DE USUARIO - Ingrese nombre y apellido");

let resultado_busqueda = usuarios.find(seleccion_usuario);

if (resultado_busqueda != undefined){

    console.log("Usuario encontrado")
}

else{

    console.log("No se encontro el usuario", buscar_usuario);
}

console.log( resultado_busqueda );

console.log("Gracias por elegirnos - PRESTAMOS ONLINE");


let btn = document.getElementById("boton");


btn.addEventListener("click", function(){
    let nombre = document.getElementById("nombre_apellido");
    let email = document.getElementById("email");
    let cantidad_dinero = document.getElementById("cantidad_dinero");
    let cuotas_usuario = document.getElementById("cuotas_usuario");
    let lista = document.getElementById("lista");
    let li = document.createElement("li");

    li.innerHTML = `<span>${nombre.value}</span>`;
    
    li.innerHTML = `<span>${email.value}</span>`;

    li.innerHTML = `<span>${cantidad_dinero.value}</span>`;
                    
    li.innerHTML = `<span>${cuotas_usuario.value}</span>`;

    lista.append(li);

    
})  





let img = document.getElementById("img");

img.addEventListener("mouseover", function(){

    img.src = "img_dos.jpg";

});

img.addEventListener("mouseout", function(){

    img.src = "img_uno.jpg";

});

