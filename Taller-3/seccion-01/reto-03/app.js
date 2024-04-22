// Reto 3: Validador de Correos Electrónicos
alert("bienvenido a tu verificador de emails!!")
// - Solicita al usuario que ingrese un correo electrónico por prompt().
let email = prompt("ingresa tu correo electronico: ")
// - Verifica si el correo electrónico ingresado tiene un formato válido. Un correo electrónico válido debe cumplir con las siguientes condiciones:
//     - Debe contener un solo símbolo '@'.
// Verifica si el correo electrónico ingresado tiene un formato válido.
// Un correo electrónico válido debe cumplir con las siguientes condiciones:
// - Debe contener un solo símbolo '@'.
// - Debe contener al menos un punto '.' después del símbolo '@'.
// - El punto '.' y el símbolo '@' no pueden estar juntos.
// - El correo electrónico no puede contener espacios en blanco.
if (/@[^@]*\.[^@]*$/.test(email) && !/\s/.test(email)){
    // - Si el correo electrónico cumple con todas las condiciones, muestra un mensaje de "Correo electrónico válido".
    console.log("Correo electronico valido");
} else {
    console.log("El email es invalido.");
    if (!/@[^@]*\.[^@]*$/.test(email)) {
        console.log("El correo electrónico debe contener un solo simbolo @ y al menos un punto después del @.");
    }
    if (/\s/.test(email)) {
        console.log("El correo electronico no puede contener espacios en blanco.");
    }
}
