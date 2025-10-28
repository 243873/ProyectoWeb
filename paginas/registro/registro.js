document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // --- LÓGICA DE VALIDACIÓN DEL FORMULARIO ---
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Siempre prevenimos el envío para validar primero

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Reglas de validación
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        if (!isLongEnough || !hasUpperCase || !hasLowerCase || !hasNumber) {
            alert('La contraseña no cumple con los requisitos:\n\n- Al menos 8 caracteres\n- Una letra mayúscula\n- Una letra minúscula\n- Un número');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        alert('¡Cuenta creada exitosamente!');
        window.location.href = '../../index.html';
    });

    // --- LÓGICA PARA EL MODAL DE TÉRMINOS Y CONDICIONES ---
    const termsModal = document.getElementById('terms-modal');
    const openModalLink = document.getElementById('terms-link');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Abrir el modal
    openModalLink.addEventListener('click', function(event) {
        event.preventDefault(); // Previene que el link navegue
        termsModal.classList.add('active');
    });

    // Cerrar el modal con el botón
    closeModalBtn.addEventListener('click', function() {
        termsModal.classList.remove('active');
    });

    // Cerrar el modal al hacer clic fuera del contenido
    termsModal.addEventListener('click', function(event) {
        if (event.target === termsModal) {
            termsModal.classList.remove('active');
        }
    });
});