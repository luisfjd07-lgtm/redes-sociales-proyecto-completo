// ==================================================
// JAVASCRIPT - PÁGINA SOBRE REDES SOCIALES
// ==================================================


// ==================================================
// 1. MODO OSCURO
// ==================================================

const botonModoOscuro =
    document.getElementById("modoOscuro");

if (botonModoOscuro) {

    botonModoOscuro.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );

            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                botonModoOscuro.textContent = "☀️";

                botonModoOscuro.setAttribute(
                    "aria-label",
                    "Activar modo claro"
                );

            } else {

                botonModoOscuro.textContent = "🌙";

                botonModoOscuro.setAttribute(
                    "aria-label",
                    "Activar modo oscuro"
                );

            }

        }
    );

}


// ==================================================
// 2. ANIMACIONES AL HACER SCROLL
// ==================================================

const elementos =
    document.querySelectorAll(
        ".animar-scroll"
    );


const observador =
    new IntersectionObserver(

        function (elementosObservados) {

            elementosObservados.forEach(
                function (elemento) {

                    if (
                        elemento.isIntersecting
                    ) {

                        elemento.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(
    function (elemento) {

        observador.observe(elemento);

    }
);


// ==================================================
// 3. DESPLAZAMIENTO SUAVE DEL MENÚ
// ==================================================

const enlaces =
    document.querySelectorAll(
        'a[href^="#"]'
    );


enlaces.forEach(
    function (enlace) {

        enlace.addEventListener(
            "click",
            function (evento) {

                const destino =
                    document.querySelector(
                        enlace.getAttribute(
                            "href"
                        )
                    );

                if (destino) {

                    evento.preventDefault();

                    destino.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);


// ==================================================
// 4. FORMULARIO DE CONTACTO
// ==================================================

const formulario =
    document.getElementById(
        "formularioContacto"
    );


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            const nombre =
                document.getElementById(
                    "nombre"
                );


            const email =
                document.getElementById(
                    "email"
                );


            const mensaje =
                document.getElementById(
                    "mensaje"
                );


            // VALIDAR NOMBRE

            if (
                nombre.value.trim().length < 3
            ) {

                alert(
                    "Por favor, ingresa un nombre válido."
                );

                nombre.focus();

                return;

            }


            // VALIDAR CORREO

            const expresionEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !expresionEmail.test(
                    email.value.trim()
                )
            ) {

                alert(
                    "Por favor, ingresa un correo electrónico válido."
                );

                email.focus();

                return;

            }


            // VALIDAR MENSAJE

            if (
                mensaje.value.trim().length < 10
            ) {

                alert(
                    "El mensaje debe tener al menos 10 caracteres."
                );

                mensaje.focus();

                return;

            }


            // MENSAJE FINAL

            alert(
                "✅ ¡Mensaje enviado correctamente! Gracias por tu opinión sobre las redes sociales."
            );


            formulario.reset();

        }
    );

}


// ==================================================
// 5. BOTÓN VOLVER ARRIBA
// ==================================================

const botonArriba =
    document.createElement(
        "button"
    );


botonArriba.textContent = "⬆️";


botonArriba.setAttribute(
    "aria-label",
    "Volver al inicio"
);


botonArriba.title =
    "Volver al inicio";


botonArriba.id =
    "botonArriba";


document.body.appendChild(
    botonArriba
);


// MOSTRAR / OCULTAR BOTÓN

window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 400
        ) {

            botonArriba.classList.add(
                "mostrar"
            );

        } else {

            botonArriba.classList.remove(
                "mostrar"
            );

        }

    }
);


// VOLVER ARRIBA

botonArriba.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ==================================================
// 6. MENÚ MÓVIL
// ==================================================

const botonMenu =
    document.getElementById(
        "botonMenu"
    );


const menuPrincipal =
    document.getElementById(
        "menuPrincipal"
    );


if (
    botonMenu &&
    menuPrincipal
) {

    botonMenu.addEventListener(
        "click",
        function () {

            menuPrincipal.classList.toggle(
                "menu-abierto"
            );


            const abierto =
                menuPrincipal.classList.contains(
                    "menu-abierto"
                );


            botonMenu.setAttribute(
                "aria-expanded",
                abierto
            );

        }
    );

}


// ==================================================
// 7. CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ==================================================

const enlacesMenu =
    document.querySelectorAll(
        ".menu a"
    );


enlacesMenu.forEach(
    function (enlace) {

        enlace.addEventListener(
            "click",
            function () {

                if (
                    menuPrincipal
                ) {

                    menuPrincipal.classList.remove(
                        "menu-abierto"
                    );

                }


                if (
                    botonMenu
                ) {

                    botonMenu.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }
);


// ==================================================
// 8. MENSAJE EN CONSOLA
// ==================================================

console.log(
    "📱 Página de Redes Sociales cargada correctamente."
);

console.log(
    "🌐 Explora los diferentes tipos de redes sociales."
);

console.log(
    "💡 Recuerda utilizar las redes sociales de manera responsable."
);
