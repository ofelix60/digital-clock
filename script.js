const dateDisplay = document.getElementById('date');
const timeDisplay = document.getElementById('time');
const twentyfour = document.getElementById('military');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const today = new Date();

let date = `${days[today.getDay()]} ${today.getMonth() < 10 ? '0' : ''}${
	today.getMonth() + 1
}/${
	today.getDate().length < 10 ? '0' : ''
}${today.getDate()}/${today.getFullYear()}`;

let defaultTime = setInterval(time, 1000);
dateDisplay.innerHTML = `<p>${date}</p>`;
let militaryTime = '';
let toggle = 0;

function time() {
	const today = new Date();
	timeDisplay.innerHTML = today.toLocaleTimeString();
}
function twentyfourTime() {
	const today = new Date();
	timeDisplay.innerHTML = today.toLocaleTimeString('en-GB');
}

function formatSwitch() {
	if (toggle == 0) {
		clearInterval(defaultTime);
		militaryTime = setInterval(twentyfourTime, 1000);
		defaultTime = '';
		twentyfour.innerText = '12hr';
		toggle = 1;
		return;
	}

	if (toggle == 1) {
		clearInterval(militaryTime);
		defaultTime = setInterval(time, 1000);
		militaryTime = '';
		twentyfour.innerText = '24hr';
		toggle = 0;
		return;
	}
}

twentyfour.addEventListener('click', function (e) {
	e.preventDefault();
	formatSwitch();
});
