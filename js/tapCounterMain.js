if (localStorage["savedTap"] == "true") {
	document.getElementById("counter").value = localStorage["tapValue"];
}

function saveState(value) {
	localStorage.setItem("savedTap", "true");
	localStorage.setItem("tapValue", value);
}

function increase() {
	if (isNaN(document.getElementById("counter").value)) {
		document.getElementById("counter").value = '0';
	}
	var a = document.getElementById("counter");
	a.value++;
	saveState(a.value);
}

function reset() {
	var a = document.getElementById("counter");
	a.value = "Tap Me!";
	saveState(a.value);
}

function goBack() {
	var a = document.getElementById("counter");
	if (a.value > 1) {
		a.value--;
	}
	else if (a.value == 1) {
		a.value = "Tap Me!"
	}
	saveState(a.value);
}