function calcMG(cal){
	//Get user submitted information
	var cAmt = document.getElementById('cAmt').value;
	var cCdy = document.getElementById('cCdy').value;
	var wAmt = document.getElementById('wAmt').value;
	var wCdy = document.getElementById('wCdy').value;
	var pAmt = document.getElementById('pAmt').value;
	var pCdy = document.getElementById('pCdy').value;
	var rAmt = document.getElementById('rAmt').value;
	var rCdy = document.getElementById('rCdy').value;
	var zAmt = document.getElementById('zAmt').value;
	var zCdy = document.getElementById('zCdy').value;
	var dAmt = document.getElementById('dAmt').value;
	var dCdy = document.getElementById('dCdy').value;
	//Calculate the recommended amounts
	if(cal == 0){
		var r0 = grind(cAmt, cCdy, 11, 1);
		var r1 = grind(wAmt, wCdy, 11, 1);
		var r2 = grind(pAmt, pCdy, 11, 1);
		var r3 = grind(rAmt, rCdy, 24, 1);
		var r4 = grind(zAmt, zCdy, 49, 1);
		var r5 = grind(dAmt, dCdy, 49, 1);
	}
	else if(cal == 1){
		var r0 = grind(cAmt, cCdy, 10, 2);
		var r1 = grind(wAmt, wCdy, 10, 2);
		var r2 = grind(pAmt, pCdy, 10, 2);
		var r3 = grind(rAmt, rCdy, 23, 2);
		var r4 = grind(zAmt, zCdy, 48, 2);
		var r5 = grind(dAmt, dCdy, 48, 2);
	}
	//Set up result box before displaying
	if(r0 < 0){
		document.getElementById('caterpie').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r0);
	}
	else{
		document.getElementById('caterpie').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + (-1 * r0);
	}
	if(r1 < 0){
		document.getElementById('weedle').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r1);
	}
	else{
		document.getElementById('weedle').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + r1;
	}
	if(r2 < 0){
		document.getElementById('pidgey').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r2);
	}
	else{
		document.getElementById('pidgey').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + r2;
	}
	if(r3 < 0){
		document.getElementById('rattata').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r3);
	}
	else{
		document.getElementById('rattata').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + r3;
	}
	if(r4 < 0){
		document.getElementById('zubat').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r4);
	}
	else{
		document.getElementById('zubat').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + r4;
	}
	if(r5 < 0){
		document.getElementById('drowzee').innerHTML = '<div style="color:red; font-weight:bold; font-size:17px;">Catch </div>' + (-1 * r5);
	}
	else{
		document.getElementById('drowzee').innerHTML = '<div style="color:lightgreen; font-style:italic; font-size:17px;">Transfer </div>' + r5;
	}
	//Display result box
	document.getElementById('result').style.display = "block";
	
}

function grind(amt, cdy, evo, add){
	if(amt == 0 && cdy == 0) return 0;
	var hold = (cdy - ((amt * evo) + add))/3;
	if(hold < 0) return Math.floor(hold);
	else return Math.ceil(hold);
}

function sBut(cho){
	if(cho == 0){
		document.getElementById('tran').style.display = "none";
		document.getElementById('norm').style.display = "block";
	}
	if(cho == 1){
		document.getElementById('norm').style.display = "none";
		document.getElementById('tran').style.display = "block";
	}
}