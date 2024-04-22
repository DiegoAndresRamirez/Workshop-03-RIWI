// Instrucciones:

//     Utiliza métodos de arrays como push(), splice(), filter(), map(), etc., para manipular los datos.
//     Utiliza bucles for o while para iterar sobre los productos o realizar operaciones específicas.
//     Crea una interfaz de usuario sencilla utilizando prompt() y console.log() para interactuar con el usuario y mostrar los resultados.

//     Crear Producto:
//         Permitir al usuario ingresar detalles de un producto y almacenar estos detalles en un objeto.
// id, nombre, precio, cantidad y descripcion.

let ListProducts = []        //listo
while(confirm("¿Quiere agregar un producto?")){
    let name = prompt("Ingresa el nombre del producto: ").toLowerCase().trim()
    let price = Number(prompt("Ingresa el precio del producto: "))
    let quantity = Number(prompt("Ingresa la cantidad del producto: "))
    let description = prompt("Ingresa una descripcion corta del producto: ").toLowerCase().trim()

    const Product = {
        "id" : ListProducts.length+1,
        "name" : name,
        "price" : price,
        "quantity" : quantity,
        "description" : description,
    }

ListProducts.push(Product)
console.log(ListProducts)

}
//     Duplicar Producto:
//         Permitir al usuario duplicar un producto existente.
//         El nuevo producto duplicado debe tener un identificador único y un nombre que indique que es una copia.

while(confirm("¿deseas duplicar un producto existente (copia)?")){
    console.log(Object.values(ListProducts))  //listo
    let NameGet = prompt("Ingresa el nombre del producto que deseas duplicar:  ").toLowerCase().trim() 
    let ProductDuplicated = ListProducts.find(product => product.name.toLowerCase() === NameGet);
    if (ProductDuplicated){
        let copyNumber = 2;
        let copyName = `${NameGet} copy`;

        while (ListProducts.some(product => product.name.toLowerCase() === copyName)) {
            copyName = `${NameGet} copy ${copyNumber}`;
            copyNumber++;
        }

        const ProductCopy = Object.assign({}, ProductDuplicated)
        ProductCopy.id = ListProducts.length + 1;
        ProductCopy.name = copyName
        ListProducts.push(ProductCopy)

        console.log("Producto duplicado con exito!")
        console.log(ListProducts)
    }else{
        console.log("El producto no existe en la lista.");
    }
}

//     Visualizar Productos:
//         Permitir al usuario ver todos los productos almacenados.

while(confirm("¿Deseas buscar un producto en especifico?")){  //listo
    let NameProduct = prompt("Ingresa el nombre del producto que deseas buscar:  ").toLowerCase().trim() 
    let ProductSearch = ListProducts.findIndex(product => product.name.toLowerCase() === NameProduct);
    if(ProductSearch >= 0){
        console.log("Tu producto esta en la lista!")
        alert("Tu producto esta en la lista!")
        console.log(ListProducts[ProductSearch])
    }else{
        alert("El producto no fue encontrado...")
        console.log("El producto no fue encontrado...")
    }
}

//     Actualizar Producto:
//         Permitir al usuario actualizar los detalles de un producto existente, incluido el nombre, precio, cantidad y descripción.

while(confirm("¿Deseas actualizar algun producto?")){   //listo
    let IdGet = Number(prompt("Ingresa el id del producto que deseas actualizar: "))
    let indexList = IdGet-1
    let ProductUpdate = ListProducts.find(product => product.id === IdGet);
    if(ProductUpdate){
        alert("Producto encontrado!")
        console.log(Object.keys(ListProducts[IdGet-1]))
        let PropUpdate = prompt("Ingresa la propiedad que deseas actualizar: ")
        switch(PropUpdate){
            case "name":
                let newName = prompt("Ingresa el nuevo nombre: ");
                ListProducts[indexList].name = newName;
                console.log(Object.values(ListProducts));
                break;

            case "price":
                let newPrice = Number(prompt("Ingresa el nuevo precio: "));
                ListProducts[indexList].price = newPrice;
                console.log(Object.values(ListProducts));
                break;
            
            case "quantity":
                let newQuantity = Number(prompt("Ingresa la nueva cantidad: "))
                ListProducts[indexList].quantity = newQuantity;
                console.log(Object.values(ListProducts));
                break;

            case "description":
                let newDescription = prompt("Ingresa la nueva descripcion: ").toLowerCase().trim();
                ListProducts[indexList].description = newDescription;
                console.log(Object.values(ListProducts));
                break;

             default:
                console.log('Opcion invalida');
        }   
    }else{
        alert("Producto no encontrado :(")
    }
}
//     Eliminar Producto:
//         Permitir al usuario eliminar un producto existente.

while (confirm("¿Desea eliminar algún producto?")) {   //listo
    for (let index = 0; index < ListProducts.length; index++) {
        console.log(ListProducts[index])
    }
    let idDelete = Number(prompt("Ingresa el id del producto que deseas eliminar:  "))
    let productIndex = ListProducts.findIndex(product => product.id === idDelete)
    if (productIndex !== -1) {
        ListProducts = ListProducts.filter(product => product.id !== idDelete)
        console.log("Se ha borrado el producto!")
        console.log(ListProducts)
        alert("Producto eliminado con correctamente!")
    } else {
        alert("Producto no encontrado :(")
    }
}
//     Verificar Existencia de Producto:
//         Verificar si un producto existe en el inventario.

while (confirm("¿Desea buscar un producto?")) {   //listo
    let idSearch = Number(prompt("Ingresa el id del producto para buscarlo:")) - 1
    if (idSearch >= 0 && idSearch < ListProducts.length) {
        let product = ListProducts[idSearch]
        console.log("El producto si existe!")
        alert("El producto existe!")
        let ProductDisp = ListProducts.some(product => product.id === idSearch && product.quantity > 0)
        if (ProductDisp) {
            console.log("El producto está disponible.")
            alert("El producto está disponible.")
            let QuantityDisp = ListProducts.filter(product => product.id === idSearch && product.quantity > 0)
            if (QuantityDisp.length > 0) {
                console.log("La cantidad disponible es suficiente.")
                alert("La cantidad disponible es suficiente.")
            } else {
                console.log("No hay suficiente cantidad disponible.")
                alert("No hay suficiente cantidad disponible.")
            }
        } else {
            console.log("El producto no esta disponible.")
            alert("El producto no esta disponible.")
        }
        console.log(product)
    } else {
        alert("No se ha encontrado el producto :(")
        console.log("El producto no existe!")
    }
}
//     Venta de Producto:
//         Permitir al usuario vender un producto y actualizar la cantidad disponible en el inventario.

while (confirm("¿Deseas vender un producto?")) {   //listo
    let IdSale = Number(prompt("Ingresa el id del producto que deseas vender: "));
    let ProductIndex = IdSale - 1;
    if (ProductIndex >= 0 && ProductIndex < ListProducts.length) {
        ListProducts[ProductIndex].quantity -= 1;
        if (ListProducts[ProductIndex].quantity < 1) {
            ListProducts.splice(ProductIndex, 1);
            alert("Se ha agotado el producto y ha sido eliminado de la lista!");
            console.log("Se ha agotado el producto y ha sido eliminado de la lista!");
            console.log(ListProducts);
        } else {
            alert("Producto vendido! :)");
            console.log("El producto ha sido vendido!");
            console.log(ListProducts[ProductIndex]);
        }
    } else {
        alert("El producto no existe :(");
        console.log("El producto no existe :(");
    }
}

//     Compra de Producto:
//         Permitir al usuario comprar un producto y actualizar la cantidad disponible en el inventario.

while (confirm("¿Deseas comprar un producto?")) {   //listo
    let IdSale = Number(prompt("Ingresa el id del producto que deseas comprar: "))
    let ProductIndex = IdSale - 1
    let QuantitySale = Number(prompt("Ingresa la cantidad de producto que deseas comprar: "))

    if (ProductIndex >= 0 && ProductIndex < ListProducts.length){
        ListProducts[ProductIndex].quantity += QuantitySale;
        if (ListProducts[ProductIndex].quantity > 1) {
            alert("Gracias por tu compra");
            console.log("Gracias por tu compra!");
            console.log(ListProducts);
        } else {
            alert("No hay suficiente inventario");
            console.log("No hay suficiente inventario");
            console.log(ListProducts[ProductIndex]);
        }
    } else {
        alert("El producto no existe :(");
        console.log("El producto no existe :(");
    }
}

//     Cálculo de Valor Total del Inventario:
//         Calcular y mostrar el valor total del inventario sumando el precio de todos los productos disponibles.

let total = ListProducts.reduce((i, product) => i + product.price * product.quantity, 0)  //listo
console.log(`El total de la suma de los productos es: ${total}`)

// - 9. Ordenamiento de Productos
// - Descripción: Permitir al usuario ordenar los productos por precio y cantidad de forma ascendente o descendente.
// - Nota: Utiliza sort() para ordenar los productos por nombre, precio, cantidad y descripción.

while (true) {
    let option = prompt("¿Cómo deseas ordenar la lista de productos?\n1. Por precio ascendente\n2. Por precio descendente\n3. Por cantidad ascendente\n4. Por cantidad descendente\nIngrese el número de la opción:")

    switch (option) {
        case "1":
            ListProducts.sort((a, b) => a.price - b.price)
            break
        case "2":
            ListProducts.sort((a, b) => b.price - a.price)
            break
        case "3":
            ListProducts.sort((a, b) => a.quantity - b.quantity)
            break
        case "4":
            ListProducts.sort((a, b) => b.quantity - a.quantity)
            break
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.")
            continue
    }

    console.log("Lista de productos ordenada:")
    console.log(ListProducts)

    if (!confirm("¿Desea ordenar la lista de productos de nuevo?")) {
        break
    }
}

// - 10. Identificacion de productos con posibles malas palabras en la descripción
// - Descripción: Identificar productos con posibles malas palabras en la descripción y haciendo una copia profunda del objeto con el Object.assign({}, product) crear una lista de nombre blacklistedProducts con los productos que contienen malas palabras en la descripción.
// - Lista de malas palabras: ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']

// Lista de malas palabras
const badWords = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5']
const blacklistedProducts = []

for (let i = 0; i < ListProducts.length; i++) {
    const product = ListProducts[i]
    for (let j = 0; j < badWords.length; j++) {
        if (product.description.toLowerCase().includes(badWords[j])) {
            blacklistedProducts.push(Object.assign({}, product))
            break;
        }
    }
}
console.log("Productos con posibles malas palabras en la descripción:");
console.log(blacklistedProducts);


// - 11. Reporte General de Productos
// - Descripción: Generar un reporte de productos que incluya cantidad de productos, valor total del inventario, cantidad de productos más caros, cantidad de productos más baratos, cantidad de productos con mayor y menor cantidad disponible y cantidad de productos con posibles malas palabras en la descripción.

// 1. Cantidad de productos
const totalProducts = ListProducts.length;
const inventoryValue = ListProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
const maxPrice = Math.max(...ListProducts.map(product => product.price));
const numExpensiveProducts = ListProducts.filter(product => product.price === maxPrice).length;
const minPrice = Math.min(...ListProducts.map(product => product.price));
const numCheapProducts = ListProducts.filter(product => product.price === minPrice).length;
const maxQuantity = Math.max(...ListProducts.map(product => product.quantity));
const numProductsWithMaxQuantity = ListProducts.filter(product => product.quantity === maxQuantity).length;
const minQuantity = Math.min(...ListProducts.map(product => product.quantity));
const numProductsWithMinQuantity = ListProducts.filter(product => product.quantity === minQuantity).length;
const numProductsWithBadWords = ListProducts.filter(product => {
    return badWords.some(word => product.description.toLowerCase().includes(word));
}).length;

console.log("Reporte General de Productos:");
console.log(`Cantidad de productos: ${totalProducts}`);
console.log(`Valor total del inventario: ${inventoryValue}`);
console.log(`Cantidad de productos mas caros: ${numExpensiveProducts}`);
console.log(`Cantidad de productos mas baratos: ${numCheapProducts}`);
console.log(`Cantidad de productos con mayor cantidad disponible: ${numProductsWithMaxQuantity}`);
console.log(`Cantidad de productos con menor cantidad disponible: ${numProductsWithMinQuantity}`);
console.log(`Cantidad de productos con posibles malas palabras en la descripcion: ${numProductsWithBadWords}`);
