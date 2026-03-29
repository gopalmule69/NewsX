
const API_KEY = '43fd8d02a4b049148473c97ed32a6173'
let cards = document.querySelector('.cards');
let search = document.getElementById('search')
let searchBtn = document.querySelector('.searchBtn')


searchBtn.addEventListener('click', () => {
    let val = search.value;
    console.log(val)
})


const getData = async () => {
    let res = await fetch(`https://newsapi.org/v2/everything?q=rohit sharma&from=2026-02-28&sortBy=publishedAt&apiKey=${API_KEY}`)

    let resData = await res.json()
    resData.articles.forEach((article) => {
        let card = document.createElement('div');
        card.classList.add('card')
        cards.appendChild(card)
        card.innerHTML = `
     <div class="card">
            <img src="${article.urlToImage}"alt="news image">
            <div class="content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            </div>
        </div>
    `
    })


}
getData();