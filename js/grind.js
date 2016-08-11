function calcMG(x){
	//Get user submitted information
	var cAmt = document.getElementById(cAmt);
	var cCdy = document.getElementById(cCdy);
	var wAmt = document.getElementById(wAmt);
	var wCdy = document.getElementById(wCdy);
	var pAmt = document.getElementById(pAmt);
	var pCdy = document.getElementById(pCdy);
	var rAmt = document.getElementById(rAmt);
	var rCdy = document.getElementById(rCdy);
	var zAmt = document.getElementById(zAmt);
	var zCdy = document.getElementById(zCdy);
	var dAmt = document.getElementById(dAmt);
	var dCdy = document.getElementById(dCdy);
	//Calculate the recommended amounts
	var r0 = grind(cAmt, cCdy, 12);
	var r1 = grind(wAmt, wCdy, 12);
	var r2 = grind(pAmt, pCdy, 12);
	var r3 = grind(rAmt, rCdy, 25);
	var r4 = grind(zAmt, zCdy, 50);
	var r5 = grind(dAmt, dCdy, 50);
	//Set up result box before displaying
	if(r0 < 0){
		document.getElementById('caterpie').innerHTML = 'Catch ' + (-1 * r0);
	}
	else{
		document.getElementById('caterpie').innerHTML = 'Transfer ' + (-1 * r0);
	}
	if(r1 < 0){
		document.getElementById('weedle').innerHTML = 'Catch ' + (-1 * r1);
	}
	else{
		document.getElementById('weedle').innerHTML = 'Transfer ' + r1;
	}
	if(r2 < 0){
		document.getElementById('pidgey').innerHTML = 'Catch ' + (-1 * r2);
	}
	else{
		document.getElementById('pidgey').innerHTML = 'Transfer ' + r2;
	}
	if(r3 < 0){
		document.getElementById('rattata').innerHTML = 'Catch ' + (-1 * r3);
	}
	else{
		document.getElementById('rattata').innerHTML = 'Transfer ' + r3;
	}
	if(r4 < 0){
		document.getElementById('zubat').innerHTML = 'Catch ' + (-1 * r4);
	}
	else{
		document.getElementById('zubat').innerHTML = 'Transfer ' + r4;
	}
	if(r5 < 0){
		document.getElementById('drowzee').innerHTML = 'Catch ' + (-1 * r5);
	}
	else{
		document.getElementById('drowzee').innerHTML = 'Transfer ' + r5;
	}
	//Display result box
	document.getElementById('result').style.display = "block";
}

function grind(amt, cdy, evo){
	result = amt - Math.floor(cdy/evo);
	if(result < 0){
		amt = amt - result;
		cdy = cdy - result * 3;
		inc = amt - Math.floor(cdy/evo);
		if(inc < 0) result--;
	}
	return result;
}
