"use strict"

const mostrarCoche=(coche)=>{
    document.write(`<div class="coche">
                        <p id="marca">${coche["marca"]}</p>
                        <p id="modelo">${coche["modelo"]}</p>
                        <p id="descripcion">${coche["descripcion"]}</p>
                        <p id="categoria">${coche["categoria"]}</p>
                        <p id="precio">${coche["precio"]}</p>
                        <p id="cv">${coche["cv"]}</p>
                        <p id="matriculado">Matriculado: ${coche["matriculado"]}</p>
                        <p id="fecha">${coche["fechaLanzamiento"]}</p>
                        <a href="${coche["enlace"]}">Más info</a><br>
                        <img src="${coche["imagen"]}" id="imagen">
                        <form>
                        <fieldset>
                            <legend>Actualizar datos de ${coche["marca"]} ${coche["modelo"]}</legend>
                            <label for="marcaJs">Marca ➡</label>
                            <input type="text" name="marcaPhp" id="marcaJs"><br>
                            <!---->
                            <label for="modeloJs">Modelo ➡</label>
                            <input type="text" name="modeloPhp" id="modeloJs"><br>
                            <!---->
                            <label for="descJs">Descripción ➡</label>
                            <textarea name="descPhp" id="descJs"></textarea><br>
                            <!---->
                            <label for="precioJs">Precio ➡</label>
                            <input type="number" name="precioPhp" id="precioJs"><br>
                            <!---->
                            <label for="cvJs">Potencia (cv) ➡</label>
                            <input type="number" name="cvPhp" id="cvJs"><br>
                            <!---->
                            <label for="imagenJs">Imagen (url) ➡</label>
                            <input type="text" name="imagenPhp" id="imagenJs"><br>
                            <!---->
                            <label for="matriculadoJs">¿Está matriculado? ➡</label>
                            <input type="checkbox" name="matriculadoPhp" id="matriculadoJs"><br>
                            <!---->
                            <label for="lanzamientoJs">Fecha de lanzamiento ➡</label>
                            <input type="number" name="lanzamientoPhp" id="lanzamientoJs"><br>
                            <!---->
                            <label for="enviarJs"></label>
                            <input type="submit" name="enviarPhp" id="enviarJs">
                        </fieldset>
                    </form>
                    </div>
                    
                    
                    `);                             
}

let categoria = prompt("Elige la categoría:");

let filtrado = coches.filter(
    (coches)=>{
        return coches["categoria"].toUpperCase().includes(categoria.toUpperCase());
    }
);

let orden = prompt("¿Orden ascendente o descendente?");
if(orden.toLocaleLowerCase()=='ascendente'){
    filtrado.sort(
        (a, b) => {
            return a["modelo"].localeCompare(b["modelo"]);
        });
        filtrado.forEach(mostrarCoche);
}else if(orden.toLocaleLowerCase()=='descendente'){
    filtrado.sort(
        (a, b) => {
            return b["modelo"].localeCompare(a["modelo"]);
        });
        filtrado.forEach(mostrarCoche);
}else{
    filtrado.forEach(mostrarCoche);
}
