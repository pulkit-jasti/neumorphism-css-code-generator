let box = document.getElementById('box');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let blur = document.getElementById('blur');
let dist = document.getElementById('distance');

let sliders = document.querySelectorAll('.slider');
console.log(sliders);

function updateValues() {
	box.style.width = `${size.value}px`;
	box.style.height = `${size.value}px`;
	box.style.borderRadius = `${rad.value}px`;
	box.style.boxShadow = `${dist.value}px ${dist.value}px ${blur.value}px #cbced1, -${dist.value}px -${dist.value}px ${blur.value}px #fff`;
}

sliders.forEach(e => {
	e.addEventListener('input', updateValues);
});

updateValues();
