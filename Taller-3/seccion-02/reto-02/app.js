// Reto 2: Calculadora de Estadísticas de Calificaciones
// - Utiliza métodos de arrays como reduce(), map(), filter(), sort() para calcular las siguientes estadísticas:
//     - Promedio de Calificaciones
//     - Calificación Máxima
//     - Calificación Mínima
//     - Número de Aprobados (calificación mayor o igual a 70)
//     - Número de Reprobados (calificación menor a 70)
//     - Lista de Calificaciones Ordenadas de Mayor a Menor
// - Muestra las estadísticas de calificaciones al usuario.

function Average(){
    while(confirm("¿Quieres calcular tu promedio?")){
        //     - Promedio de Calificaciones
        let grades = prompt("Ingresa tus calificaciones separadas por una coma:  ").trim()
        grades = grades.split(",").map(parseFloat)
        let Average = grades.reduce((total, grade) => total + grade, 0)
        Average /= grades.length
        console.log(`El promedio es: ${Average}`)
        //     - Calificación Máxima
        grades.sort((a, b) => b - a);
        let maxGrade = grades[0];
        console.log(`La maxima calificacion es: ${maxGrade}`)
        //     - Calificación Mínima
        grades.sort((a, b) => a - b);
        let minGrade = grades[0];
        console.log(`La minima calificacion es: ${minGrade}`)
        //     - Número de Aprobados (calificación mayor o igual a 70)
        let NumAprob = grades.filter((grade) => grade >70)
        console.log(`El numero de aprobados es: ${NumAprob.length}`)
        //     - Número de Reprobados (calificación menor a 70)
        let NumReprob = grades.filter((grade) => grade <70)
        console.log(`El numero de reprobados es: ${NumReprob.length}`)
        //     - Lista de Calificaciones Ordenadas de Mayor a Menor
        grades = grades.sort((a, b) => a - b);
        console.log(`Lista de calificcaciones de mayor a menor: ${grades}`)
    }
}
Average()
