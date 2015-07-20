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
var age=parseInt(ag.value);

if (checkedValue == "half-yearly"){premium=(premium/2);}
else if (checkedValue == "quaterly"){premium=(premium/4);}
else if (checkedValue == "monthly"){premium=(premium/12);}

var base = function (age){
	if (age == 13){return 77.60;}
	else if (age == 14){return 77.65;}
	else if (age == 15){return 77.75;}
	else if (age == 16){return 77.80;}
	else if (age == 17){return 77.85;}
	else if (age == 18){return 77.90;}
	else if (age == 19){return 77.95;}
	else if (age == 20){return 78.00;}
	else if (age == 21){return 78.05;}
	else if (age == 22){return 78.10;}
	else if (age == 23){return 78.20;}
	else if (age == 24){return 78.25;}
	else if (age == 25){return 78.35;}
	else if (age == 26){return 78.45;}
	else if (age == 27){return 78.60;}
	else if (age == 28){return 78.70;}
	else if (age == 29){return 78.90;}
	else if (age == 30){return 79.10;}
	else if (age == 31){return 79.30;}
	else if (age == 32){return 79.55;}
	else if (age == 33){return 79.85;}
	else if (age == 34){return 80.15;}
	else if (age == 35){return 80.50;}
	else if (age == 36){return 80.90;}
	else if (age == 37){return 81.35;}
	else if (age == 38){return 81.85;}
	else if (age == 39){return 82.35;}
	else if (age == 40){return 82.95;}
	else if (age == 41){return 83.55;}
	else if (age == 42){return 84.25;}
	else if (age == 43){return 85.00;}
	else if (age == 44){return 85.80;}
	else if (age == 45){return 86.65;}
	else if (age == 46){return 87.60;}
	else if (age == 47){return 88.60;}
	else if (age == 48){return 89.65;}
	else if (age == 49){return 90.80;}
	else if (age == 50){return 92.05;}
}

var d = base(age);
var x=function (premium, d){return premium*d/1000;}

var y=function (x){
	if (checkedValue == "yearly"){return x*(.02)*(-1);}
	else if (checkedValue == "half-yearly"){return x*(.01)*(-1);}
	else {return 0;}
}

var tt=x(premium, d)+y(x(premium, d));

var v=function (premium){
	if (b < 195001){return 0;}
	else if (b < 495001){return premium*(.002)*(-1);}
	else {return premium*(.003)*(-1);}
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

