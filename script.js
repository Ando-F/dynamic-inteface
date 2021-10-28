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

const slideDiv = document.getElementById('slide-div');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const dotsDiv = document.getElementById('dots');

// create elements on first page load
createSlide('images/autumn-3840138_1280.jpg');

// add event listeners to right and left arrows
let click = 0;
rightArrow.addEventListener('click', () => {
    click += 1;
    slideConditions();
})

leftArrow.addEventListener('click', () => {
    click -= 1;
    slideConditions();
})

// delete current image before loading next one
function clearDiv () {
    while (slideDiv.firstChild) {
        slideDiv.removeChild(slideDiv.firstChild);
    }
}

// when to clear div, show images and dots
function slideConditions () {
    if (click === 1 || click === -2) {
        clearDiv();
        createSlide('images/italy-6735340_1280.jpg');
        unmarkExactDot(firstDot);
        unmarkExactDot(thirdDot);
        markExactDot(secondDot);
    } else if (click === 2 || click === -1) {
        clearDiv();
        createSlide('images/lighthouse-6581129_1280.jpg');
        unmarkExactDot(secondDot);
        unmarkExactDot(firstDot);
        markExactDot(thirdDot);
    } else {
        clearDiv();
        createSlide('images/autumn-3840138_1280.jpg');
        unmarkExactDot(thirdDot);
        unmarkExactDot(secondDot);
        markExactDot(firstDot);
        click = 0;
    }
}

// function for creating images
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

// create dots
const firstDot = document.getElementById('one');
const secondDot = document.getElementById('two');
const thirdDot = document.getElementById('three');

function markExactDot (dotNumber) {
    clearDots(dotNumber);

    const dot = document.createElement('img');
    dot.src = 'images/record.png'
    dot.classList.add('dot');
    dotNumber.appendChild(dot);
}

function unmarkExactDot (dotNumber) {
    clearDots(dotNumber);

    const dot = document.createElement('img');
    dot.src = 'images/rec.png'
    dot.classList.add('dot');
    dotNumber.appendChild(dot);
}

// delete current dots to load new ones
function clearDots (dotNumber) {
    while (dotNumber.firstChild) {
        dotNumber.removeChild(dotNumber.firstChild);
    }
}

// adding event listeners for dots
firstDot.addEventListener('click', (e) => {
    e.preventDefault();
    click = 0;

    clearDiv();
    createSlide('images/autumn-3840138_1280.jpg');
    unmarkExactDot(thirdDot);
    unmarkExactDot(secondDot);
    markExactDot(firstDot);
})

secondDot.addEventListener('click', (e) => {
    e.preventDefault();
    click = 1;

    clearDiv();
    createSlide('images/italy-6735340_1280.jpg');
    unmarkExactDot(firstDot);
    unmarkExactDot(thirdDot);
    markExactDot(secondDot);
})

thirdDot.addEventListener('click', (e) => {
    e.preventDefault();
    click = 2;

    clearDiv();
    createSlide('images/lighthouse-6581129_1280.jpg');
    unmarkExactDot(secondDot);
    unmarkExactDot(firstDot);
    markExactDot(thirdDot);
})

// making button clicked every 5 sec
setInterval(function () {rightArrow.click()}, 5000);
