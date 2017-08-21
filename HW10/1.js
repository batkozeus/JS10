document.getElementById('btn1').onclick = BTN1;

function BTN1 () {
	var a = document.getElementById('num11').value;
	var b = document.getElementById('num12').value;
	var res1 = document.getElementById('result1');
	if (a>b) {
		console.log('Максимальное число ' + a);
		res1.innerHTML = 'Максимальное число ' + a;
	}
	else {
		console.log('Максимальное число ' + b);
		res1.innerHTML = 'Максимальное число ' + b;
	}
}	


document.getElementById('btn2').onclick = BTN2;

function BTN2 () {
	var c = document.getElementById('num21').value;
	var d = document.getElementById('num22').value;
	var res2 = document.getElementById('result2');
	if (c>d) {
		console.log('Максимальное число ' + с);
		res2.innerHTML = 'Максимальное число ' + c;
	}
	else if (c==d) {
		console.log('Числа равны');
		res2.innerHTML = 'Числа равны';
	}
	else {
		console.log('Максимальное число ' + d);
		res2.innerHTML = 'Максимальное число ' + d;
	}
}	


document.getElementById('btn3').onclick = BTN3;

function BTN3 () {
	var e = document.getElementById('num3').value;
	var res3 = document.getElementById('result3');
	if (e>=1 && e<=20) {
		console.log('Подъезд 1');
		res3.innerHTML = 'Подъезд 1';
	}
	else if (e>=21 && e<=48) {
		console.log('Подъезд 2');
		res3.innerHTML = 'Подъезд 2';
	}
	else if (e>=49 && e<=90) {
		console.log('Подъезд 3');
		res3.innerHTML = 'Подъезд 3';
	}
	else {
		console.log('Вы не в том доме');
		res3.innerHTML = 'Вы не в том доме';
	}
}	


document.getElementById('btn4').onclick = BTN4;

function BTN4 () {
	var login = document.getElementById('num41').value;
	var password = document.getElementById('num42').value;
	var res4 = document.getElementById('result4');
	if ((login=='ivan' && password=='334455') || (login=='alex' && password=='777') || (login=='petr' && password=='b5678')) {
		console.log('Добро пожаловать');
		res4.innerHTML = 'Добро пожаловать';
	}
	else {
		console.log('Ошибка входа');
		res4.innerHTML = 'Ошибка входа';
	}
}	


document.getElementById('btn5').onclick = BTN5;

function BTN5 () {
	var e = document.getElementById('num5').value;
	var f;
	var res51 = document.getElementById('result51');
	var res52 = document.getElementById('result52');
	if (e<=2001) {
		f = 2017-e;
		console.log('Вам - ' + f + ' лет');
		console.log('Добро пожаловать');
		res51.innerHTML = 'Вам - ' + f + ' лет';
		res52.innerHTML = 'Добро пожаловать';
	}
	else {
		f = 2017-e;
		console.log('Вам - ' + f + ' лет');
		console.log('Вход воспрещен');
		res51.innerHTML = 'Вам - ' + f + ' лет';
		res52.innerHTML = 'Вход воспрещен';
	}
}	

document.getElementById('btn6').onclick = BTN6;

function BTN6 () {
	var age = document.getElementById('num6').value;
	age = parseInt(age);
	var res6 = document.getElementById('result6');
	if (age>=0) {
		if (age>=0 && age<3) {
		console.log('Ваша надбавка - 0%');
		res6.innerHTML = 'Ваша надбавка - 0%';
		}
		else if (age>=3 && age<10) {
		console.log('Ваша надбавка - 10%');
		res6.innerHTML = 'Ваша надбавка - 10%';
		}
		else if (age>=10 && age<20) {
		console.log('Ваша надбавка - 20%');
		res6.innerHTML = 'Ваша надбавка - 20%';
		}
		else {
		console.log('Ваша надбавка - 30%');
		res6.innerHTML = 'Ваша надбавка - 30%';
		}
	}
	else {
		console.log('Вы тупите');
		res6.innerHTML = 'Вы тупите';
	}
}	