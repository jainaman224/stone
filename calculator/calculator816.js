var myscript = function (){
var ag=document.querySelector('.age');
var input=document.querySelector('.inp');

function getCheckedRadioValue(radioGroupName) {
   	var rads = document.getElementsByName(radioGroupName),
       i;
   	for (i=0; i < rads.length; i++){
      	if (rads[i].checked){return rads[i].value;}}
   	return null;
}

var b=parseInt(input.value);
var premium=b;
var term = getCheckedRadioValue("mode");
document.getElementById('mr').innerHTML=term;

var age=parseInt(ag.value);

var base = function (age, term){
	if (term == "9"){
		if (age == 15){return 767.95;}
		else if (age == 16){return 768.10;}
		else if (age == 17){return 768.25;}
		else if (age == 18){return 768.40;}
		else if (age == 19){return 768.50;}
		else if (age == 20){return 768.55;}
		else if (age == 21){return 768.65;}
		else if (age == 22){return 768.70;}
		else if (age == 23){return 768.80;}
		else if (age == 24){return 768.85;}
		else if (age == 25){return 768.95;}
		else if (age == 26){return 769.05;}
		else if (age == 27){return 769.15;}
		else if (age == 28){return 769.35;}
		else if (age == 29){return 769.55;}
		else if (age == 30){return 769.75;}
		else if (age == 31){return 770.05;}
		else if (age == 32){return 770.35;}
		else if (age == 33){return 770.75;}
		else if (age == 34){return 771.20;}
		else if (age == 35){return 771.70;}
		else if (age == 36){return 772.25;}
		else if (age == 37){return 772.95;}
		else if (age == 38){return 773.70;}
		else if (age == 39){return 774.60;}
		else if (age == 40){return 775.60;}
		else if (age == 41){return 776.75;}
		else if (age == 42){return 778.00;}
		else if (age == 43){return 779.45;}
		else if (age == 44){return 780.95;}
		else if (age == 45){return 782.65;}
		else if (age == 46){return 784.40;}
		else if (age == 47){return 786.30;}
		else if (age == 48){return 788.25;}
		else if (age == 49){return 790.30;}
		else if (age == 50){return 792.40;}
		else if (age == 51){return 794.55;}
		else if (age == 52){return 796.75;}
		else if (age == 53){return 799.00;}
		else if (age == 54){return 801.35;}
		else if (age == 55){return 803.80;}
		else if (age == 56){return 806.35;}
		else if (age == 57){return 809.05;}
		else if (age == 58){return 811.90;}
		else if (age == 59){return 814.90;}
		else if (age == 60){return 818.10;}
		else if (age == 61){return 821.50;}
		else if (age == 62){return 825.05;}
		else if (age == 63){return 828.80;}
		else if (age == 64){return 832.75;}
		else if (age == 65){return 836.85;}
		else if (age == 66){return 841.10;}
	}
	else if (term == "12"){
		if (age == 15){return 771.00;}
		else if (age == 16){return 771.15;}
		else if (age == 17){return 771.25;}
		else if (age == 18){return 771.35;}
		else if (age == 19){return 771.45;}
		else if (age == 20){return 771.55;}
		else if (age == 21){return 771.60;}
		else if (age == 22){return 771.70;}
		else if (age == 23){return 771.80;}
		else if (age == 24){return 771.90;}
		else if (age == 25){return 772.00;}
		else if (age == 26){return 772.15;}
		else if (age == 27){return 772.30;}
		else if (age == 28){return 772.50;}
		else if (age == 29){return 772.75;}
		else if (age == 30){return 773.05;}
		else if (age == 31){return 773.40;}
		else if (age == 32){return 773.80;}
		else if (age == 33){return 774.25;}
		else if (age == 34){return 774.75;}
		else if (age == 35){return 775.35;}
		else if (age == 36){return 776.05;}
		else if (age == 37){return 776.85;}
		else if (age == 38){return 777.75;}
		else if (age == 39){return 778.75;}
		else if (age == 40){return 779.85;}
		else if (age == 41){return 781.10;}
		else if (age == 42){return 782.45;}
		else if (age == 43){return 783.90;}
		else if (age == 44){return 785.50;}
		else if (age == 45){return 787.15;}
		else if (age == 46){return 788.90;}
		else if (age == 47){return 790.70;}
		else if (age == 48){return 792.60;}
		else if (age == 49){return 794.60;}
		else if (age == 50){return 796.65;}
		else if (age == 51){return 798.75;}
		else if (age == 52){return 800.95;}
		else if (age == 53){return 803.20;}
		else if (age == 54){return 805.60;}
		else if (age == 55){return 808.10;}
		else if (age == 56){return 810.70;}
		else if (age == 57){return 813.50;}
		else if (age == 58){return 816.40;}
		else if (age == 59){return 819.50;}
		else if (age == 60){return 822.75;}
		else if (age == 61){return 826.15;}
		else if (age == 62){return 829.70;}
		else if (age == 63){return 833.40;}
	}
	else if (term == "15"){
		if (age == 15){return 771.55;}
		else if (age == 16){return 771.65;}
		else if (age == 17){return 771.80;}
		else if (age == 18){return 771.90;}
		else if (age == 19){return 771.95;}
		else if (age == 20){return 772.05;}
		else if (age == 21){return 772.15;}
		else if (age == 22){return 772.25;}
		else if (age == 23){return 772.40;}
		else if (age == 24){return 772.50;}
		else if (age == 25){return 772.70;}
		else if (age == 26){return 772.85;}
		else if (age == 27){return 773.10;}
		else if (age == 28){return 773.35;}
		else if (age == 29){return 773.65;}
		else if (age == 30){return 774.00;}
		else if (age == 31){return 774.40;}
		else if (age == 32){return 774.90;}
		else if (age == 33){return 775.45;}
		else if (age == 34){return 776.05;}
		else if (age == 35){return 776.80;}
		else if (age == 36){return 777.60;}
		else if (age == 37){return 778.50;}
		else if (age == 38){return 779.50;}
		else if (age == 39){return 780.65;}
		else if (age == 40){return 781.85;}
		else if (age == 41){return 783.15;}
		else if (age == 42){return 784.55;}
		else if (age == 43){return 786.00;}
		else if (age == 44){return 787.60;}
		else if (age == 45){return 789.25;}
		else if (age == 46){return 791.00;}
		else if (age == 47){return 792.80;}
		else if (age == 48){return 794.75;}
		else if (age == 49){return 796.75;}
		else if (age == 50){return 798.80;}
		else if (age == 51){return 800.95;}
		else if (age == 52){return 803.25;}
		else if (age == 53){return 805.60;}
		else if (age == 54){return 808.10;}
		else if (age == 55){return 810.70;}
		else if (age == 56){return 813.40;}
		else if (age == 57){return 816.25;}
		else if (age == 58){return 819.25;}
		else if (age == 59){return 822.40;}
		else if (age == 60){return 825.70;}
	}
}

var d = base (age, term);


var x=function (premium, d){return premium*d/1000;}

var tt=x(premium, d);

var v=function (premium, term){
	if (term == 9){
		if (b < 75001){return 0;}
		else if (b < 150001){return premium*(.06)*(-1);}
		else {return premium*(.08)*(-1);}
	}
	else if (term == 12){
		if (b < 100001){return 0;}
		else if (b < 200001){return premium*(.04)*(-1);}
		else {return premium*(.06)*(-1);}
	}
	else if (term == 15){
		if (b < 150001){return 0;}
		else if (b < 300001){return premium*(.03)*(-1);}
		else {return premium*(.04)*(-1);}
	}
}
var tt1=tt+v(premium, term);


var z=function (tt1){return tt1*(0.035);}
document.getElementById('tax').innerHTML=Math.round(z(tt1));

var total=z(tt1)+tt1;
document.getElementById('acc').innerHTML=Math.round(total);

document.getElementsByClassName('inp')[0].value="";
document.getElementsByClassName('age')[0].value="";
}