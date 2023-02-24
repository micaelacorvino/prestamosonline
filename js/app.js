
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
    form.reset()


    console.log(arrayUser);


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

    
})


let img = document.getElementById("img");

img.addEventListener("mouseover", function(){

    img.src = "img_dos.jpg";

});

img.addEventListener("mouseout", function(){

    img.src = "img_uno.jpg";

});
