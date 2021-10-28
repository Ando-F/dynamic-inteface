// drop-down menu
const menu = document.getElementById('hamburger-menu');
const hiddenList = document.getElementById('hidden-list');

let timesClicked = 0;

menu.addEventListener('click', () => {
    hideOpenList();
})

function hideOpenList () {
    if (timesClicked < 1) {
        hiddenList.classList.replace('hide-list', 'show-list');
        timesClicked += 1;
    } else {
        hiddenList.classList.replace('show-list', 'hide-list');
        timesClicked = 0;
    }
}

// slides
let amountOfImages = 0;
let dotsQuantity = 0;

const slideDiv = document.getElementById('slide-div');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const dotsDiv = document.getElementById('dots');

createSlide('images/autumn-3840138_1280.jpg');
dotsOne();

let click = 0;
rightArrow.addEventListener('click', () => {
    click += 1;
    slideConditions();
})

leftArrow.addEventListener('click', () => {
    click -= 1;
    slideConditions();
})

function clearDiv () {
    while (slideDiv.firstChild) {
        slideDiv.removeChild(slideDiv.firstChild);
    }
}

function clearDots () {
    while (dotsDiv.firstChild) {
        dotsDiv.removeChild(dotsDiv.firstChild);
    }
}

function slideConditions () {
    if (click === 1 || click === -2) {
        clearDiv();
        createSlide('images/italy-6735340_1280.jpg');
        dotsTwo();
    } else if (click === 2 || click === -1) {
        clearDiv();
        createSlide('images/lighthouse-6581129_1280.jpg');
        dotsThree();
    } else {
        clearDiv();
        createSlide('images/autumn-3840138_1280.jpg');
        dotsOne();
        click = 0;
    }
}

function createSlide (image) {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-slide');
    imageDiv.id = amountOfImages;
    amountOfImages += 1;

    const addImage = document.createElement('img');
    addImage.classList.add('image');
    addImage.src = image;

    imageDiv.appendChild(addImage);
    slideDiv.appendChild(imageDiv);
}

// dots
function dotsOne () {
    clearDots();
    createBlackDot();
    createEmptyDot();
    createEmptyDot();
    dotsQuantity = 0;
}

function dotsTwo () {
    clearDots();
    createEmptyDot();
    createBlackDot();
    createEmptyDot();
    dotsQuantity = 0;
}

function dotsThree () {
    clearDots();
    createEmptyDot();
    createEmptyDot();
    createBlackDot();
    dotsQuantity = 0;
}

function createEmptyDot () {
    const dot = document.createElement('img');
    dot.src = 'images/rec.png'
    dot.classList.add('dot');
    dot.setAttribute('data-index', dotsQuantity);
    dotsQuantity += 1;

    dotsDiv.appendChild(dot);
}

function createBlackDot () {
    const dot = document.createElement('img');
    dot.src = 'images/record.png'
    dot.classList.add('dot');
    dot.setAttribute('data-index', dotsQuantity);
    dotsQuantity += 1;

    dotsDiv.appendChild(dot);
}

const firstDot = document.querySelector('[data-index="0"]');
firstDot.addEventListener('click', () => {
    click = 0;
    slideConditions();
})

const secondDot = document.querySelector('[data-index="1"]');
secondDot.addEventListener('click', () => {
    click = 1;
    slideConditions();
})

const thirdDot = document.querySelector('[data-index="2"]');
thirdDot.addEventListener('click', () => {
    click = 2;
    slideConditions();
})
