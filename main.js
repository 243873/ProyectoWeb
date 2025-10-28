document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD GLOBAL PARA MOSTRAR/OCULTAR CONTRASEÑA ---
    // Se usa delegación de eventos en el body para que funcione en todas las páginas
    document.body.addEventListener('click', function(event) {
        
        // Solo actuar si el clic fue en un icono de contraseña
        if (event.target.classList.contains('toggle-password')) {
            const icon = event.target;
            const passwordInput = icon.previousElementSibling;
            
            // CORRECCIÓN: Lógica mejorada para determinar la ruta a la carpeta 'img'
            // Esto asegura que los iconos se encuentren desde cualquier página.
            const basePath = window.location.pathname.includes('/paginas/') ? '../../img/' : 'img/';

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.src = `${basePath}eyeopen.svg`; // Usa el nuevo icono de ojo abierto
            } else {
                passwordInput.type = 'password';
                icon.src = `${basePath}eyeclosed.svg`; // Vuelve al icono de ojo cerrado
            }
        }
    });

});