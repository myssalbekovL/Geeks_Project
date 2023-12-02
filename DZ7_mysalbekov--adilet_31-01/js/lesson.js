const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579] \d{2} /







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





const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

somInput.addEventListener('input', async () => await convertCurrency('som'));
usdInput.addEventListener('input', async () => await convertCurrency('usd'));
eurInput.addEventListener('input', async () => await convertCurrency('eur'));

const currencyRates = {
  somToUsd: 0.011,
  somToEur: 0.009,
};

async function convertCurrency(fromCurrency) {
  const somValue = parseFloat(somInput.value) || 0;
  const usdValue = parseFloat(usdInput.value) || 0;
  const eurValue = parseFloat(eurInput.value) || 0;

  if (fromCurrency === 'som') {
    usdInput.value = (await convertSomToUsd(somValue)).toFixed(2);
    eurInput.value = (await convertSomToEur(somValue)).toFixed(2);
  } else if (fromCurrency === 'usd') {
    somInput.value = (await convertUsdToSom(usdValue)).toFixed(2);
    eurInput.value = (await convertUsdToEur(usdValue)).toFixed(2);
  } else if (fromCurrency === 'eur') {
    somInput.value = (await convertEurToSom(eurValue)).toFixed(2);
    usdInput.value = (await convertEurToUsd(eurValue)).toFixed(2);
  }
}

async function convertSomToUsd(somValue) {
  return somValue * currencyRates.somToUsd;
}

async function convertSomToEur(somValue) {
  return somValue * currencyRates.somToEur;
}

async function convertUsdToSom(usdValue) {
  return usdValue / currencyRates.somToUsd;
}

async function convertUsdToEur(usdValue) {
  return (usdValue / currencyRates.somToUsd) * currencyRates.somToEur;
}

async function convertEurToSom(eurValue) {
  return eurValue / currencyRates.somToEur;
}

async function convertEurToUsd(eurValue) {
  return (eurValue / currencyRates.somToEur) / currencyRates.somToUsd;
}




const block = document.querySelector('.card');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let count = 1;

const createCardElement = (data) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'cards');
    div.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.completed}</h3>
    `;
    return div;
};

const updateCard = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const cardElement = createCardElement(data);
      block.innerHTML = '';
      block.appendChild(cardElement);
    } catch (error) {
      console.error(error);
    }
  };
  
  updateCard();
  
  btnNext.onclick = async () => {
    count = count < 100 ? count + 1 : 1;
    await updateCard();
  };
  
  btnPrev.onclick = async () => {
    count = count > 1 ? count - 1 : 100;
    await updateCard();
  };
  



async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  fetchData();



const cityNameInput = document.querySelector(".cityName");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "cacb205d813e79656d060ac8413a6d3e";

cityNameInput.oninput = async (event) => {
  try {
    const response = await fetch(`${WEATHER_API}?q=${event.target.value}&appid=${API_KEY}`);
    const data = await response.json();
  
    city.innerHTML = data.name ? data.name : 'Город не найден...';
    temp.innerHTML = data?.main?.temp ? `${Math.round(data?.main?.temp - 273)}&deg;C` : '...';
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};


