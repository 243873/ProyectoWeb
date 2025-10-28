document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resetPasswordForm');
    const modal = document.getElementById('confirmationModal');
    const acceptButton = document.getElementById('acceptButton');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario

        const password = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Reglas de validación
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        if (!isLongEnough || !hasUpperCase || !hasLowerCase || !hasNumber) {
            alert('La nueva contraseña no cumple con los requisitos de seguridad.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Si la validación es correcta, muestra el modal
        modal.classList.add('active');
    });

    acceptButton.addEventListener('click', function () {
        // Redirige al usuario al inicio de sesión
        window.location.href = '../../index.html';
    });
});