//Reto 2: Validador de Contraseñas seguras
alert("bienvenido a tu Validador de Contraseñas seguras")
//- Solicita al usuario que ingrese una contraseña por prompt().
const password = prompt("ingresa una contraseña")
//- Verifica si la contraseña ingresada tiene al menos 8 caracteres.
//Verifica si la contraseña contiene al menos un número.
// - Verifica si la contraseña contiene al menos una letra.
// - Verifica si la contraseña contiene al menos un caracter especial. Los caracteres especiales permitidos son los siguientes: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \ ~ `
let condicionesNoCumplidas = []
if (password.length < 8) {
    condicionesNoCumplidas.push("Debe tener al menos 8 caracteres.");
} else if (!/\d/.test(password)) {
    condicionesNoCumplidas.push("Debe contener al menos un número.");
} else if (!/[a-zA-Z]/.test(password)) {
    condicionesNoCumplidas.push("Debe contener al menos una letra.");
} else if (!/[!@#$%^&*()+=_\-{}[\]:;"'?<>,.|/\\~`]/.test(password)) {
    condicionesNoCumplidas.push("Debe contener al menos un carácter especial.");
}
// - Si la contraseña cumple con todas las condiciones, muestra un mensaje de "Contraseña segura".
if (condicionesNoCumplidas.length === 0) {
    alert("Contraseña segura. ¡Que tengas un buen día!");
} else {
// - Si la contraseña no cumple con alguna de las condiciones, muestra un mensaje de "Contraseña insegura" y una lista de las condiciones que no cumple.
    alert("Contraseña insegura. No cumple con las siguientes condiciones:\n\n" + condicionesNoCumplidas.join("\n"));
}

