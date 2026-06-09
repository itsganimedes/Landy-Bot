// CELULAR INTERACTIVO

document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("input_nombre");
    const celularMarca = document.getElementById("celular_marca");
    const celular = document.querySelector(".celular_simulado");
    const botonesColor = document.querySelectorAll(".circulo_color");

    // 1. Escuchar el cambio de texto del nombre
    inputNombre.addEventListener("input", (e) => {
        const texto = e.target.value.trim();
        celularMarca.textContent = texto !== "" ? texto : "Mi Marca";
    });

    // 2. Escuchar los clics en los círculos de colores
    botonesColor.forEach(boton => {
        boton.addEventListener("click", () => {
            // Quitar clase activo al anterior y ponérsela al actual
            document.querySelector(".circulo_color.activo").classList.remove("activo");
            boton.classList.add("activo");

            // Obtener el color del botón presionado
            const nuevoColor = boton.getAttribute("data-color");

            // Modificar la variable inline del celular para cambiar header/footer
            celular.style.setProperty("--color-dinamico", nuevoColor);

            celular.style.setProperty("--color-dinamico", nuevoColor)
        });
    });
});


// FAQ

document.addEventListener("DOMContentLoaded", () => {
    const preguntas = document.querySelectorAll(".faq_pregunta");

    preguntas.forEach(pregunta => {
        pregunta.addEventListener("click", () => {
            const item = pregunta.parentElement;
            const respuesta = item.querySelector(".faq_respuesta");

            // Si ya está activo, lo cerramos
            if (item.classList.contains("activo")) {
                item.classList.remove("activo");
                respuesta.style.maxHeight = null;
            } else {
                // Opcional: Cierra los otros abiertos para que solo haya uno desplegado
                document.querySelectorAll(".faq_item.activo").forEach(itemAbierto => {
                    itemAbierto.classList.remove("activo");
                    itemAbierto.querySelector(".faq_respuesta").style.maxHeight = null;
                });

                // Abrimos el actual calculando su altura interna real (scrollHeight)
                item.classList.add("activo");
                respuesta.style.maxHeight = respuesta.scrollHeight + "px";
            }
        });
    });
});