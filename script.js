let box = document.getElementById('box');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let blur = document.getElementById('blur');
let dist = document.getElementById('distance');

let sliders = document.querySelectorAll('.slider');
console.log(sliders);

let left = '';
let right = '-';
let Top = '';
let bottom = '-';

function updateValues() {
	box.style.width = `${size.value}px`;
	box.style.height = `${size.value}px`;
	box.style.borderRadius = `${rad.value}px`;
	box.style.boxShadow = `${left}${dist.value}px ${Top}${dist.value}px ${blur.value}px #cbced1, ${right}${dist.value}px ${bottom}${dist.value}px ${blur.value}px #fff`;
}

sliders.forEach(e => {
	e.addEventListener('input', updateValues);
});

updateValues();

let tl = document.getElementById('light-top-left');
let tr = document.getElementById('light-top-right');
let bl = document.getElementById('light-bottom-left');
let br = document.getElementById('light-bottom-right');

tl.addEventListener('click', () => {
	left = '';
	right = '-';
	Top = '';
	bottom = '-';
	updateValues();
	console.log('top left clicked');
});

tr.addEventListener('click', () => {
	left = '-';
	right = '';
	Top = '';
	bottom = '-';
	updateValues();
	console.log('top right clicked');
});

bl.addEventListener('click', () => {
	left = '';
	right = '-';
	Top = '-';
	bottom = '';
	updateValues();
	console.log('bottom left clicked');
});

br.addEventListener('click', () => {
	left = '-';
	right = '';
	Top = '-';
	bottom = '';
	updateValues();
	console.log('bottom right clicked');
});
