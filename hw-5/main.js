// Task 1
let btn = document.querySelector('.btn')
function startGame () {
	let score = 0;
	let delay = 30  * 1000;
	let greenCircle = document.querySelector('.green__circle');
	let yellowCircle = document.querySelector('.yellow__circle');
	let blueCircle = document.querySelector('.blue__circle');
	let redCircle = document.querySelector('.red__circle');
	let scoreDiv = document.querySelector('.score p');
	let timeDiv = document.querySelector('.score p:last-child');
	alertScoreInDiv();
	alertTimeInDiv();
	greenCircle.addEventListener('click', function () {
		score +=2;
		alertScoreInDiv();
	});
	yellowCircle.addEventListener('click', function () {
		score +=5;
		alertScoreInDiv();
	});
	blueCircle.addEventListener('click', function () {
		score +=8;
		alertScoreInDiv();
	});
	redCircle.addEventListener('click', function () {
		score += 10;
		alertScoreInDiv();
	});
	function alertTimeInDiv () {
		let timeLeft = delay / 1000;
		timeDiv.innerHTML = "Времени осталось: " + timeLeft;
		let result = setInterval (function() {
			timeLeft--;
			timeDiv.innerHTML = "Времени осталось: " + timeLeft;
			if (timeLeft === 0) {
				clearInterval(result);
			}
		}, 1000)
	}
	function alertScoreInDiv () {
		scoreDiv.innerHTML = "Ваш счёт: " + score;
	}
	function alertScore () {
		alert('Game Over your score is ' + score);
	}
	setTimeout(alertScore, delay);
}
btn.addEventListener('click', startGame);
// Task 2
function makeProfileTimer () {
	let time = performance.now();
	return function() {
		return time = (performance.now() - time) / 1000;
	};
}
let timer = makeProfileTimer();
alert('Замеряем время работы этого alert');
alert(timer());
// Task 3
let result = (function (time) {
	let timeLeft = time;
	console.log(timeLeft)
	let res = setInterval (function() {
		timeLeft--;
		if (timeLeft >= 1) {
			console.log(timeLeft)
		} else 	console.log('GO') // чтоб вместо 0 выводило "GO"
		if (timeLeft === 0) {
			clearInterval(res);
		}
	}, 1000)
	return res;
});
result(2);
// Task 4