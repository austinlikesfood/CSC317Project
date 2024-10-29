const form = (document.getElementById('reg-form'))
console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});
