let lightSourceIconPath = 'images/flashlight.png';

let box = document.getElementById('box');
let box2 = document.getElementById('box-2');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let blur = document.getElementById('blur');
let dist = document.getElementById('distance');

let left = '';
let right = '-';
let Top = '';
let bottom = '-';

function updateValues() {
	box.style.transform = `scale(${size.value},${size.value})`;
	document.querySelectorAll('.UIsample').forEach(e => {
		e.style.borderRadius = `${rad.value}px`;
		e.style.boxShadow = `${left}${dist.value}px ${Top}${dist.value}px ${blur.value}px #cbced1, ${right}${dist.value}px ${bottom}${dist.value}px ${blur.value}px #fff`;
	});

	//console.clear();
	console.log(size.value);
	console.log(rad.value);
	console.log(blur.value);
	console.log(dist.value);
}

document.querySelectorAll('.slider').forEach(e => {
	e.addEventListener('input', updateValues);
});

updateValues();

let tl = document.getElementById('light-top-left');
let tr = document.getElementById('light-top-right');
let bl = document.getElementById('light-bottom-left');
let br = document.getElementById('light-bottom-right');

let lightIconReset = direction => {
	tl.innerHTML = '';
	tr.innerHTML = '';
	bl.innerHTML = '';
	br.innerHTML = '';
	direction.innerHTML = `<img src="${lightSourceIconPath}" alt="" />`;
};

tl.addEventListener('click', function () {
	left = '';
	right = '-';
	Top = '';
	bottom = '-';
	updateValues();
	lightIconReset(this);
});

tr.addEventListener('click', function () {
	left = '-';
	right = '';
	Top = '';
	bottom = '-';
	updateValues();
	lightIconReset(this);
});

bl.addEventListener('click', function () {
	left = '';
	right = '-';
	Top = '-';
	bottom = '';
	updateValues();
	lightIconReset(this);
});

br.addEventListener('click', function () {
	left = '-';
	right = '';
	Top = '-';
	bottom = '';
	updateValues();
	lightIconReset(this);
});
