// DOM
const BTN_CLICK = document.querySelector('.btnClick');
let clicksNumbers = document.querySelector('#clicks-text');

// Functions
let counter = 0;
const clicks = () => {
	clicksNumbers.innerHTML = counter += 1;
};

// Listeners
BTN_CLICK.addEventListener('click', clicks);
