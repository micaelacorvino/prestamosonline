
class Usuario {
    constructor ( nombre, monto, cuotas){
        this.nombre = nombre;
        this.monto = monto;
        this.cuotas = cuotas;
    }

    get total(){
        return parseInt(this.monto) + this.interes_cuotas(parseInt(this.monto) , parseInt(this.cuotas));
    }

    get pagoCuota(){
        return (parseInt(this.total)/parseInt(this.cuotas));
    }

    interes_cuotas( monto , cuotas ){ 


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
}



    

let form = document.getElementById("form");
const arrayUser = [];


if(localStorage.getItem("arrayUser")) {
    let datos_usuario = JSON.parse(localStorage.getItem("arrayUser"));

    for(let i = 0 ; i < datos_usuario.lenght ; i++ ) {
        arrayUser.push(datos_usuario[i]);
    }
}



    
form.addEventListener("submit", function(e){
    e.preventDefault()
    


    let nombre = document.getElementById("nombre"); 
    let monto = document.getElementById("monto");
    let cuotas = document.getElementById("cuotas");
    
        
     
    const user = new Usuario (nombre.value, monto.value, cuotas.value);
    const usuario = {
        nombre: user.nombre,
        monto: user.monto,
        cuotas: user.cuotas,
        total: user.total,
        pago_cuota: user.pagoCuota,
         
    }

    

    let lista = document.getElementById("lista");

    arrayUser.push(usuario)

    localStorage.setItem ("arrayUser", JSON.stringify(arrayUser));
    
    
    
    
    lista.innerHTML = "";
    
    arrayUser.forEach((user) => {
        const div = document.createElement("div")
        div.innerHTML = ` <div>
                        <p class="p-3 mt-5 mb-2 d-flex justify-content-center bg-success text-white">Bienvenido a Prestamos Online: ${user.nombre}</p> 
                         <p class="p-3 mt-1 mb-2 d-flex justify-content-center bg-success text-white">Cantidad de dinero solicitado: $${user.monto}</p>
                        <p class="p-3 mt-1 mb-2 d-flex justify-content-center bg-success text-white">Cantidad de cuotas elegidas:  ${user.cuotas}</p>
                        <p class="p-3 mt-1 mb-2 d-flex justify-content-center bg-success text-white">Total a pagar con interes: $${user.total}</p> 
                        <p class="p-3 mt-1 mb-2 d-flex justify-content-center bg-success text-white">Vas a pagar por cuota: $${user.pago_cuota}</p></div>`


    lista.append(div);

    

    })


    Swal.fire({
        title:"¿Querés seguir cotizando tus préstamos?",
        text: "Si queres seguir apretá OK. Sino te esperamos pronto por aquí!",
        icon: "success",
        
        
        imageUrl:"logo_prestamosonline.png",
    
        showClass:{
            popup: "animate__animated animate__bounceIn"
        },
        hideClass:{
            popup:"animate__animated animate__flipOutY"
        },
        color:"green",
        background: "white",
    });

    
})



let img = document.getElementById("img");

img.addEventListener("mouseover", function(){

    img.src = "img_dos.jpg";

});

img.addEventListener("mouseout", function(){

    img.src = "img_uno.jpg";

});





let clima = document.getElementById("clima");

function mostrar_posicion( posicion ){

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "bbf8893c6e8030e157bb633d11a66e17";


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then( response=> response.json() )
        .then( data =>{
                        document.body.innerHTML = `<p>${data.name}</p>
                                                   <p>Temp:${data.main.temp}</p>
                                                   <p>Clima:${data.weather[0].description}</p>`
        })



}

   

navigator.geolocation.getCurrentPosition( mostrar_posicion );




