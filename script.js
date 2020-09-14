let lightSourceIconPath = 'images/flashlight.png';
let output = document.getElementById('output');
let box = document.getElementById('box');
let copyText = document.getElementById('copy');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let blur = document.getElementById('blur');
let dist = document.getElementById('distance');

let left = '';
let right = '-';
let Top = '';
let bottom = '-';

function copyToClipboard(copyClip) {
	const el = document.createElement('textarea');
	el.value = copyClip;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

let snippet = '';
copyText.addEventListener('click', function () {
	copyToClipboard(snippet);
	this.innerHTML = 'Copied!';
	setTimeout(() => {
		this.innerHTML = 'Copy';
	}, 2000);
});

function updateValues() {
	box.style.transform = `scale(${size.value},${size.value})`;
	document.querySelectorAll('.UIsample').forEach(e => {
		e.style.borderRadius = `${rad.value}px`;
		e.style.boxShadow = `${left}${dist.value}px ${Top}${dist.value}px ${blur.value}px #cbced1, ${right}${dist.value}px ${bottom}${dist.value}px ${blur.value}px #fff`;
	});

	snippet = `background-color: #e6e7ee;\nborder-radius: ${rad.value}px;\nbox-shadow: ${left}${dist.value}px ${Top}${dist.value}px ${blur.value}px #cbced1,\n            ${right}${dist.value}px ${bottom}${dist.value}px ${blur.value}px #fff;`;
	output.value = snippet;
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
