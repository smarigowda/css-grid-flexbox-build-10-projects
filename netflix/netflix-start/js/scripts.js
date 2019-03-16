const inputs = document.querySelectorAll('form .field input');
console.log(inputs);
const validateInput = event => {
    console.dir(event.target);
    const states = ['valid', 'invalid']
    let classes;
    if (event.target.value.length === 0) {
        classes = states[1];
    } else {
        classes = states[0];
    }
    console.log(classes);
    // add or remove alert
    if (classes === 'invalid') {
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('This field is mandatory'));
        errorDiv.classList.add('alert');
        console.log(errorDiv);
        const form = event.target.parentElement.parentElement;
        console.dir(event.target.parentElement);
        const nextElementSibling = event.target.parentElement.nextElementSibling;
        form.insertBefore(errorDiv, nextElementSibling);
    }
}
inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput)
});

