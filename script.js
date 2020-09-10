let box = document.getElementById('box');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let dist = document.getElementById('distance');

size.addEventListener('input', function () {
	box.style.width = `${this.value}px`;
	box.style.height = `${this.value}px`;
});

rad.addEventListener('input', function () {
	box.style.borderRadius = `${this.value}px`;
});

dist.addEventListener('input', function () {
	box.style.boxShadow = `${this.value}px ${this.value}px 20px #cbced1, -${this.value}px -${this.value}px 20px #fff`;
	console.log(this.value);
});
