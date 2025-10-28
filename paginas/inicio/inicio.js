document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.querySelector('.notifications-list');
    const modal = document.getElementById('delete-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    let notificationToDelete = null;

    // Abrir el modal al hacer clic en "Descartar"
    notificationList.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-discard')) {
            // Guardar la notificación que se va a eliminar
            notificationToDelete = event.target.closest('.notification-item');
            modal.classList.add('active');
        }
    });

    // Función para cerrar el modal
    const closeModal = () => {
        modal.classList.remove('active');
        notificationToDelete = null; // Limpiar la variable
    };

    // Cerrar modal al hacer clic en "Cancelar"
    cancelBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Confirmar eliminación
    confirmDeleteBtn.addEventListener('click', () => {
        if (notificationToDelete) {
            notificationToDelete.remove(); // Eliminar el elemento del DOM
            closeModal();
        }
    });
});