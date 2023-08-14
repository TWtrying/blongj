var timed;
var timeh;
var timem;
var times;
var wday;
var jday;
const time = new Date("2021-8-16 00:00:00");


function getday(month, day) {
	var nowTime = new Date();
	var thisYear = nowTime.getFullYear();
	//今年的生日
	var birthday = new Date(thisYear, month - 1, day);

	//今年生日已过，则计算距离明年生日的天数
	if (birthday < nowTime) {
		birthday.setFullYear(nowTime.getFullYear() + 1);
	}
	var timeDec = birthday - nowTime;
	var days = timeDec / (24 * 60 * 60 * 1000);
	return Math.ceil(days);
}

function updata() {
	let now = new Date;
	let temp = (now - time) / 1000;
	let day = parseInt(temp / 86400);
	let hour = parseInt(temp / 3600) - 24 * day;
	let minutes = parseInt(temp % 3600 / 60);
	let seconds = parseInt(temp % 60);

	wday.innerHTML = getday(12,31);;
	jday.innerHTML = getday(2,10);


	if (day < 10)
		timed.innerHTML = '0' + day;
	else
		timed.innerHTML = day;
	if (hour < 10)
		timeh.innerHTML = '0' + hour;
	else
		timeh.innerHTML = hour;
	if (minutes < 10)
		timem.innerHTML = '0' + minutes;
	else
		timem.innerHTML = minutes;
	if (seconds < 10)
		times.innerHTML = '0' + seconds;
	else
		times.innerHTML = seconds;
	setTimeout(updata,1000);
}


window.onload = () => {
	timed = document.getElementById('day1');
	timeh = document.getElementById('day2');
	timem = document.getElementById('day3');
	times = document.getElementById('day4');
	wday = document.getElementById('p1');
	jday = document.getElementById('p2');

	updata();
	
}

