"use strict"

const mostrarCoche=(coche)=>{
    document.write(`<div class="coche">
                        <p id="marca">${coche["marca"]}</p>
                        <p id="modelo">${coche["modelo"]}</p>
                        <p id="precio">${coche["precio"]}</p>
                        <p id="cv">${coche["cv"]}</p>
                        <p id="matriculado">${coche["matriculado"]}</p>
                        <p id="fecha">${coche["fechaLanzamiento"]}</p>
                        <img src="${coche["imagen"]}" id="imagen">
                    </div>`);                                    
}

coches.forEach(mostrarCoche);