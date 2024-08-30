// ex1
function textChange() {
	document.getElementById('tc').innerHTML="Welcome to WWM"
} 
//ex2
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

//ex3
function bulbOn(){
	document.getElementById('bulb').src='images/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src='images/off.gif';
}

// ex4
function changeCss(){
	document.getElementById('cc').style.color="red";
} 

//ex5
function textShow(){
	document.getElementById('tsh').style.display='block';
}
function textHide(){
	document.getElementById('tsh').style.display='none';
}