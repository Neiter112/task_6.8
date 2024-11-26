change.addEventListener('click', function (event) {
    event.preventDefault();
    const userText = prompt('Напишите текст и посмотрите, что случится.');
    const change = document.querySelector('#change');
    change.textContent = userText;
})
