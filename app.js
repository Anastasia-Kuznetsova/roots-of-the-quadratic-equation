document.querySelector('button').onclick = myClick;
function myClick(){
let a = document.querySelector('.i-1').value;
let b = document.querySelector('.i-2').value;
let c = document.querySelector('.i-3').value;
console.log(a);
console.log(b);
console.log(c);
	if(a != 0){
		let d = b**2 - 4*a*c;
		if(d > 0){
		let d1 = Math.sqrt(d);
		let b1 = Number(b);
		let a1 = Number(a);
		b1 = -b1;
		let x1 = ((b1 + d1) / (2*a1));
		let x2 = ((b1 - d1) / (2*a1));
		document.querySelector('.out').innerHTML =(`Первый корень равен: ${x1}. Второй корень равен: ${x2}.`);
		}
		if(d == 0){
		let b1 = Number(b);
		let a1 = Number(a);
		b1 = -b1;
		let x = (b1 / (2*a1));
		document.querySelector('.out').innerHTML =(`Два одинаковых корня, равных ${x}.`);
		}
		if(d < 0) {
		d1 = Math.sqrt(d * (-1));
		let b1 = Number(b);
		let a1 = Number(a);
		b1 = -b1;
		let re =(b1 / (2*a1));
		let im =(d1 / (2*a1));		
		document.querySelector('.out').innerHTML =(`Первый корень уравнения равен: ${re} + ${im}i. Второй корень уравнения равен: ${re} - ${im}i`);
		}
	}
	if(a == 0){
		document.querySelector('.out').innerHTML = (`Вы не ввели коэффициент "а".`);		
	}
}
