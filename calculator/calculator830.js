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

var checkedValue = getCheckedRadioValue("mode");
var b=parseInt(input.value);
var premium=b;
var term = parseInt(getCheckedRadioValue("term"));
var age=parseInt(ag.value);
var ppt=parseInt(getCheckedRadioValue("ppt"))

if (checkedValue == "half-yearly"){premium=(premium/2);}
else if (checkedValue == "quaterly"){premium=(premium/4);}
else if (checkedValue == "monthly"){premium=(premium/12);}

var base = function (age, term, ppt){
	if (ppt == 8){
		if (term == 12){
			if (age == 18){return 111.15;}
			else if (age == 19){return 111.20;}
			else if (age == 20){return 111.20;}
			else if (age == 21){return 111.25;}
			else if (age == 22){return 111.25;}
			else if (age == 23){return 111.30;}
			else if (age == 24){return 111.30;}
			else if (age == 25){return 111.35;}
			else if (age == 26){return 111.35;}
			else if (age == 27){return 111.40;}
			else if (age == 28){return 111.45;}
			else if (age == 29){return 111.50;}
			else if (age == 30){return 111.55;}
			else if (age == 31){return 111.60;}
			else if (age == 32){return 111.70;}
			else if (age == 33){return 111.80;}
			else if (age == 34){return 111.90;}
			else if (age == 35){return 112.05;}
			else if (age == 36){return 112.20;}
			else if (age == 37){return 112.40;}
			else if (age == 38){return 112.60;}
			else if (age == 39){return 112.85;}
			else if (age == 40){return 113.15;}
			else if (age == 41){return 113.45;}
			else if (age == 42){return 113.80;}
			else if (age == 43){return 114.20;}
			else if (age == 44){return 114.65;}
			else if (age == 45){return 115.15;}
			else if (age == 46){return 115.65;}
			else if (age == 47){return 116.25;}
			else if (age == 48){return 116.85;}
			else if (age == 49){return 117.50;}
			else if (age == 50){return 118.20;}
			else if (age == 51){return 118.95;}
			else if (age == 52){return 119.75;}
			else if (age == 53){return 120.55;}
			else if (age == 54){return 121.40;}
			else if (age == 55){return 122.30;}
			else if (age == 56){return 123.25;}
			else if (age == 57){return 124.30;}
		}
		else if (term == 16){
			if (age == 18){return 95.30;}
			else if (age == 19){return 95.35;}
			else if (age == 20){return 95.35;}
			else if (age == 21){return 95.40;}
			else if (age == 22){return 95.45;}
			else if (age == 23){return 95.45;}
			else if (age == 24){return 95.50;}
			else if (age == 25){return 95.55;}
			else if (age == 26){return 95.60;}
			else if (age == 27){return 95.65;}
			else if (age == 28){return 95.70;}
			else if (age == 29){return 95.80;}
			else if (age == 30){return 95.90;}
			else if (age == 31){return 96.00;}
			else if (age == 32){return 96.15;}
			else if (age == 33){return 96.30;}
			else if (age == 34){return 96.50;}
			else if (age == 35){return 96.70;}
			else if (age == 36){return 96.95;}
			else if (age == 37){return 97.25;}
			else if (age == 38){return 97.55;}
			else if (age == 39){return 97.90;}
			else if (age == 40){return 98.30;}
			else if (age == 41){return 98.75;}
			else if (age == 42){return 99.20;}
			else if (age == 43){return 99.75;}
			else if (age == 44){return 100.35;}
			else if (age == 45){return 101.00;}
			else if (age == 46){return 101.65;}
			else if (age == 47){return 102.40;}
			else if (age == 48){return 103.20;}
			else if (age == 49){return 104.05;}
			else if (age == 50){return 104.95;}
			else if (age == 51){return 105.90;}
			else if (age == 52){return 106.95;}
			else if (age == 53){return 108.00;}
			else if (age == 54){return 109.10;}
			else if (age == 55){return 110.30;}
			else if (age == 56){return 111.60;}
			else if (age == 57){return 112.95;}
			else if (age == 58){return 114.45;}
			else if (age == 59){return 116.00;}
		}
		else if (term == 21){
			if (age == 18){return 78.45;}
			else if (age == 19){return 78.50;}
			else if (age == 20){return 78.60;}
			else if (age == 21){return 78.65;}
			else if (age == 22){return 78.70;}
			else if (age == 23){return 78.75;}
			else if (age == 24){return 78.80;}
			else if (age == 25){return 78.90;}
			else if (age == 26){return 79.00;}
			else if (age == 27){return 79.10;}
			else if (age == 28){return 79.20;}
			else if (age == 29){return 79.35;}
			else if (age == 30){return 79.55;}
			else if (age == 31){return 79.75;}
			else if (age == 32){return 80.00;}
			else if (age == 33){return 80.25;}
			else if (age == 34){return 80.55;}
			else if (age == 35){return 80.90;}
			else if (age == 36){return 81.25;}
			else if (age == 37){return 81.70;}
			else if (age == 38){return 82.15;}
			else if (age == 39){return 82.65;}
			else if (age == 40){return 83.25;}
			else if (age == 41){return 83.85;}
			else if (age == 42){return 84.55;}
			else if (age == 43){return 85.30;}
			else if (age == 44){return 86.10;}
			else if (age == 45){return 86.95;}
			else if (age == 46){return 87.90;}
			else if (age == 47){return 88.90;}
			else if (age == 48){return 90.00;}
			else if (age == 49){return 91.15;}
			else if (age == 50){return 92.35;}
			else if (age == 51){return 93.65;}
			else if (age == 52){return 95.00;}
			else if (age == 53){return 96.45;}
			else if (age == 54){return 97.95;}
		}
	}
	else if (ppt == 9){
		if (term == 12){
			if (age == 18){return 101.50;}
			else if (age == 19){return 101.50;}
			else if (age == 20){return 101.55;}
			else if (age == 21){return 101.55;}
			else if (age == 22){return 101.60;}
			else if (age == 23){return 101.60;}
			else if (age == 24){return 101.60;}
			else if (age == 25){return 101.65;}
			else if (age == 26){return 101.65;}
			else if (age == 27){return 101.70;}
			else if (age == 28){return 101.75;}
			else if (age == 29){return 101.80;}
			else if (age == 30){return 101.85;}
			else if (age == 31){return 101.90;}
			else if (age == 32){return 102.00;}
			else if (age == 33){return 102.10;}
			else if (age == 34){return 102.20;}
			else if (age == 35){return 102.35;}
			else if (age == 36){return 102.50;}
			else if (age == 37){return 102.65;}
			else if (age == 38){return 102.90;}
			else if (age == 39){return 103.10;}
			else if (age == 40){return 103.35;}
			else if (age == 41){return 103.70;}
			else if (age == 42){return 104.00;}
			else if (age == 43){return 104.40;}
			else if (age == 44){return 104.80;}
			else if (age == 45){return 105.30;}
			else if (age == 46){return 105.80;}
			else if (age == 47){return 106.35;}
			else if (age == 48){return 106.95;}
			else if (age == 49){return 107.60;}
			else if (age == 50){return 108.25;}
			else if (age == 51){return 108.95;}
			else if (age == 52){return 109.70;}
			else if (age == 53){return 110.50;}
			else if (age == 54){return 111.30;}
			else if (age == 55){return 112.20;}
			else if (age == 56){return 113.10;}
			else if (age == 57){return 114.10;}
			else if (age == 58){return 115.20;}
			else if (age == 59){return 116.40;}
			else if (age == 60){return 117.70;}
			else if (age == 61){return 119.10;}
			else if (age == 62){return 120.65;}
		}
		else if (term == 16){
			if (age == 18){return 87.00;}
			else if (age == 19){return 87.05;}
			else if (age == 20){return 87.10;}
			else if (age == 21){return 87.10;}
			else if (age == 22){return 87.15;}
			else if (age == 23){return 87.15;}
			else if (age == 24){return 87.20;}
			else if (age == 25){return 87.25;}
			else if (age == 26){return 87.30;}
			else if (age == 27){return 87.35;}
			else if (age == 28){return 87.40;}
			else if (age == 29){return 87.50;}
			else if (age == 30){return 87.60;}
			else if (age == 31){return 87.70;}
			else if (age == 32){return 87.80;}
			else if (age == 33){return 87.95;}
			else if (age == 34){return 88.15;}
			else if (age == 35){return 88.35;}
			else if (age == 36){return 88.55;}
			else if (age == 37){return 88.85;}
			else if (age == 38){return 89.15;}
			else if (age == 39){return 89.45;}
			else if (age == 40){return 89.85;}
			else if (age == 41){return 90.25;}
			else if (age == 42){return 90.70;}
			else if (age == 43){return 91.20;}
			else if (age == 44){return 91.75;}
			else if (age == 45){return 92.35;}
			else if (age == 46){return 93.00;}
			else if (age == 47){return 93.75;}
			else if (age == 48){return 94.50;}
			else if (age == 49){return 95.30;}
			else if (age == 50){return 96.15;}
			else if (age == 51){return 97.05;}
			else if (age == 52){return 98.00;}
			else if (age == 53){return 99.00;}
			else if (age == 54){return 100.05;}
			else if (age == 55){return 101.20;}
			else if (age == 56){return 102.40;}
			else if (age == 57){return 103.70;}
			else if (age == 58){return 105.10;}
			else if (age == 59){return 106.65;}
		}
		else if (term == 21){
			if (age == 18){return 71.65;}
			else if (age == 19){return 71.70;}
			else if (age == 20){return 71.75;}
			else if (age == 21){return 71.80;}
			else if (age == 22){return 71.85;}
			else if (age == 23){return 71.90;}
			else if (age == 24){return 72.00;}
			else if (age == 25){return 72.05;}
			else if (age == 26){return 72.15;}
			else if (age == 27){return 72.25;}
			else if (age == 28){return 72.35;}
			else if (age == 29){return 72.50;}
			else if (age == 30){return 72.65;}
			else if (age == 31){return 72.85;}
			else if (age == 32){return 73.05;}
			else if (age == 33){return 73.30;}
			else if (age == 34){return 73.60;}
			else if (age == 35){return 73.90;}
			else if (age == 36){return 74.25;}
			else if (age == 37){return 74.65;}
			else if (age == 38){return 75.10;}
			else if (age == 39){return 75.55;}
			else if (age == 40){return 76.10;}
			else if (age == 41){return 76.65;}
			else if (age == 42){return 77.30;}
			else if (age == 43){return 78.00;}
			else if (age == 44){return 78.75;}
			else if (age == 45){return 79.55;}
			else if (age == 46){return 80.45;}
			else if (age == 47){return 81.40;}
			else if (age == 48){return 82.40;}
			else if (age == 49){return 83.45;}
			else if (age == 50){return 84.60;}
			else if (age == 51){return 85.80;}
			else if (age == 52){return 87.10;}
			else if (age == 53){return 88.45;}
			else if (age == 54){return 89.85;}
		}
	}
}




var d = base(age, term, ppt);
var x=function (premium, d){return premium*d/1000;}

var y=function (x){
	if (checkedValue == "yearly"){return x*(.02)*(-1);}
	else if (checkedValue == "half-yearly"){return x*(.01)*(-1);}
	else {return 0;}
}

var tt=x(premium, d)+y(x(premium, d));

var v=function (premium){
	if (b < 490001){return 0;}
	else if (b < 990001){return premium*(.0005)*(-1);}
	else {return premium*(.00075)*(-1);}
}
tt1=tt+v(premium);
document.getElementById('mr').innerHTML=Math.round(tt1);
document.getElementById('mr1').innerHTML=Math.round(tt1);

var z=function (tt1){return tt1*(0.035);}
document.getElementById('tax').innerHTML=Math.round(z(tt1));
var u=function (tt1){return tt1*(0.0175);}
document.getElementById('ta').innerHTML=Math.round(u(tt1));

var total=z(tt1)+tt1;
document.getElementById('acc').innerHTML=Math.round(total);

var tota = u(tt1)+tt1;
document.getElementById('ac').innerHTML=Math.round(tota);

var a=function (premium){
	if (age>17){return premium/1000;}
	else{return 0;}
}
var pre=total+a(premium)*(1.035);
var prre=tota+a(premium)*(1.0175)
document.getElementById('tot').innerHTML=Math.round(pre);
document.getElementById('tot1').innerHTML=Math.round(prre);

document.getElementsByClassName('inp')[0].value="";
document.getElementsByClassName('age')[0].value="";
}

