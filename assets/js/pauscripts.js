function saveToLocalStorage(key, url) {
	var img = new Image();
	img.src = url;
	var canvas = document.creareElement('canvas');
	var context = canvas.getContext('2d');
	context.drawImage(img, 0, 0);
	var data = context.getImageData(x, y, img.width, img.height).data;
	localStorage.setItem(key, data);
}

function retrieveFromLocalStorage(key, div){
	var picture = localStorage.getItem(key);
	var image = document.createElement('img');
	image.src = picture;
	$(div).append( $(image));
}

function login{
	var attempt = 3; // Variable to count number of attempts.
	// Below function Executes on click of login button.
	function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "Formget" && password == "formget#123"){
	alert ("Login successfully");
	window.location = "success.html"; // Redirecting to other page.
	return false;
	}
	else{
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
	// Disabling fields after 3 attempts.
	if( attempt == 0){
	document.getElementById("username").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
	return false;
	}
	}
	
