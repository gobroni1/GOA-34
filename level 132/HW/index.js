async function news() {
    const apiKey = '7be057fdf1af414b879c3350e2d02601';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
        
        data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `<h3>${article.title}</h3><p>${article.description || 'დეტალები მიუწვდომელია'}</p>`;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        document.getElementById('news-container').innerHTML = 'no news today';
    }
}

news();