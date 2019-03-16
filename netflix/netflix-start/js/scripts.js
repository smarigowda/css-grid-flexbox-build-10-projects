const inputs = document.querySelectorAll('form .field input');

const validateInput = event => {
    const states = ['valid', 'invalid']
    let classes;
    if (event.target.value.length === 0) {
        classes = states[1];
    } else {
        classes = states[0];
    }

    // add alert
    if (classes === 'invalid') {
        const errorDiv = document.createElement('div');
        errorDiv.appendChild(document.createTextNode('This field is mandatory'));
        errorDiv.classList.add('alert');
        
        const form = event.target.parentElement.parentElement;
        const nextElementSibling = event.target.parentElement.nextElementSibling;
        if(event.target.parentElement.nextElementSibling.classList.value !== 'alert') {
            form.insertBefore(errorDiv, nextElementSibling);
        }
    }
    
    // remove alert
    if (classes === 'valid') {
        if(event.target.parentElement.nextElementSibling.classList.value === 'alert') {
            console.log('alert exists, remove it');
            event.target.parentElement.nextElementSibling.remove();
        }
    }
}
inputs.forEach(input => {
    input.addEventListener('blur', validateInput);
    input.addEventListener('input', validateInput)
});

