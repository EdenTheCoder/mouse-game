let score = 0;
const startbtn = document.getElementById("startbtn");
const btns = {};
let currentbtn = 0;
let started = 0;

for (let i = 1; i != 26; i++) {
	console.log(i);
	btns[i] = document.getElementById("btn" + i);
}

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function trunOnButtonI(i) {
	btns[currentbtn].style.opacity = 0;
	currentbtn = i;
	btns[i].style.opacity = 1;
}

startbtn.addEventListener("click", function () {
	for (let i = 1; i != 26; i++) {
		btns[i].style.opacity = 0;
	}
	if (started == 0) {
		console.log(score);

		currentbtn = randInt(1, 25);
		trunOnButtonI(randInt(1, 25));
		started = 1;
		startbtn.innerText = "end";
	} else {
		document.getElementById("score").innerText = "score :" + score;
		score = 0;
		started = 0;
		startbtn.innerText = "start";
		currentbtn = 0;
	}
});

for (let i = 1; i != 26; i++) {
	document.getElementById("btn" + i).addEventListener("click", function () {
		if (currentbtn == i) {
			trunOnButtonI(randInt(1, 25));
			console.log(i);
			console.log("randint = " + currentbtn);
			score += 1;
		} else {
			document.getElementById("score").innerText = "score :" + score;
			score = 0;
			started = 0;
			startbtn.innerText = "start";
			currentbtn = 0;
			for (let i = 1; i != 26; i++) {
				btns[i].style.opacity = 0;
			}
		}
	});
}

document.getElementById("area").addEventListener("mousemove", function (e) {
	(document.getElementById("curser").style.left = e.clientX + "px"),
		(document.getElementById("curser").style.top = e.clientY + "px");
});

function delayms() {
	document.getElementById("curser").style.transition = "all " + document.getElementById("delay-ms").value + "ms ease-out";
	console.log(document.getElementById("delay-ms").value);
}
let curser = true;
function curserToggle() {
	if (curser == true) {
		curser = false;
		document.getElementById("curser").style.opacity = 0;
		document.getElementById("curser-swich").innerText = "curser: off";
	} else {
		curser = true;
		document.getElementById("curser").style.opacity = 1;
		document.getElementById("curser-swich").innerText = "curser: on";
	}
}
