const url = "../data.json"
let divDatos = document.getElementById("divDatos");
let datos;

function mostrarDatos(){
    divDatos.innerHTML = '';
    fetch(url).then(response => {
        if(response.ok){
            console.log("Peticion exitosa!");
        }else{
            console.log("Ocurrió un error");
        }
        return response.json(); //Devuelve la response para poder trabajar con sus datos
    }).then(data => {
        datos = data; //Accedemos a los datos de la response
        datos.forEach(personaje => {
            divDatos.innerHTML += `
            <div id="cardPersonaje">
                <div id="img">
                    <img src="${personaje.img}">
                </div>
                <p id="nombre">${personaje.nombre}</p>
                <p id="casa">Casa: ${personaje.casa}</p>
            </div>
            `
        });
    })
}

function reiniciar(){
    divDatos.innerHTML = null;
}