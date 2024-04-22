alert("Bienvenido a tu generador de nombres y emails!")
// solicitud de datos
let fullName = prompt("ingresa tu nombre y apellido:")
console.log(`tu nombre completo es ${fullName}`)
//normalizacion
let standard_fullName = fullName.toLowerCase()
console.log(`tu nombre completo en minusculas es: ${standard_fullName}`)
//separacion y extraccion
let separation_fullName = standard_fullName.split(" ")
console.log(separation_fullName)
let first_letters = [separation_fullName[0].slice(0,3), separation_fullName[1].slice(0,3)]
console.log("primeras tres letras de tu nombre y apellido")
console.log(first_letters)
//generacion del nombre de usuario
let name_user = first_letters[0].concat(first_letters[1])
console.log(`tu nombre de usuario es: ${name_user}`)
//Generacion del Correo Electrónico
let email = "@myDomain.com"
let email_adress = name_user.concat(email) 
console.log(`tu direccion de email es: ${email_adress}`)
//Almacena el nombre de usuario generado en un objeto global llamado 'users' con el username como clave y el correo electrónico como valor.
let users = {}
users = {}
users[name_user] = email_adress
//Verificación de Unicidad
let verify = Object.keys(users).includes(name_user)
if (verify){
    delete users[name_user]
    let new_name_user = name_user + "1";
    let new_email_adress = new_name_user.concat(email);
    users[new_name_user] = new_email_adress;
    console.log(users);
}

