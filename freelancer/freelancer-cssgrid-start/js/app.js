console.log('reading data from data.json');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    fetch('data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.portfolio);
        })
});