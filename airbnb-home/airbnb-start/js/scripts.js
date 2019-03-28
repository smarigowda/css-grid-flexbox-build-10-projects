const footerButton = document.querySelector('.footer-button');

footerButton.addEventListener('click', e => {
    const footer = document.querySelector('.footer');
    if(footer.classList.contains('active')) {
        footer.classList.remove('active');
        e.target.innerText = 'Terms, Privacy, Currency & more'
    } else {
        footer.classList.add('active');
        e.target.innerText = 'X Close';
    }
})