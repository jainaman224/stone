var myscript = function (){
var ag=document.querySelector('.age');
var input=document.querySelector('.inp');

function getCheckedRadioValue(radioGroupName) {
   var rads = document.getElementsByName(radioGroupName),
       i;
   for (i=0; i < rads.length; i++)
      if (rads[i].checked)
          return rads[i].value;
   return null; // or undefined, or your preferred default for none checked
}

var checkedValue = getCheckedRadioValue("mode");
var b=parseInt(input.value);
var premium=b;
var age=parseInt(ag.value);

if (checkedValue == "half-yearly"){
	premium=(premium/2);
}
else if (checkedValue == "quaterly"){
	premium=(premium/4);
}
else if (checkedValue == "monthly") {
	premium=(premium/12);}

var x=function (premium){
	return premium*89.8/1000;	
}

var y=function (x){
	if (checkedValue == "yearly"){
		return x*(.02)*(-1);}
	else if (checkedValue == "half-yearly"){
		return x*(.01)*(-1);}
	else {
		return 0;}
}

var tt=x(premium)+y(x(premium));

var v=function (premium){
	if (b < 195001){
		return 0;}
	else if (b < 495001){
		return premium*(.002)*(-1);}
	else {
		return premium*(.003)*(-1);}
}
tt1=tt+v(premium);
document.getElementById('mr').innerHTML=Math.round(tt1);
document.getElementById('mr1').innerHTML=Math.round(tt1);

var a=function (premium){
	if (age>17){
	return premium/1000;
	}
	else{
		return 0;
	}
}
document.getElementById('tot').innerHTML=Math.round(a(premium));
document.getElementById('tot1').innerHTML=Math.round(a(premium));

var pre=tt1+a(premium);
var z=function (pre){
	return pre*(0.035);
}
document.getElementById('tax').innerHTML=Math.round(z(pre));
var u=function (pre){
	return pre*(0.0175);
}
document.getElementById('ta').innerHTML=Math.round(u(pre));

var total=z(pre)+pre;
document.getElementById('acc').innerHTML=Math.round(total);

var tota = u(pre)+pre;
document.getElementById('ac').innerHTML=Math.round(tota);

document.getElementsByClassName('inp')[0].value="";
document.getElementsByClassName('age')[0].value="";
}
