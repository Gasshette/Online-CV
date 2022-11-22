// The most non optimized script to change colors and create a snowfall ! Yay ! 

const date = new Date();
const christmasColor = '#f1522e';
const bodyHeight = document.body.offsetHeight;
const bodyWidth = document.body.offsetWidth;

const snow = () => {
    let appNode = null;
    let pos = 0;

    // Create a flake
    const flake = document.createElement('span');
    const size = `${Math.floor(Math.random() * 10)}px`;

    flake.style.position = 'absolute';
    flake.style.backgroundColor = 'white';
    flake.style.boxShadow = "2px 2px 2px rgba(150, 150, 150, 0.5)";
    flake.style.width = size;
    flake.style.height = size;
    flake.style.borderRadius = size;
    flake.style.top = `-${size}`;
    flake.style.left = `${Math.floor(Math.random() * bodyWidth)}px`;
    flake.style.filter = `blur(${Math.floor(Math.random() * 5)}px)`;
    flake.style.opacity = Math.random();
    flake.style.zIndex = 9999;

    // Display the flake when the app is loaded
    const interval = setInterval(() => {
        appNode = document.getElementsByClassName('app')[0];

        if (appNode) {
            appNode.appendChild(flake);
            clearInterval(interval);
        }
    }, 1000);

    // Make the flake fall
    const flakeInterval = setInterval(() => {
        const newPos = pos + 1;

        flake.style.top = `${newPos}px`;

        if (newPos >= bodyHeight / 3) {
            clearInterval(flakeInterval);
            flake.remove();
        }

        pos++;
    }, Math.floor(Math.random() * (20 - 10) + 10));
}

const minDate = new Date((new Date()).getFullYear(), 10, 20);
const maxDate = new Date((new Date()).getFullYear() + 1, 0, 15);

// if it's christmas time, display the snowfall and change colors
if ((Date.now() > minDate) && (Date.now() < maxDate)) {
    let cards = null;

    const cardsInterval = setInterval(() => {
        cards = document.getElementsByClassName('card-component');

        if (cards.length > 0) {
            console.log(cards);

            cards.forEach(c => {
                c.style.borderColor = christmasColor;
                c.querySelector('h2').style.backgroundColor = christmasColor;
                c.querySelector('.caret').style.borderRightColor = christmasColor;
                c.querySelector('.card').style.borderColor = christmasColor;
            });

            document.querySelector('.icon-language-selector').style.color = christmasColor;
            document.querySelector('.anticon-linkedin').style.color = christmasColor;
            document.querySelector('.anticon-github').style.color = christmasColor;

            document.querySelector(".christmas-hat").style.display = 'inline';

            clearInterval(cardsInterval);
        }
    }, 100);

    setInterval(() => snow(), 50);
}