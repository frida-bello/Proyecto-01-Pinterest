//Funcion mostrar contenido
function mostrarContenedor(consulta){
    document.getElementById('accion-boton').style.display = 'none';
    document.getElementById(consulta).style.display = 'flex';
}

function regresarInicio(volver){
    document.getElementById('accion-boton').style.display = 'flex';
    document.getElementById(volver).style.display = 'none';
}

//Funcion consultar saldo
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el nombre de usuario almacenado en sessionStorage
    const nombreUsuario = sessionStorage.getItem('username');

    // Busca el objeto de usuario correspondiente en el array cuentas
    const usuarioActual = cuentas.find(person => person.nombre === nombreUsuario);

    // Muestra el saldo en el segundo h2
    const saldoElement = document.querySelector('.consultar-saldo .saldo');
    if (saldoElement) {
        saldoElement.textContent = `$${usuarioActual.saldo}`;
    }
});

// Funcionalidad de boton Ingresar
const botonIngresar = document.getElementById('se-ingreso');

//Evento al boton Ingresar
botonIngresar.addEventListener('click', function (guardar) {
    // Obtener el valor del campo de entrada con id "input-ingreso"
    const cantidadIngresada = document.getElementById('input-ingresarsaldo').value;

    // Verificacion de número
    if (!isNaN(cantidadIngresada)) {
        // Conversion del valor a número
        const montoFloat = parseFloat(cantidadIngresada);

        // Obtener el nombre de usuario desde sessionStorage
        const usuario = sessionStorage.getItem('username');

        // Buscar la cuenta del usuario en el array
        const cuentaUsuario = cuentas.find(cuenta => cuenta.nombre === usuario);

        // Verificacion de la cuenta usuario
        if (cuentaUsuario) {
                  // Actualizar el elemento p con la clase "cantidad-ingresada"
                  const cantidadIngreso = document.querySelector('.cantidad-ingresada');
                  if (cantidadIngreso) {
                      cantidadIngreso.textContent = `$ ${montoFloat}`;
                  }
                  
                  if((cuentaUsuario.saldo + montoFloat) <= 990){
                      // Actualizar el saldo en la cuenta
                  cuentaUsuario.saldo += montoFloat;
                      alert("Click en Aceptar");

                  // Actualizar el elemento p con el nuevo saldo
                  const cantidad = document.getElementById('saldo-actualizado');
                  if (cantidad) {
                      cantidad.textContent = `$ ${cuentaUsuario.saldo}`;
                  }
  
                  // Actualizar todos los elementos con la clase "saldo"
                  const cantidadSaldo = document.querySelectorAll('.saldo');
                  cantidadSaldo.forEach(elemento => {
                      elemento.textContent = `$ ${cuentaUsuario.saldo}`;
                  });
                  }
          } else {
            console.error('La cuenta no corresponde al usuario.');
              }
    } else {
        console.error('Ingrese un monto válido.');
    }
});

//Funcionalidad al boton Retirar
document.addEventListener("DOMContentLoaded", function () {
    const inputRetirarSaldo = document.getElementById("input-retirarsaldo");
    const botonRetirar = document.getElementById("botonRetirar");
    const cantidadRetiradaElement = document.querySelector('.retirar-saldo .cantidad-retirada');
    const saldoActualizadoElementRetiro = document.querySelector('.retirar-saldo #saldo-actualizado');
    const saldoElementRetiro = document.querySelector('.retirar-saldo .saldo');

    botonRetirar.addEventListener("click", function () {
        // Obtener el nombre de usuario almacenado en sessionStorage
        const nombreUsuario = sessionStorage.getItem('username');

        // Buscar el usuario  en el array cuentas
        const usuarioActual = cuentas.find(person => person.nombre === nombreUsuario);

        // Obtener el valor retirado
        const montoRetirado = parseFloat(inputRetirarSaldo.value);

        // Verificar que la cantidad retirada sea un número válido
        if (!isNaN(montoRetirado)) {
            // Verificar que el usuario tenga suficiente saldo para retirar
            if (montoRetirado <= usuarioActual.saldo) {
                // Actualizacion del retiro
                cantidadRetiradaElement.textContent = `$${montoRetirado}`;
    


                // Operación para retirar el saldo del usuario
                usuarioActual.saldo -= montoRetirado;

                // Actualizar el contenido de saldo actualizado 
                saldoActualizadoElementRetiro.textContent = `$${usuarioActual.saldo}`;

                // Actualizar el contenido de saldo en el segundo elemento
                if (saldoElementRetiro) {
                    saldoElementRetiro.textContent = `$${usuarioActual.saldo}`;
                }
                

                // Limpiar el campo de entrada
                inputRetirarSaldo.value = "";

                // Función para actualizar el saldo en el apartado de "Consultar Saldo"

                actualizarSaldoConsultar();
            } else {
                // Advertencia al usuario de cantidad disponible
                alert("No tienes suficiente saldo para retirar esa cantidad.");
            }
        } else {
            // Advertencia en caso de que el usuario no ha ingresado un numero
            alert("Por favor, ingrese un valor numérico válido.");
        }
    });
});

function actualizarSaldoConsultar() {
    // Se obtiene el nombre de usuario almacenado en sessionStorage
    const nombreUsuario = sessionStorage.getItem('username');

    // Buscar el usuario correspondiente en el array cuentas
    const usuarioActual = cuentas.find(person => person.nombre === nombreUsuario);

    // Funcion Actualizar Saldo "Consultar Saldo"
    const saldoElementConsultar = document.querySelector('.consultar-saldo .saldo');
    if (saldoElementConsultar) {
        saldoElementConsultar.textContent = `$${usuarioActual.saldo}`;
    }
}
