var buttonA = document.getElementById("add");
var buttonS = document.getElementById("sub");
var buttonD = document.getElementById("div");
var buttonM = document.getElementById("mul");
var buttonAC = document.getElementById("ac");
var ans = document.getElementById("ans");



function mulSum() {
	var a = document.getElementById("firstNumber").value;
	var b = document.getElementById("secondNumber").value;
	ans.innerHTML = (Number(a)*Number(b));
}

function divSum() {
	var a = document.getElementById("firstNumber").value;
	var b = document.getElementById("secondNumber").value;
	ans.innerHTML = (Number(a)/Number(b));
}

function addSum() {
	var a = document.getElementById("firstNumber").value;
	var b = document.getElementById("secondNumber").value;
	ans.innerHTML = (Number(a)+Number(b));
}

function subSum() {
	var a = document.getElementById("firstNumber").value;
	var b = document.getElementById("secondNumber").value;
	ans.innerHTML = (Number(a)-Number(b));
}

function allClear() {
	document.getElementById("firstNumber").value = "";
	document.getElementById("secondNumber").value = "";
	ans.innerHTML = "";
}

buttonM.addEventListener("click", mulSum);
buttonA.addEventListener("click", addSum);
buttonS.addEventListener("click", subSum);
buttonD.addEventListener("click", divSum);
buttonAC.addEventListener("click", allClear);
