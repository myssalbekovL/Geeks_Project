//TAB SLOEDER

const tabsContentCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParents = document.querySelector('.tab_content_items')

const hightTabsContentCards = () => {
    tabsContentCards.forEach((tabContentCard) => {
        tabContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

hightTabsContentCards()
showTabsContentCards()

tabsItemsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hightTabsContentCards()
                showTabsContentCards(tabItemIndex)
            }
        })
    }
}

let currentIndex = 0;
let intervalId;

const startAutoSlider = () => {
    intervalId = setInterval(() => {
        hightTabsContentCards();
        showTabsContentCards(currentIndex);
        currentIndex = (currentIndex + 1) % tabsItems.length;
    }, 3000);
};

startAutoSlider();

tabsItemsParents.onclick = (event) => {
    clearInterval(intervalId);
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hightTabsContentCards();
                showTabsContentCards(tabItemIndex);
                currentIndex = tabItemIndex;
                startAutoSlider();
            }
        });
    }
};

//converter
const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

somInput.addEventListener('input', () => convertCurrency('som'));
usdInput.addEventListener('input', () => convertCurrency('usd'));
eurInput.addEventListener('input', () => convertCurrency('eur'));

function convertCurrency(fromCurrency) {
    const somValue = parseFloat(somInput.value) || 0;
    const usdValue = parseFloat(usdInput.value) || 0;
    const eurValue = parseFloat(eurInput.value) || 0;

    const somToUsdRate = 0.011;
    const somToEurRate = 0.009;

    if (fromCurrency === 'som') {
        usdInput.value = (somValue * somToUsdRate).toFixed(2);
        eurInput.value = (somValue * somToEurRate).toFixed(2);
    } else if (fromCurrency === 'usd') {
        somInput.value = (usdValue / somToUsdRate).toFixed(2);
        eurInput.value = (usdValue / somToUsdRate * somToEurRate).toFixed(2);
    } else if (fromCurrency === 'eur') {
        somInput.value = (eurValue / somToEurRate).toFixed(2);
        usdInput.value = (eurValue / somToEurRate / somToUsdRate).toFixed(2);
    }
}


//
const block = document.querySelector('#card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let count = 1;

const updateCard = (data) => {
    const existingCard = block.querySelector('#card');

    if (existingCard) {
        existingCard.querySelector('h2').textContent = data.title;
        existingCard.querySelector('span').textContent = data.id;
        existingCard.querySelector('h3').textContent = data.completed;
    } else {
        const div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `;
        block.appendChild(div);
    }
};

const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            updateCard(data);
        })
        .catch(error => console.error(error));
};

btnNext.onclick = () => {
    count++;
    fetchData();
};

btnPrev.onclick = () => {
    if (count > 1) {
        count--;
        fetchData();
    }
};

//запрос
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))