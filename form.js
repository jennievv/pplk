(function() {
    const close = document.getElementById('form-close');
    const modal = document.getElementById('form');
    const modalOpen = document.getElementById('form-open');

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();