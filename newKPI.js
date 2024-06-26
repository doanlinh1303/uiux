document.addEventListener('DOMContentLoaded', function () {
    const formSteps = document.querySelectorAll('.form-step');
    const nextButtons = document.querySelectorAll('.btn-next');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const submitButton = document.querySelector('.btn-submit');
    const modal = document.getElementById('confirmModal');
    const kpiModal = document.getElementById('id01');
    const confirmButton = document.querySelector('.btn-confirm');
    const cancelButton = document.querySelector('.btn-cancel');
    const kpiField = document.getElementById('kpiField');
    const customFieldContainer = document.getElementById('customFieldContainer');
    const steps = document.querySelectorAll('.progress-bar .step');

    let currentStep = 0;

    function updateFormSteps() {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('form-step-active', index === currentStep);
        });

        document.querySelectorAll('.step').forEach((step, index) => {
            step.querySelector('.step-number').classList.toggle('active', index <= currentStep);
            step.classList.toggle('active', index === currentStep);
        });
    }

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            currentStep = index;
            updateFormSteps();
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep++;
            updateFormSteps();
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
        });
    });

    submitButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    confirmButton.addEventListener('click', () => {
        modal.style.display = 'none';
        kpiModal.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    kpiField.addEventListener('change', function () {
        if (this.value === 'custom') {
            customFieldContainer.style.display = 'flex';
        } else {
            customFieldContainer.style.display = 'none';
        }
    });
});
