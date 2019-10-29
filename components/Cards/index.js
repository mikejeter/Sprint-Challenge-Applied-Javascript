const content = document.querySelector('.cards-container')

 axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const news = response.data.articles
        for(info in news) {
            news[info].forEach(article => content.appendChild(createArticle(article)))
        }
    })
    .catch(err => console.log(err))

 function createArticle(article){
    const card = document.createElement('div')
    const title = document.createElement('div')
    const writer = document.createElement('div')
    const iBox = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')

     card.classList.add('card')
    title.classList.add('headline')
    writer.classList.add('author')
    iBox.classList.add('img-container')
    image.src = article.authorPhoto
    span.textContent = `By ${article.authorName}`
    title.textContent = article.headline

     card.appendChild(title)
    card.appendChild(writer)
    card.appendChild(span)
    writer.appendChild(iBox)
    iBox.appendChild(image)

     return card;
 }