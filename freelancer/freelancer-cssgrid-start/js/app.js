console.log('reading data from data.json');
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    fetch('data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.portfolio);
            // build a template
            let html = '';
            data.portfolio.forEach(item => {
                html += `
                    <div class="item">
                        <img src="img/${item.id}.jpg"/>
                        <div class="content">
                            <h3>${item.projectname}</h3>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `;
            });
            console.log(html);
            document.querySelector('#portfolio').innerHTML = html;
        })
});