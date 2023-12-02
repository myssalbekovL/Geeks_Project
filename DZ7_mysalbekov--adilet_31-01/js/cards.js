async function getNews() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function renderNews() {
  const news = await getNews();
  const newsContainer = document.getElementById('news-container');
  news.forEach((item) => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      const newsImg = document.createElement('img');
      newsImg.src = 'https://picsum.photos/400/200?random=' + item.id;
      const newsTitle = document.createElement('h2');
      newsTitle.innerText = item.title;
      const newsBody = document.createElement('p');
      newsBody.innerText = item.body;
      newsCard.appendChild(newsImg);
      newsCard.appendChild(newsTitle);
      newsCard.appendChild(newsBody);
      newsContainer.appendChild(newsCard);
  });
}

renderNews();