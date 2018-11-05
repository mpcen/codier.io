function run() {
    const modal = document.getElementById('modal-container');
    const btnOpenModal = document.getElementById('btn-openModal');
    const btnCloseModal = document.getElementById('btn-closeModal');

    btnOpenModal.onclick = () => openModal();
    btnCloseModal.onclick = () => closeModal();

    function openModal() {
        modal.classList.replace('closed', 'opened');
    }

    function closeModal() {
        modal.classList.replace('opened', 'closed');
    }
}