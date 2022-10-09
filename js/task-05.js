const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output')

const inputName = () => {
    spanEl.textContent = inputEl.value
    if (inputEl.value.trim() === "".trim()) {
        spanEl.textContent = 'Anonymous'
    }
}

inputEl.addEventListener('input', inputName)