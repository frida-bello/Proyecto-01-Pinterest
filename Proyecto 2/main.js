//Usuario y contraseña verificada

//Objeto de cuentas
let personaUser = {
    nombre: "",
    saldo: 0,
    clave: "",

     }
    let persona1= Object.create(personaUser);
    persona1.nombre= "Mali";
    persona1.saldo= 200;
    persona1.clave= "mali200";

    let persona2= Object.create(personaUser);
    persona2.nombre= "Gera";
    persona2.saldo= 290;
    persona2.clave= "gera290";

    let persona3= Object.create(personaUser);
    persona3.nombre= "Maui";
    persona3.saldo= 67;
    persona3.clave= "maui67";

    const cuentas = [persona1,persona2,persona3];
    const logIn = document.getElementById("formulario")

    //En caso que el usuario o contrasenia no corresponda
    const mensaje = document.createElement("p")
    mensaje.textContent = "Este usuario no forma parte de esta corporación"
    mensaje.setAttribute("style", "color: orange, font-size: 12px")

    
//Verificacion de cuentas
logIn.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById('username').value;
    const contrasenia = document.getElementById('password').value;
    let entraste=false;
    for (let person of cuentas){

        if(person.nombre === name && person.clave === contrasenia){
            sessionStorage.setItem('username', name);
            entraste=true;
            window.location.href = "intro.html"
    break;
        }
    }

    if(!entraste){
        document.body.appendChild(mensaje)
    }
})


    
   