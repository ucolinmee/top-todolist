const Dialog = () => {
    const projectModal = document.getElementById('project-dialog');
    const dialogText = document.querySelector('.project-dialog-text');

    const openCreateProjectDialog = () => {
        projectModal.showModal();
    }

    const closeCreateProjectDialog = () => {
        dialogText.value = "";
        projectModal.close();
    }

    const submitCreateProjectDialog = () => {
        console.log(dialogText.value);
        closeCreateProjectDialog();
    }

    const addListeners = () => {
        const addProjectBtn = document.querySelector('.add-project-btn');
        addProjectBtn.addEventListener('click', openCreateProjectDialog);

        const cancelBtn = document.getElementById('cancel-btn');
        cancelBtn.addEventListener('click', closeCreateProjectDialog);

        const createBtn = document.getElementById('create-btn');
        createBtn.addEventListener('click', submitCreateProjectDialog);
    }

    addListeners();
}

export default Dialog;