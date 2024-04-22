
// - Herramientas a Utilizar:
    // - Métodos de strings: split(), toLowerCase(), includes(), trim(), replace()
    // - Métodos de objetos: Object.keys(), Object.values(), Object.entries(), Object.assign()

    // - 1. Creación de Eventos:
let ListEvents = []
while(confirm("¿Deseas añadir un evento?")){
    let name = prompt("Ingresa el nombre de tu evento: ").toLowerCase().trim()
    let date = prompt("Ingresa la fecha del evento: (24-04-2024)").toLowerCase().trim()
    let description = prompt("Ingresa la descripcion de tu evento: ").toLowerCase().trim()
    let id  = ListEvents.length+1
    let object = {
        "name" : name,
        "date" : date,
        "descripcion" : description,
        "id" : id
    }
    let Event = Object.assign(object)
    ListEvents.push(Event)
    console.log(ListEvents)
}

// - 2. Visualización y Búsqueda de Eventos

ListEvents.forEach((element) => console.log(Object.values(element)));

function SearchEvent(){
    while(confirm("¿Desea buscar un evento por su nombre?")){
        let NameGet = prompt("Ingresa el nombre de el evento que desea buscar: ").toLowerCase().trim()
        let eventNames = ListEvents.map(event => event.name.toLowerCase());
        if (eventNames.includes(NameGet)){
            alert("El evento si se encontro en la lista!!!")
        }else{
            alert("El evento no se encontro en la lista :(")
        }
    }
}
SearchEvent()
// - 3. Actualización de Eventos

function UpdateEvent(){
    while(confirm("¿Desea actualizar un evento?")){
        let IDGet = Number(prompt("Ingresa el ID del evento que deseas buscar: "));
        let eventToUpdate = ListEvents.find(event => event.id === IDGet);
        
        if (eventToUpdate){
            alert("Se encontró el evento con el ID: " + IDGet);
            console.log("Propiedades del evento:");
            console.log(Object.keys(eventToUpdate));
            
            let KeyGet = prompt("Ingresa el campo que deseas actualizar: ").toLowerCase().trim();
            let index;
            switch (KeyGet){
                case "name":
                    let newName = prompt("Ingresa el nuevo nombre: ").toLowerCase().trim();
                    let updatedName = Object.assign({}, eventToUpdate, { name: newName });
                    index = ListEvents.findIndex(event => event.id === IDGet);
                    ListEvents[index] = updatedName;
                    console.log("Nombre actualizado del evento con ID " + IDGet + ": " + newName);
                    console.log(ListEvents)
                    break;
                case "date":
                    let newDate = prompt("Ingresa la nueva fecha: ").trim();
                    let updatedDate = Object.assign({}, eventToUpdate, { date: newDate });
                    index = ListEvents.findIndex(event => event.id === IDGet);
                    ListEvents[index] = updatedDate;
                    console.log("Fecha actualizada del evento con ID " + IDGet + ": " + newDate);
                    console.log(ListEvents)
                    break;
                case "descripcion":
                    let newDescription = prompt("Ingresa la nueva descripcion: ").trim().toLowerCase();
                    let updatedDescription = Object.assign({}, eventToUpdate, { descripcion: newDescription });
                    index = ListEvents.findIndex(event => event.id === IDGet);
                    ListEvents[index] = updatedDescription;
                    console.log("Descripcion actualizada del evento con ID " + IDGet + ": " + newDescription);
                    console.log(ListEvents)
                    break;
                default:
                    alert("El campo especificado no es válido.");
                    break;
            }

        } else {
            alert("No se encontró ningún evento con el ID: " + IDGet);
        }
    }
}
UpdateEvent();
// - 4. Eliminación de Eventos
function deleteEvent() {
    while (confirm("¿Desea eliminar algún producto?")) {
        for (let index = 0; index < ListEvents.length; index++) {
            console.log(ListEvents[index]);
        }
        let IdDelete = Number(prompt("Ingresa el ID del producto que deseas eliminar: "));
        let IndexDelete = IdDelete - 1;
        
        if (IndexDelete >= 0 && IndexDelete < ListEvents.length) {
            const filteredEvents = ListEvents.filter(event => event.id !== IdDelete);
            alert("Producto eliminado correctamente.");
            console.log("Se ha eliminado el producto.");
            console.log(filteredEvents);
        } else {
            alert("Producto no encontrado :(");
            console.log("Producto no encontrado :(");
        }
    }
}

deleteEvent();