// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll('.btn-color')
const javaScript = document.querySelector('#js-color')

const generateRandomColor = () => {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

const setRandomColors = () => {
    buttonsColor.forEach((buttonColor) => {
        buttonColor.innerHTML = generateRandomColor()
        buttonColor.onclick = (event) => {
            javaScript.style.color = event.target.innerHTML
        }
    })
}

window.onload = () => setRandomColors()
window.onkeydown = (event) => {
    if (event.code.toLowerCase() === 'space') {
        event.preventDefault()
        setRandomColors()
    }
}

// SLIDER BLOCK//
// First Slider
const slides1 = document.querySelectorAll('.slide');
const next1 = document.querySelector('#next');
const prev1 = document.querySelector('#prev');
let index1 = 0;

const hideSlide1 = () => {
    slides1.forEach((slide) => {
        slide.style.opacity = 0;
        slide.classList.remove('active_slide');
    });
};

const showSlide1 = (i = 0) => {
    slides1[i].style.opacity = 1;
    slides1[i].classList.add('active_slide');
};

hideSlide1();
showSlide1(index1);

const autoSlider1 = () => {
    setInterval(() => {
        index1 = (index1 + 1) % slides1.length;
        hideSlide1();
        showSlide1(index1);
    }, 3000);
};

next1.onclick = () => {
    index1 = (index1 + 1) % slides1.length;
    hideSlide1();
    showSlide1(index1);
};

prev1.onclick = () => {
    index1 = index1 > 0 ? index1 - 1 : slides1.length - 1;
    hideSlide1();
    showSlide1(index1);
};

autoSlider1();

// Second Slider
const slides2 = document.querySelectorAll('.slides .slide');
let currentIndex2 = 0;

const nextSlide2 = () => {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    updateSlide2();
};

const updateSlide2 = () => {
    slides2.forEach((slide, index) => {
        slide.style.transform = index === currentIndex2 ? 'translateX(0)' : 'translateX(100%)';
    });
};

setInterval(nextSlide2, 1000);




