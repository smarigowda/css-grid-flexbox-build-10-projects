const arrows = document.querySelector('.left-content');
const app = document.querySelector('.app');
app.classList.add('show-menu');
arrows.addEventListener('click', e => {
    const classList = e.target.classList;
    if(classList.value.includes('arrow-left')) {
        const leftArrow = e.target;
        leftArrow.nextElementSibling.style.display = 'block';
        leftArrow.style.display = 'none';
        app.classList.remove('show-menu');
        app.classList.add('hide-menu');
    }
    if(classList.value.includes('arrow-right')) {
        const rightArrow = e.target;
        const leftArrow = rightArrow.parentElement.firstElementChild;
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'none';
        app.classList.remove('hide-menu');
        app.classList.add('show-menu');
    }
})