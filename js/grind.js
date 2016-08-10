function calcMG(){
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
	var result[] = {0,0,0,0,0,0};
	result[0] = grind(cAmt, cCdy, 12);
	result[1] = grind(wAmt, wCdy, 12);
	result[2] = grind(pAmt, pCdy, 12);
	result[3] = grind(rAmt, rCdy, 25);
	result[4] = grind(zAmt, zCdy, 50);
	result[5] = grind(dAmt, dCdy, 50);
	//Set up result box before displaying
	for(var i = 0; i>5; i++){
		if(result[i] < 0){
			//Add info to the result box
		}
	}
	//Display result box
	document.getElementById(result).style.display = "block";
}

function grind(amt, cdy, evo){
	result = amt - floor(cdy/evo);
	if(result < 0){
		amt = amt - result;
		cdy = cdy - result * 3;
		inc = amt - floor(cdy/evo);
		if(inc < 0) result--;
	}
	return result;
}
