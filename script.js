const API_KEY = '43fd8d02a4b049148473c97ed32a6173';
let cards = document.querySelector('.cards');
let search = document.getElementById('search');
let searchBtn = document.querySelector('.searchBtn');


const getData = async (query) => {
    cards.innerHTML = "";

    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`);
    let data = await res.json();

    data.articles.forEach((article) => {

        if (!article.urlToImage) return; 

        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${article.urlToImage}" alt="news image">
            <div class="content">
                <h3>${article.title}</h3>
                <p>${article.description || "No description available"}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            window.open(article.url, "_blank");
        });

        cards.appendChild(card);
    });
};
getData("india");
searchBtn.addEventListener('click', () => {
    let val = search.value;
    if (val !== "") {
        getData(val);
    }
});

document.querySelectorAll('.bouttons button').forEach(btn => {
    btn.addEventListener('click', () => {
        getData(btn.innerText);
    });
});
