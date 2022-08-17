const time = 10000; // ms - hero-cafe
const step = 1; 
const time2 = 20000; // ms hero-track
const step2 = 1; 
const time3 = 50000; // ms advantages -milk
const step3 = 1; 

function outNum(num, elem) {
	let k = document.querySelector('#' + elem);
	z = 0;
	let r = Math.round(time/(num/step));
	let interval = setInterval(() => {
		z = z + step;
		if (z == num) {
			clearInterval(interval);
		}
		k.innerHTML = z;
	},
		r);
}
function outNum2(num2, elem2) {
	let j = document.querySelector('#' + elem2);
	a = 0;
	let s = Math.round(time2/(num2/step2));
	let interval = setInterval(() => {
		a = a + step2;
		if (a == num2) {
			clearInterval(interval);
		}
		j.innerHTML = a;
	},
		s);
}
function outNum3(num3, elem3) {
	let l = document.querySelector('#' + elem3);
	b = 0;
	let f = Math.round(time3/(num3/step3));
	let interval = setInterval(() => {
		b = b + step3;
		if (b == num3) {
			clearInterval(interval);
		}
		l.innerHTML = b;
	},
		f);
}

outNum(16, 'cafe-count');
outNum2(50, 'track-count');
outNum3(726, 'milk-count');