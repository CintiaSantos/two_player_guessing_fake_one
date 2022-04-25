let minRange = document.querySelector('.min-range-input');
let maxRange = document.querySelector('.max-range-input');
let updateButton = document.querySelector('.update-button');
let rangeStart = document.querySelector('.range-start');
let rangeEnd = document.querySelector('.range-end');
let randomNumber = randomNumberGenerator(1, 100);

function defaultRange(){
	parseInt(minRange.value) = 1;
	parseInt(maxRange.value) = 100;
}

function randomNumberGenerator(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

function customNumberGenerator() {
	return Math.floor(Math.random() * maxRange.value) + parseInt(minRange.value);
}

updateButton.addEventListener('click', updateRanges);

function updateRanges(){
	updateMinRange();
	updateMaxRange();
	randomNumber = customNumberGenerator();
	console.log("custom number", randomNumber);
}

function updateMinRange(){
	if (minRange.value === ''){
		rangeStart.innerText = 1;
	} else {
		rangeStart.innerText = minRange.value;
	}
}

function updateMaxRange(){
	if (maxRange.value === ''){
		rangeEnd.innerText = 100;
	} else {
		rangeEnd.innerText = maxRange.value;
	}
}
