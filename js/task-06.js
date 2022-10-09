const inputEl = document.querySelector('input[data-length="6"]');

const testing = () => {
    if (inputEl.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
};
inputEl.addEventListener('blur', testing);