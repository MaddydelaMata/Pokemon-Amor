document.getElementById("heart").addEventListener("click", function() {
    let pokebola = document.getElementById("pokebola");
    let carta = document.getElementById("carta");
    let sonido = document.getElementById("pokeballSound");
    let humo = document.getElementById("humo");
    let particulas = document.getElementById("particulas");

    // Reproducir sonido
    sonido.play();

    // Agregar animación de movimiento antes de abrirse
    pokebola.classList.add("movimiento");

    setTimeout(() => {
        pokebola.classList.remove("movimiento");
        pokebola.classList.add("abierto");

        // Activar efectos de humo y partículas
        humo.classList.add("activo");
        particulas.classList.add("activo");

        // Mostrar la carta con efecto de rotación
        setTimeout(() => {
            carta.classList.add("visible");

            // Ocultar la Pokébola después de abrirse
            setTimeout(() => {
                pokebola.style.opacity = "0";
            }, 200);

        }, 500); // Tiempo para que los efectos aparezcan primero

    }, 800);
});

document.getElementById("cerrar").addEventListener("click", function() {
    let pokebola = document.getElementById("pokebola");
    let carta = document.getElementById("carta");
    let humo = document.getElementById("humo");
    let particulas = document.getElementById("particulas");

    carta.classList.remove("visible"); // Oculta la carta
    humo.classList.remove("activo");
    particulas.classList.remove("activo");

    setTimeout(() => {
        pokebola.style.opacity = "1"; // Reaparece la Pokébola
        pokebola.classList.remove("abierto");
    }, 500);
});
