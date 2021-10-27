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

createSlide('images/autumn-3840138_1280.jpg');

let click = 0;
rightArrow.addEventListener('click', () => {
    clearDiv();
    click += 1;
    slideConditions();
})

leftArrow.addEventListener('click', () => {
    clearDiv();
    click -= 1;
    slideConditions();
})

function clearDiv () {
    while (slideDiv.firstChild) {
        slideDiv.removeChild(slideDiv.firstChild);
    }
}

function slideConditions () {
    if (click === 1 || click === -2) {
        createSlide('images/italy-6735340_1280.jpg');
    } else if (click === 2 || click === -1) {
        createSlide('images/lighthouse-6581129_1280.jpg');
    } else {
        createSlide('images/autumn-3840138_1280.jpg');
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