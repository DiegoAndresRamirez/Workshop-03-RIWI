// Reto 1: Calculadora de Promedio de Calificaciones
// Solicita al usuario que ingrese las calificaciones del estudiante separadas por comas.

let ListGrades = []
let grades = prompt("Ingresa tus notas escolares sepparadas por comas:  ").trim()
// - Convierte las calificaciones ingresadas a un array utilizando split().
grades = grades.split(",").map(parseFloat)
// - Utiliza reduce() para sumar todas las calificaciones y calcular el promedio.
let ResultGrades = grades.reduce((total, grade) => total+grade, 0)
let average = ResultGrades / grades.length
// - Muestra el promedio de calificaciones al usuario.
console.log(`Tu promedio de calificaciones es: ${average}`)
