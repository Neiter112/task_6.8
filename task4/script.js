change.addEventListener('click', function (event) {
    event.preventDefault();
    const userText = prompt('Что вы хотите от меня?');
    const change = document.querySelector('#change');
    change.textContent = userText;
})

