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