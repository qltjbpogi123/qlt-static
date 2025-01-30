function handleModalOpen(modalId, buttonId) {
    document.getElementById(buttonId)?.addEventListener('click', function() {
        const modal = document.getElementById(modalId);
        
        if (!modal) {
            console.error(`Modal with ID ${modalId} not found.`);
            return;
        }

        const overlay = modal.querySelector('.modal-overlay');
        const modalContent = modal.querySelector('.relative.p-4');

        if (!overlay || !modalContent) {
            console.error('Required modal elements (.modal-overlay or .relative.p-4) not found.');
            return;
        }

        // Initially hide modal content
        modal.classList.remove('hidden');
        modalContent.style.transform = 'translateY(0%) scale(0.5)';
        modalContent.style.opacity = '0';
        overlay.style.opacity = '0';

        // Animate modal content
        setTimeout(() => {
            modalContent.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            overlay.style.transition = 'opacity 0.3s ease-out';

            modalContent.style.transform = 'translateY(0) scale(1)';
            modalContent.style.opacity = '1';
            overlay.style.opacity = '0.5';
        }, 10);
    });
}

