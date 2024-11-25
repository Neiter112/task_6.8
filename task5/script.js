const input = document.querySelector('input');
const button = document.querySelector('button');
const duplicateField = document.querySelector('#duplicateField');


input.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = input.value;
})

button.addEventListener('click', function () {
    console.log(input.value);
    input.value = "";
    duplicateField.textContent = "";
})
