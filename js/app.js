

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

let form = document.getElementById("form");
const arrayUser = []


form.addEventListener("submit" , function(e){
    e.preventDefault()

    let nombre_apellido = document.getElementById("nombre_apellido");
    let monto = document.getElementById("monto");
    let cuotas = document.getElementById("cuotas");

    /*const usuario = {
        nombre: nombre_apellido.value,
        monto: monto.value,
        cuotas: cuotas.value,

    }*/
    

    class Usuario {
        constructor ( nombre_apellido, monto, total, cuotas , pago_cuota){
            this.nombre_apellido = nombre_apellido.value;
            this.monto = monto.value;
            this.cuotas = cuotas.value;
            this.total = total.value;
            this.pago_cuota = pago_cuota.value;

        }
        
        
    }

    
    let total = monto + interes_cuotas(monto , cuotas); 

    let pago_cuota = (this.total/this.cuotas);

    /*const user = new Usuario (nombre_apellido, monto, total, cuotas, pago_cuota);
    const usuarios = [];
    usuarios.push(user); */


    let lista = document.getElementById("lista");
    arrayUser.push(Usuario)
    arrayUser.forEach((user) => {
        const div = document.createElement("div")
        div.innerHTML =
                    ` <li>${user.nombre_apellido}</li> 
                        <li>${user.monto}</li>
                        <li>${user.cuotas}</li>
                        <li>${user.total}</li>
                        <li>${user.pago_cuota}</li>`
        lista.append(div)
    })

})


let img = document.getElementById("img");

img.addEventListener("mouseover", function(){

    img.src = "img_dos.jpg";

});

img.addEventListener("mouseout", function(){

    img.src = "img_uno.jpg";

});













/*
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

*/
/*
let btn = document.getElementById("boton");
let total = monto + interes_cuotas(monto , cuotas);

btn.addEventListener("click", function(){

    let nombre_apellido = document.getElementById("nombre_apellido");
    let monto = document.getElementById("monto");
    let cuotas = document.getElementById("cuotas");
    
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    total = document.createElement("total");

    li.innerHTML = `<span>${nombre_apellido.value}</span>`;
    
    li.innerHTML = `<span>${cantidad_dinero.value}</span>`;
                    
    li.innerHTML = `<span>${cuotas_usuario.value}</span>`;

    lista.append(li);

    
})  */
/*
let nombre_apellido = prompt("Ingresa tu nombre y apellido")

let monto = parseInt(prompt("¿Cuanto dinero necesitas?"));

let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");*/



/*
const user = new Usuario (nombre_apellido, monto, total, cuotas, pago_cuota);
usuarios.push(user);  
user.get_datos();*/

/*let salida = prompt("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");*/

/*

while ( salida != "SALIR"){
    
    btn = document.getElementById("boton");

    btn.addEventListener("click", function(){

        nombre_apellido = document.getElementById("nombre_apellido");
        monto = document.getElementById("cantidad_dinero");
        cuotas = document.getElementById("cuotas_usuario");
        
        let lista = document.getElementById("lista");
        let li = document.createElement("li");
    
        li.innerHTML = `<span>${nombre_apellido.value}</span>`;
        
        li.innerHTML = `<span>${cantidad_dinero.value}</span>`;
                        
        li.innerHTML = `<span>${cuotas_usuario.value}</span>`;
    
        lista.append(li);
    
        
    })  
    
/*
    let nombre_apellido = prompt("Ingrese su nombre y apellido")

    let monto = parseInt(prompt("¿Cuanto dinero necesitas?"));
   
    let cuotas = prompt("¿En cuantas cuotas preferis pagarlo: 6, 12 o 18?");*/

    /*let total = monto + interes_cuotas(monto , cuotas);


    const user = new Usuario (nombre_apellido, monto, total, cuotas, pago_cuota);

    usuarios.push(user);
    
    user.get_datos();*/

       
    
    /*salida = prompt ("Si queres volver a cotizar otro prestamo indica SEGUIR o SALIR para finalizar");

}


console.log(usuarios);

*/
/*

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



/*
let btn = document.getElementById("boton");


btn.addEventListener("click", function(){

    nombre_apellido = document.getElementById("nombre_apellido");
    monto = document.getElementById("cantidad_dinero");
    cuotas = document.getElementById("cuotas_usuario");
    
    let lista = document.getElementById("lista");
    let li = document.createElement("li");

    li.innerHTML = `<span>${nombre_apellido.value}</span>`;
    
    li.innerHTML = `<span>${cantidad_dinero.value}</span>`;
                    
    li.innerHTML = `<span>${cuotas_usuario.value}</span>`;

    lista.append(li);

    
})  */







