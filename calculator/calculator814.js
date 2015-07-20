$('.bb').hide();

var myscript = function (){
var ag=document.querySelector('.age');
var ter=document.querySelector('.term');
var input=document.querySelector('.inp');

$('.bb').fadeIn('slow');

function getCheckedRadioValue(radioGroupName) {
   	var rads = document.getElementsByName(radioGroupName),
       i;
   	for (i=0; i < rads.length; i++){if (rads[i].checked){return rads[i].value;}}
   	return null;
}

var checkedValue = getCheckedRadioValue("mode");
var b=parseInt(input.value);
var premium=b;
var term = parseInt(ter.value);
var age=parseInt(ag.value);

if (checkedValue == "half-yearly"){premium=(premium/2);}
else if (checkedValue == "quaterly"){premium=(premium/4);}
else if (checkedValue == "monthly"){premium=(premium/12);}

var base = function (age, term){
	if (age == 8){
		if (term == 12){return 89.45;}
		else if (term == 13){return 81.85;}
		else if (term == 14){return 75.35;}
		else if (term == 15){return 70.80;}
		else if (term == 16){return 65.80;}
		else if (term == 17){return 61.35;}
		else if (term == 18){return 57.45;}
		else if (term == 19){return 53.95;}
		else if (term == 20){return 50.80;}
		else if (term == 21){return 48.15;}
		else if (term == 22){return 45.75;}
		else if (term == 23){return 43.55;}
		else if (term == 24){return 41.50;}
		else if (term == 25){return 39.65;}
		else if (term == 26){return 37.95;}
		else if (term == 27){return 36.35;}
		else if (term == 28){return 34.90;}
		else if (term == 29){return 33.50;}
		else if (term == 30){return 32.25;}
		else if (term == 31){return 31.15;}
		else if (term == 32){return 30.15;}
		else if (term == 33){return 29.20;}
		else if (term == 34){return 28.30;}
		else if (term == 35){return 27.45;}
	}
	else if (age == 9){
		if (term == 12){return 89.45;}
		else if (term == 13){return 81.85;}
		else if (term == 14){return 75.35;}
		else if (term == 15){return 70.85;}
		else if (term == 16){return 65.80;}
		else if (term == 17){return 61.40;}
		else if (term == 18){return 57.45;}
		else if (term == 19){return 53.95;}
		else if (term == 20){return 50.80;}
		else if (term == 21){return 48.15;}
		else if (term == 22){return 45.75;}
		else if (term == 23){return 43.55;}
		else if (term == 24){return 41.55;}
		else if (term == 25){return 39.70;}
		else if (term == 26){return 37.95;}
		else if (term == 27){return 36.35;}
		else if (term == 28){return 34.90;}
		else if (term == 29){return 33.55;}
		else if (term == 30){return 32.25;}
		else if (term == 31){return 31.20;}
		else if (term == 32){return 30.15;}
		else if (term == 33){return 29.20;}
		else if (term == 34){return 28.30;}
		else if (term == 35){return 27.50;}
	}
	else if (age == 10){
		if (term == 12){return 89.50;}
		else if (term == 13){return 81.90;}
		else if (term == 14){return 75.40;}
		else if (term == 15){return 70.85;}
		else if (term == 16){return 65.85;}
		else if (term == 17){return 61.40;}
		else if (term == 18){return 57.50;}
		else if (term == 19){return 54.00;}
		else if (term == 20){return 50.85;}
		else if (term == 21){return 48.20;}
		else if (term == 22){return 45.80;}
		else if (term == 23){return 43.60;}
		else if (term == 24){return 41.55;}
		else if (term == 25){return 39.70;}
		else if (term == 26){return 38.00;}
		else if (term == 27){return 36.40;}
		else if (term == 28){return 34.95;}
		else if (term == 29){return 33.55;}
		else if (term == 30){return 32.30;}
		else if (term == 31){return 31.20;}
		else if (term == 32){return 30.20;}
		else if (term == 33){return 29.25;}
		else if (term == 34){return 28.35;}
		else if (term == 35){return 27.50;}
	}
	else if (age == 11){
		if (term == 12){return 89.50;}
		else if (term == 13){return 81.90;}
		else if (term == 14){return 75.45;}
		else if (term == 15){return 70.90;}
		else if (term == 16){return 65.85;}
		else if (term == 17){return 61.45;}
		else if (term == 18){return 57.50;}
		else if (term == 19){return 54.00;}
		else if (term == 20){return 50.90;}
		else if (term == 21){return 48.25;}
		else if (term == 22){return 45.80;}
		else if (term == 23){return 43.60;}
		else if (term == 24){return 41.60;}
		else if (term == 25){return 39.75;}
		else if (term == 26){return 38.05;}
		else if (term == 27){return 36.45;}
		else if (term == 28){return 34.95;}
		else if (term == 29){return 33.60;}
		else if (term == 30){return 32.35;}
		else if (term == 31){return 31.25;}
		else if (term == 32){return 30.25;}
		else if (term == 33){return 29.30;}
		else if (term == 34){return 28.40;}
		else if (term == 35){return 27.55;}
	}
	else if (age == 12){
		if (term == 12){return 89.55;}
		else if (term == 13){return 81.95;}
		else if (term == 14){return 75.45;}
		else if (term == 15){return 70.95;}
		else if (term == 16){return 65.90;}
		else if (term == 17){return 61.50;}
		else if (term == 18){return 57.55;}
		else if (term == 19){return 54.05;}
		else if (term == 20){return 50.90;}
		else if (term == 21){return 48.25;}
		else if (term == 22){return 45.85;}
		else if (term == 23){return 43.65;}
		else if (term == 24){return 41.65;}
		else if (term == 25){return 39.80;}
		else if (term == 26){return 38.05;}
		else if (term == 27){return 36.50;}
		else if (term == 28){return 35.00;}
		else if (term == 29){return 33.65;}
		else if (term == 30){return 32.40;}
		else if (term == 31){return 31.30;}
		else if (term == 32){return 30.30;}
		else if (term == 33){return 29.35;}
		else if (term == 34){return 28.45;}
		else if (term == 35){return 27.60;}
	}
	else if (age == 13){
		if (term == 12){return 89.60;}
		else if (term == 13){return 82.00;}
		else if (term == 14){return 75.50;}
		else if (term == 15){return 70.95;}
		else if (term == 16){return 65.95;}
		else if (term == 17){return 61.55;}
		else if (term == 18){return 57.60;}
		else if (term == 19){return 54.10;}
		else if (term == 20){return 50.95;}
		else if (term == 21){return 48.30;}
		else if (term == 22){return 45.90;}
		else if (term == 23){return 43.70;}
		else if (term == 24){return 41.70;}
		else if (term == 25){return 39.85;}
		else if (term == 26){return 38.10;}
		else if (term == 27){return 36.55;}
		else if (term == 28){return 35.05;}
		else if (term == 29){return 33.70;}
		else if (term == 30){return 32.40;}
		else if (term == 31){return 31.35;}
		else if (term == 32){return 30.35;}
		else if (term == 33){return 29.40;}
		else if (term == 34){return 28.50;}
		else if (term == 35){return 27.65;}
	}
	else if (age == 14){
		if (term == 12){return 89.65;}
		else if (term == 13){return 82.05;}
		else if (term == 14){return 75.55;}
		else if (term == 15){return 71.00;}
		else if (term == 16){return 66.00;}
		else if (term == 17){return 61.55;}
		else if (term == 18){return 57.65;}
		else if (term == 19){return 54.15;}
		else if (term == 20){return 51.00;}
		else if (term == 21){return 48.35;}
		else if (term == 22){return 45.95;}
		else if (term == 23){return 43.75;}
		else if (term == 24){return 41.75;}
		else if (term == 25){return 39.85;}
		else if (term == 26){return 38.15;}
		else if (term == 27){return 36.55;}
		else if (term == 28){return 35.10;}
		else if (term == 29){return 33.75;}
		else if (term == 30){return 32.45;}
		else if (term == 31){return 31.40;}
		else if (term == 32){return 30.40;}
		else if (term == 33){return 29.45;}
		else if (term == 34){return 28.55;}
		else if (term == 35){return 27.70;}
	}
	else if (age == 15){
		if (term == 12){return 89.70;}
		else if (term == 13){return 82.10;}
		else if (term == 14){return 75.60;}
		else if (term == 15){return 71.05;}
		else if (term == 16){return 66.05;}
		else if (term == 17){return 61.60;}
		else if (term == 18){return 57.70;}
		else if (term == 19){return 54.20;}
		else if (term == 20){return 51.05;}
		else if (term == 21){return 48.40;}
		else if (term == 22){return 46.00;}
		else if (term == 23){return 43.80;}
		else if (term == 24){return 41.75;}
		else if (term == 25){return 39.90;}
		else if (term == 26){return 38.20;}
		else if (term == 27){return 36.60;}
		else if (term == 28){return 35.15;}
		else if (term == 29){return 33.80;}
		else if (term == 30){return 32.50;}
		else if (term == 31){return 31.45;}
		else if (term == 32){return 30.45;}
		else if (term == 33){return 29.50;}
		else if (term == 34){return 28.60;}
		else if (term == 35){return 27.80;}
	}
	else if (age == 16){
		if (term == 12){return 89.75;}
		else if (term == 13){return 82.15;}
		else if (term == 14){return 75.65;}
		else if (term == 15){return 71.10;}
		else if (term == 16){return 66.05;}
		else if (term == 17){return 61.65;}
		else if (term == 18){return 57.75;}
		else if (term == 19){return 54.25;}
		else if (term == 20){return 51.10;}
		else if (term == 21){return 48.45;}
		else if (term == 22){return 46.05;}
		else if (term == 23){return 43.85;}
		else if (term == 24){return 41.80;}
		else if (term == 25){return 39.95;}
		else if (term == 26){return 38.25;}
		else if (term == 27){return 36.65;}
		else if (term == 28){return 35.20;}
		else if (term == 29){return 33.85;}
		else if (term == 30){return 32.55;}
		else if (term == 31){return 31.50;}
		else if (term == 32){return 30.50;}
		else if (term == 33){return 29.55;}
		else if (term == 34){return 28.65;}
		else if (term == 35){return 27.85;}
	}
	else if (age == 17){
		if (term == 12){return 89.75;}
		else if (term == 13){return 82.15;}
		else if (term == 14){return 75.65;}
		else if (term == 15){return 71.15;}
		else if (term == 16){return 66.10;}
		else if (term == 17){return 61.70;}
		else if (term == 18){return 57.75;}
		else if (term == 19){return 54.25;}
		else if (term == 20){return 51.10;}
		else if (term == 21){return 48.45;}
		else if (term == 22){return 46.05;}
		else if (term == 23){return 43.85;}
		else if (term == 24){return 41.85;}
		else if (term == 25){return 40.00;}
		else if (term == 26){return 38.30;}
		else if (term == 27){return 36.70;}
		else if (term == 28){return 35.25;}
		else if (term == 29){return 33.90;}
		else if (term == 30){return 32.60;}
		else if (term == 31){return 31.55;}
		else if (term == 32){return 30.55;}
		else if (term == 33){return 29.60;}
		else if (term == 34){return 28.70;}
		else if (term == 35){return 27.90;}
	}
	else if (age == 18){
		if (term == 12){return 89.80;}
		else if (term == 13){return 82.20;}
		else if (term == 14){return 75.70;}
		else if (term == 15){return 71.15;}
		else if (term == 16){return 66.15;}
		else if (term == 17){return 61.70;}
		else if (term == 18){return 57.80;}
		else if (term == 19){return 54.30;}
		else if (term == 20){return 51.15;}
		else if (term == 21){return 48.50;}
		else if (term == 22){return 46.10;}
		else if (term == 23){return 43.90;}
		else if (term == 24){return 41.90;}
		else if (term == 25){return 40.05;}
		else if (term == 26){return 38.30;}
		else if (term == 27){return 36.75;}
		else if (term == 28){return 35.30;}
		else if (term == 29){return 33.90;}
		else if (term == 30){return 32.65;}
		else if (term == 31){return 31.60;}
		else if (term == 32){return 30.60;}
		else if (term == 33){return 29.65;}
		else if (term == 34){return 28.80;}
		else if (term == 35){return 27.95;}
	}
	else if (age == 19){
		if (term == 12){return 89.80;}
		else if (term == 13){return 82.20;}
		else if (term == 14){return 75.70;}
		else if (term == 15){return 71.20;}
		else if (term == 16){return 66.15;}
		else if (term == 17){return 61.75;}
		else if (term == 18){return 57.80;}
		else if (term == 19){return 54.30;}
		else if (term == 20){return 51.15;}
		else if (term == 21){return 48.55;}
		else if (term == 22){return 46.10;}
		else if (term == 23){return 43.95;}
		else if (term == 24){return 41.90;}
		else if (term == 25){return 40.05;}
		else if (term == 26){return 38.35;}
		else if (term == 27){return 36.80;}
		else if (term == 28){return 35.30;}
		else if (term == 29){return 33.95;}
		else if (term == 30){return 32.70;}
		else if (term == 31){return 31.65;}
		else if (term == 32){return 30.65;}
		else if (term == 33){return 29.70;}
		else if (term == 34){return 28.85;}
		else if (term == 35){return 28.05;}
	}
	else if (age == 20){
		if (term == 12){return 89.85;}
		else if (term == 13){return 82.25;}
		else if (term == 14){return 75.75;}
		else if (term == 15){return 71.20;}
		else if (term == 16){return 66.15;}
		else if (term == 17){return 61.75;}
		else if (term == 18){return 57.85;}
		else if (term == 19){return 54.35;}
		else if (term == 20){return 51.20;}
		else if (term == 21){return 48.55;}
		else if (term == 22){return 46.15;}
		else if (term == 23){return 43.95;}
		else if (term == 24){return 41.95;}
		else if (term == 25){return 40.10;}
		else if (term == 26){return 38.40;}
		else if (term == 27){return 36.80;}
		else if (term == 28){return 35.35;}
		else if (term == 29){return 34.00;}
		else if (term == 30){return 32.75;}
		else if (term == 31){return 31.70;}
		else if (term == 32){return 30.70;}
		else if (term == 33){return 29.75;}
		else if (term == 34){return 28.90;}
		else if (term == 35){return 28.10;}
	}
	else if (age == 21){
		if (term == 12){return 89.85;}
		else if (term == 13){return 82.25;}
		else if (term == 14){return 75.75;}
		else if (term == 15){return 71.20;}
		else if (term == 16){return 66.20;}
		else if (term == 17){return 61.75;}
		else if (term == 18){return 57.85;}
		else if (term == 19){return 54.35;}
		else if (term == 20){return 51.20;}
		else if (term == 21){return 48.60;}
		else if (term == 22){return 46.20;}
		else if (term == 23){return 44.00;}
		else if (term == 24){return 42.00;}
		else if (term == 25){return 40.15;}
		else if (term == 26){return 38.45;}
		else if (term == 27){return 36.85;}
		else if (term == 28){return 35.40;}
		else if (term == 29){return 34.05;}
		else if (term == 30){return 32.80;}
		else if (term == 31){return 31.75;}
		else if (term == 32){return 30.75;}
		else if (term == 33){return 29.85;}
		else if (term == 34){return 29.00;}
		else if (term == 35){return 28.15;}
	}
	else if (age == 22){
		if (term == 12){return 89.85;}
		else if (term == 13){return 82.25;}
		else if (term == 14){return 75.75;}
		else if (term == 15){return 71.25;}
		else if (term == 16){return 66.20;}
		else if (term == 17){return 61.80;}
		else if (term == 18){return 57.85;}
		else if (term == 19){return 54.40;}
		else if (term == 20){return 51.25;}
		else if (term == 21){return 48.60;}
		else if (term == 22){return 46.20;}
		else if (term == 23){return 44.00;}
		else if (term == 24){return 42.00;}
		else if (term == 25){return 40.15;}
		else if (term == 26){return 38.45;}
		else if (term == 27){return 36.90;}
		else if (term == 28){return 35.45;}
		else if (term == 29){return 34.10;}
		else if (term == 30){return 32.85;}
		else if (term == 31){return 31.80;}
		else if (term == 32){return 30.85;}
		else if (term == 33){return 29.90;}
		else if (term == 34){return 29.05;}
		else if (term == 35){return 28.25;}
	}
	else if (age == 23){
		if (term == 12){return 89.85;}
		else if (term == 13){return 82.25;}
		else if (term == 14){return 75.80;}
		else if (term == 15){return 71.25;}
		else if (term == 16){return 66.25;}
		else if (term == 17){return 61.80;}
		else if (term == 18){return 57.90;}
		else if (term == 19){return 54.40;}
		else if (term == 20){return 51.25;}
		else if (term == 21){return 48.65;}
		else if (term == 22){return 46.25;}
		else if (term == 23){return 44.05;}
		else if (term == 24){return 42.05;}
		else if (term == 25){return 40.20;}
		else if (term == 26){return 38.50;}
		else if (term == 27){return 36.95;}
		else if (term == 28){return 35.50;}
		else if (term == 29){return 34.15;}
		else if (term == 30){return 32.95;}
		else if (term == 31){return 31.90;}
		else if (term == 32){return 30.90;}
		else if (term == 33){return 30.00;}
		else if (term == 34){return 29.15;}
		else if (term == 35){return 28.35;}
	}
	else if (age == 24){
		if (term == 12){return 89.90;}
		else if (term == 13){return 82.30;}
		else if (term == 14){return 75.80;}
		else if (term == 15){return 71.25;}
		else if (term == 16){return 66.25;}
		else if (term == 17){return 61.85;}
		else if (term == 18){return 57.90;}
		else if (term == 19){return 54.45;}
		else if (term == 20){return 51.30;}
		else if (term == 21){return 48.65;}
		else if (term == 22){return 46.30;}
		else if (term == 23){return 44.10;}
		else if (term == 24){return 42.10;}
		else if (term == 25){return 40.25;}
		else if (term == 26){return 38.55;}
		else if (term == 27){return 37.00;}
		else if (term == 28){return 35.55;}
		else if (term == 29){return 34.25;}
		else if (term == 30){return 33.00;}
		else if (term == 31){return 31.95;}
		else if (term == 32){return 31.00;}
		else if (term == 33){return 30.10;}
		else if (term == 34){return 29.25;}
		else if (term == 35){return 28.45;}
	}
	else if (age == 25){
		if (term == 12){return 89.90;}
		else if (term == 13){return 82.30;}
		else if (term == 14){return 75.80;}
		else if (term == 15){return 71.30;}
		else if (term == 16){return 66.25;}
		else if (term == 17){return 61.85;}
		else if (term == 18){return 57.95;}
		else if (term == 19){return 54.45;}
		else if (term == 20){return 51.35;}
		else if (term == 21){return 48.70;}
		else if (term == 22){return 46.30;}
		else if (term == 23){return 44.15;}
		else if (term == 24){return 42.15;}
		else if (term == 25){return 40.30;}
		else if (term == 26){return 38.65;}
		else if (term == 27){return 37.10;}
		else if (term == 28){return 35.65;}
		else if (term == 29){return 34.30;}
		else if (term == 30){return 33.10;}
		else if (term == 31){return 32.05;}
		else if (term == 32){return 31.10;}
		else if (term == 33){return 30.20;}
		else if (term == 34){return 29.35;}
		else if (term == 35){return 28.55;}
	}
	else if (age == 26){
		if (term == 12){return 89.90;}
		else if (term == 13){return 82.35;}
		else if (term == 14){return 75.85;}
		else if (term == 15){return 71.30;}
		else if (term == 16){return 66.30;}
		else if (term == 17){return 61.90;}
		else if (term == 18){return 58.00;}
		else if (term == 19){return 54.50;}
		else if (term == 20){return 51.40;}
		else if (term == 21){return 48.75;}
		else if (term == 22){return 46.35;}
		else if (term == 23){return 44.20;}
		else if (term == 24){return 42.20;}
		else if (term == 25){return 40.40;}
		else if (term == 26){return 38.70;}
		else if (term == 27){return 37.15;}
		else if (term == 28){return 35.75;}
		else if (term == 29){return 34.40;}
		else if (term == 30){return 33.20;}
		else if (term == 31){return 32.15;}
		else if (term == 32){return 31.20;}
		else if (term == 33){return 30.30;}
		else if (term == 34){return 29.50;}
		else if (term == 35){return 28.70;}
	}
	else if (age == 27){
		if (term == 12){return 89.95;}
		else if (term == 13){return 82.35;}
		else if (term == 14){return 75.85;}
		else if (term == 15){return 71.35;}
		else if (term == 16){return 66.35;}
		else if (term == 17){return 61.95;}
		else if (term == 18){return 58.05;}
		else if (term == 19){return 54.55;}
		else if (term == 20){return 51.45;}
		else if (term == 21){return 48.80;}
		else if (term == 22){return 46.45;}
		else if (term == 23){return 44.25;}
		else if (term == 24){return 42.30;}
		else if (term == 25){return 40.45;}
		else if (term == 26){return 38.80;}
		else if (term == 27){return 37.25;}
		else if (term == 28){return 35.85;}
		else if (term == 29){return 34.50;}
		else if (term == 30){return 33.30;}
		else if (term == 31){return 32.30;}
		else if (term == 32){return 31.35;}
		else if (term == 33){return 30.45;}
		else if (term == 34){return 29.60;}
		else if (term == 35){return 28.85;}
	}
	else if (age == 28){
		if (term == 12){return 89.95;}
		else if (term == 13){return 82.40;}
		else if (term == 14){return 75.90;}
		else if (term == 15){return 71.40;}
		else if (term == 16){return 66.40;}
		else if (term == 17){return 62.00;}
		else if (term == 18){return 58.10;}
		else if (term == 19){return 54.60;}
		else if (term == 20){return 51.50;}
		else if (term == 21){return 48.90;}
		else if (term == 22){return 46.50;}
		else if (term == 23){return 44.35;}
		else if (term == 24){return 42.35;}
		else if (term == 25){return 40.55;}
		else if (term == 26){return 38.90;}
		else if (term == 27){return 37.35;}
		else if (term == 28){return 35.95;}
		else if (term == 29){return 34.65;}
		else if (term == 30){return 33.45;}
		else if (term == 31){return 32.40;}
		else if (term == 32){return 31.45;}
		else if (term == 33){return 30.60;}
		else if (term == 34){return 29.80;}
		else if (term == 35){return 29.00;}
	}
	else if (age == 29){
		if (term == 12){return 90.00;}
		else if (term == 13){return 82.40;}
		else if (term == 14){return 75.95;}
		else if (term == 15){return 71.45;}
		else if (term == 16){return 66.45;}
		else if (term == 17){return 62.05;}
		else if (term == 18){return 58.15;}
		else if (term == 19){return 54.65;}
		else if (term == 20){return 51.55;}
		else if (term == 21){return 48.95;}
		else if (term == 22){return 46.60;}
		else if (term == 23){return 44.45;}
		else if (term == 24){return 42.45;}
		else if (term == 25){return 40.65;}
		else if (term == 26){return 39.00;}
		else if (term == 27){return 37.45;}
		else if (term == 28){return 36.05;}
		else if (term == 29){return 34.75;}
		else if (term == 30){return 33.60;}
		else if (term == 31){return 32.55;}
		else if (term == 32){return 31.65;}
		else if (term == 33){return 30.75;}
		else if (term == 34){return 29.95;}
		else if (term == 35){return 29.20;}
	}
	else if (age == 30){
		if (term == 12){return 90.05;}
		else if (term == 13){return 82.45;}
		else if (term == 14){return 76.00;}
		else if (term == 15){return 71.50;}
		else if (term == 16){return 66.50;}
		else if (term == 17){return 62.10;}
		else if (term == 18){return 58.20;}
		else if (term == 19){return 54.75;}
		else if (term == 20){return 51.65;}
		else if (term == 21){return 49.05;}
		else if (term == 22){return 46.70;}
		else if (term == 23){return 44.55;}
		else if (term == 24){return 42.55;}
		else if (term == 25){return 40.75;}
		else if (term == 26){return 39.10;}
		else if (term == 27){return 37.60;}
		else if (term == 28){return 36.20;}
		else if (term == 29){return 34.95;}
		else if (term == 30){return 33.75;}
		else if (term == 31){return 32.75;}
		else if (term == 32){return 31.80;}
		else if (term == 33){return 30.95;}
		else if (term == 34){return 30.15;}
		else if (term == 35){return 29.40;}
	}
	else if (age == 31){
		if (term == 12){return 90.10;}
		else if (term == 13){return 82.50;}
		else if (term == 14){return 76.05;}
		else if (term == 15){return 71.55;}
		else if (term == 16){return 66.55;}
		else if (term == 17){return 62.15;}
		else if (term == 18){return 58.30;}
		else if (term == 19){return 54.85;}
		else if (term == 20){return 51.75;}
		else if (term == 21){return 49.15;}
		else if (term == 22){return 46.80;}
		else if (term == 23){return 44.65;}
		else if (term == 24){return 42.70;}
		else if (term == 25){return 40.90;}
		else if (term == 26){return 39.25;}
		else if (term == 27){return 37.75;}
		else if (term == 28){return 36.40;}
		else if (term == 29){return 35.10;}
		else if (term == 30){return 33.95;}
		else if (term == 31){return 32.95;}
		else if (term == 32){return 32.00;}
		else if (term == 33){return 31.15;}
		else if (term == 34){return 30.40;}
		else if (term == 35){return 29.65;}
	}
	else if (age == 32){
		if (term == 12){return 90.15;}
		else if (term == 13){return 82.60;}
		else if (term == 14){return 76.10;}
		else if (term == 15){return 71.60;}
		else if (term == 16){return 66.65;}
		else if (term == 17){return 62.25;}
		else if (term == 18){return 58.40;}
		else if (term == 19){return 54.95;}
		else if (term == 20){return 51.85;}
		else if (term == 21){return 49.25;}
		else if (term == 22){return 46.95;}
		else if (term == 23){return 44.80;}
		else if (term == 24){return 42.85;}
		else if (term == 25){return 41.05;}
		else if (term == 26){return 39.45;}
		else if (term == 27){return 37.95;}
		else if (term == 28){return 36.55;}
		else if (term == 29){return 35.30;}
		else if (term == 30){return 34.15;}
		else if (term == 31){return 33.15;}
		else if (term == 32){return 32.25;}
		else if (term == 33){return 31.40;}
		else if (term == 34){return 30.65;}
		else if (term == 35){return 29.90;}
	}
	else if (age == 33){
		if (term == 12){return 90.20;}
		else if (term == 13){return 82.65;}
		else if (term == 14){return 76.20;}
		else if (term == 15){return 71.70;}
		else if (term == 16){return 66.75;}
		else if (term == 17){return 62.35;}
		else if (term == 18){return 58.50;}
		else if (term == 19){return 55.05;}
		else if (term == 20){return 52.00;}
		else if (term == 21){return 49.40;}
		else if (term == 22){return 47.10;}
		else if (term == 23){return 44.95;}
		else if (term == 24){return 43.00;}
		else if (term == 25){return 41.25;}
		else if (term == 26){return 39.65;}
		else if (term == 27){return 38.15;}
		else if (term == 28){return 36.80;}
		else if (term == 29){return 35.55;}
		else if (term == 30){return 34.35;}
		else if (term == 31){return 33.40;}
		else if (term == 32){return 32.50;}
		else if (term == 33){return 31.65;}
		else if (term == 34){return 30.90;}
		else if (term == 35){return 30.20;}
	}
	else if (age == 34){
		if (term == 12){return 90.30;}
		else if (term == 13){return 82.75;}
		else if (term == 14){return 76.30;}
		else if (term == 15){return 71.80;}
		else if (term == 16){return 66.85;}
		else if (term == 17){return 62.50;}
		else if (term == 18){return 58.65;}
		else if (term == 19){return 55.20;}
		else if (term == 20){return 52.15;}
		else if (term == 21){return 49.55;}
		else if (term == 22){return 47.25;}
		else if (term == 23){return 45.15;}
		else if (term == 24){return 43.20;}
		else if (term == 25){return 41.45;}
		else if (term == 26){return 39.85;}
		else if (term == 27){return 38.35;}
		else if (term == 28){return 37.00;}
		else if (term == 29){return 35.75;}
		else if (term == 30){return 34.65;}
		else if (term == 31){return 33.65;}
		else if (term == 32){return 32.80;}
		else if (term == 33){return 31.95;}
		else if (term == 34){return 31.20;}
		else if (term == 35){return 30.50;}
	}
	else if (age == 35){
		if (term == 12){return 90.40;}
		else if (term == 13){return 82.85;}
		else if (term == 14){return 76.40;}
		else if (term == 15){return 71.95;}
		else if (term == 16){return 67.00;}
		else if (term == 17){return 62.65;}
		else if (term == 18){return 58.80;}
		else if (term == 19){return 55.35;}
		else if (term == 20){return 52.30;}
		else if (term == 21){return 49.75;}
		else if (term == 22){return 47.45;}
		else if (term == 23){return 45.35;}
		else if (term == 24){return 43.45;}
		else if (term == 25){return 41.70;}
		else if (term == 26){return 40.10;}
		else if (term == 27){return 38.60;}
		else if (term == 28){return 37.30;}
		else if (term == 29){return 36.05;}
		else if (term == 30){return 34.90;}
		else if (term == 31){return 33.95;}
		else if (term == 32){return 33.10;}
		else if (term == 33){return 32.30;}
		else if (term == 34){return 31.55;}
		else if (term == 35){return 30.85;}
	}
	else if (age == 36){
		if (term == 12){return 90.50;}
		else if (term == 13){return 82.95;}
		else if (term == 14){return 76.55;}
		else if (term == 15){return 72.10;}
		else if (term == 16){return 67.15;}
		else if (term == 17){return 62.80;}
		else if (term == 18){return 58.95;}
		else if (term == 19){return 55.55;}
		else if (term == 20){return 52.50;}
		else if (term == 21){return 49.95;}
		else if (term == 22){return 47.65;}
		else if (term == 23){return 45.55;}
		else if (term == 24){return 43.65;}
		else if (term == 25){return 41.95;}
		else if (term == 26){return 40.35;}
		else if (term == 27){return 38.90;}
		else if (term == 28){return 37.55;}
		else if (term == 29){return 36.35;}
		else if (term == 30){return 35.25;}
		else if (term == 31){return 34.30;}
		else if (term == 32){return 33.45;}
		else if (term == 33){return 32.65;}
		else if (term == 34){return 31.90;}
		else if (term == 35){return 31.25;}
	}
	else if (age == 37){
		if (term == 12){return 90.60;}
		else if (term == 13){return 83.10;}
		else if (term == 14){return 76.65;}
		else if (term == 15){return 72.25;}
		else if (term == 16){return 67.30;}
		else if (term == 17){return 62.95;}
		else if (term == 18){return 59.15;}
		else if (term == 19){return 55.75;}
		else if (term == 20){return 52.75;}
		else if (term == 21){return 50.20;}
		else if (term == 22){return 47.90;}
		else if (term == 23){return 45.85;}
		else if (term == 24){return 43.95;}
		else if (term == 25){return 42.20;}
		else if (term == 26){return 40.65;}
		else if (term == 27){return 39.20;}
		else if (term == 28){return 37.90;}
		else if (term == 29){return 36.70;}
		else if (term == 30){return 35.60;}
		else if (term == 31){return 34.65;}
		else if (term == 32){return 33.80;}
		else if (term == 33){return 33.00;}
		else if (term == 34){return 32.30;}
		else if (term == 35){return 31.65;}
	}
	else if (age == 38){
		if (term == 12){return 90.75;}
		else if (term == 13){return 83.25;}
		else if (term == 14){return 76.85;}
		else if (term == 15){return 72.40;}
		else if (term == 16){return 67.50;}
		else if (term == 17){return 63.20;}
		else if (term == 18){return 59.40;}
		else if (term == 19){return 56.00;}
		else if (term == 20){return 53.00;}
		else if (term == 21){return 50.45;}
		else if (term == 22){return 48.20;}
		else if (term == 23){return 46.10;}
		else if (term == 24){return 44.25;}
		else if (term == 25){return 42.55;}
		else if (term == 26){return 40.95;}
		else if (term == 27){return 39.55;}
		else if (term == 28){return 38.25;}
		else if (term == 29){return 37.05;}
		else if (term == 30){return 35.95;}
		else if (term == 31){return 35.05;}
		else if (term == 32){return 34.20;}
		else if (term == 33){return 33.45;}
		else if (term == 34){return 32.75;}
		else if (term == 35){return 32.10;}
	}
	else if (age == 39){
		if (term == 12){return 90.95;}
		else if (term == 13){return 83.45;}
		else if (term == 14){return 77.05;}
		else if (term == 15){return 72.65;}
		else if (term == 16){return 67.70;}
		else if (term == 17){return 63.40;}
		else if (term == 18){return 59.65;}
		else if (term == 19){return 56.25;}
		else if (term == 20){return 53.25;}
		else if (term == 21){return 50.75;}
		else if (term == 22){return 48.50;}
		else if (term == 23){return 46.45;}
		else if (term == 24){return 44.55;}
		else if (term == 25){return 42.85;}
		else if (term == 26){return 41.35;}
		else if (term == 27){return 39.90;}
		else if (term == 28){return 38.65;}
		else if (term == 29){return 37.45;}
		else if (term == 30){return 36.40;}
		else if (term == 31){return 35.50;}
		else if (term == 32){return 34.65;}
		else if (term == 33){return 33.90;}
		else if (term == 34){return 33.20;}
		else if (term == 35){return 32.60;}
	}
	else if (age == 40){
		if (term == 12){return 91.10;}
		else if (term == 13){return 83.65;}
		else if (term == 14){return 77.25;}
		else if (term == 15){return 72.85;}
		else if (term == 16){return 67.95;}
		else if (term == 17){return 63.70;}
		else if (term == 18){return 59.90;}
		else if (term == 19){return 56.55;}
		else if (term == 20){return 53.55;}
		else if (term == 21){return 51.05;}
		else if (term == 22){return 48.80;}
		else if (term == 23){return 46.80;}
		else if (term == 24){return 44.95;}
		else if (term == 25){return 43.25;}
		else if (term == 26){return 41.70;}
		else if (term == 27){return 40.30;}
		else if (term == 28){return 39.05;}
		else if (term == 29){return 37.90;}
		else if (term == 30){return 36.85;}
		else if (term == 31){return 35.95;}
		else if (term == 32){return 35.15;}
		else if (term == 33){return 34.40;}
		else if (term == 34){return 33.75;}
		else if (term == 35){return 33.15;}
	}
	else if (age == 41){
		if (term == 12){return 91.35;}
		else if (term == 13){return 83.85;}
		else if (term == 14){return 77.50;}
		else if (term == 15){return 73.15;}
		else if (term == 16){return 68.25;}
		else if (term == 17){return 64.00;}
		else if (term == 18){return 60.20;}
		else if (term == 19){return 56.90;}
		else if (term == 20){return 53.90;}
		else if (term == 21){return 51.45;}
		else if (term == 22){return 49.20;}
		else if (term == 23){return 47.15;}
		else if (term == 24){return 45.35;}
		else if (term == 25){return 43.65;}
		else if (term == 26){return 42.15;}
		else if (term == 27){return 40.75;}
		else if (term == 28){return 39.50;}
		else if (term == 29){return 38.40;}
		else if (term == 30){return 37.35;}
		else if (term == 31){return 36.45;}
		else if (term == 32){return 35.70;}
		else if (term == 33){return 34.95;}
		else if (term == 34){return 34.30;}
	}
	else if (age == 42){
		if (term == 12){return 91.60;}
		else if (term == 13){return 84.15;}
		else if (term == 14){return 77.75;}
		else if (term == 15){return 73.45;}
		else if (term == 16){return 68.55;}
		else if (term == 17){return 64.30;}
		else if (term == 18){return 60.55;}
		else if (term == 19){return 57.25;}
		else if (term == 20){return 54.30;}
		else if (term == 21){return 51.80;}
		else if (term == 22){return 49.60;}
		else if (term == 23){return 47.60;}
		else if (term == 24){return 45.75;}
		else if (term == 25){return 44.10;}
		else if (term == 26){return 42.60;}
		else if (term == 27){return 41.25;}
		else if (term == 28){return 40.00;}
		else if (term == 29){return 38.90;}
		else if (term == 30){return 37.90;}
		else if (term == 31){return 37.05;}
		else if (term == 32){return 36.25;}
		else if (term == 33){return 35.55;}
	}
	else if (age == 43){
		if (term == 12){return 91.85;}
		else if (term == 13){return 84.40;}
		else if (term == 14){return 78.10;}
		else if (term == 15){return 73.80;}
		else if (term == 16){return 68.90;}
		else if (term == 17){return 64.70;}
		else if (term == 18){return 60.95;}
		else if (term == 19){return 57.65;}
		else if (term == 20){return 54.70;}
		else if (term == 21){return 52.25;}
		else if (term == 22){return 50.05;}
		else if (term == 23){return 48.05;}
		else if (term == 24){return 46.25;}
		else if (term == 25){return 44.60;}
		else if (term == 26){return 43.15;}
		else if (term == 27){return 41.80;}
		else if (term == 28){return 40.60;}
		else if (term == 29){return 39.45;}
		else if (term == 30){return 38.50;}
		else if (term == 31){return 37.65;}
		else if (term == 32){return 36.90;}
	}
	else if (age == 44){
		if (term == 12){return 92.20;}
		else if (term == 13){return 84.75;}
		else if (term == 14){return 78.45;}
		else if (term == 15){return 74.15;}
		else if (term == 16){return 69.30;}
		else if (term == 17){return 65.10;}
		else if (term == 18){return 61.35;}
		else if (term == 19){return 58.10;}
		else if (term == 20){return 55.15;}
		else if (term == 21){return 52.70;}
		else if (term == 22){return 50.55;}
		else if (term == 23){return 48.55;}
		else if (term == 24){return 46.75;}
		else if (term == 25){return 45.15;}
		else if (term == 26){return 43.70;}
		else if (term == 27){return 42.35;}
		else if (term == 28){return 41.20;}
		else if (term == 29){return 40.10;}
		else if (term == 30){return 39.10;}
		else if (term == 31){return 38.30;}
	}
	else if (age == 45){
		if (term == 12){return 92.55;}
		else if (term == 13){return 85.10;}
		else if (term == 14){return 78.80;}
		else if (term == 15){return 74.55;}
		else if (term == 16){return 69.75;}
		else if (term == 17){return 65.50;}
		else if (term == 18){return 61.80;}
		else if (term == 19){return 58.55;}
		else if (term == 20){return 55.65;}
		else if (term == 21){return 53.25;}
		else if (term == 22){return 51.05;}
		else if (term == 23){return 49.10;}
		else if (term == 24){return 47.35;}
		else if (term == 25){return 45.75;}
		else if (term == 26){return 44.30;}
		else if (term == 27){return 43.00;}
		else if (term == 28){return 41.85;}
		else if (term == 29){return 40.75;}
		else if (term == 30){return 39.80;}
	}
	else if (age == 46){
		if (term == 12){return 92.90;}
		else if (term == 13){return 85.50;}
		else if (term == 14){return 79.20;}
		else if (term == 15){return 75.00;}
		else if (term == 16){return 70.20;}
		else if (term == 17){return 66.00;}
		else if (term == 18){return 62.30;}
		else if (term == 19){return 59.05;}
		else if (term == 20){return 56.20;}
		else if (term == 21){return 53.75;}
		else if (term == 22){return 51.60;}
		else if (term == 23){return 49.70;}
		else if (term == 24){return 47.95;}
		else if (term == 25){return 46.35;}
		else if (term == 26){return 44.95;}
		else if (term == 27){return 43.70;}
		else if (term == 28){return 42.55;}
		else if (term == 29){return 41.50;}
	}
	else if (age == 47){
		if (term == 12){return 93.30;}
		else if (term == 13){return 85.95;}
		else if (term == 14){return 79.65;}
		else if (term == 15){return 75.45;}
		else if (term == 16){return 70.70;}
		else if (term == 17){return 66.50;}
		else if (term == 18){return 62.85;}
		else if (term == 19){return 59.60;}
		else if (term == 20){return 56.75;}
		else if (term == 21){return 54.35;}
		else if (term == 22){return 52.25;}
		else if (term == 23){return 50.30;}
		else if (term == 24){return 48.60;}
		else if (term == 25){return 47.05;}
		else if (term == 26){return 45.65;}
		else if (term == 27){return 44.40;}
		else if (term == 28){return 43.30;}
	}
	else if (age == 48){
		if (term == 12){return 93.75;}
		else if (term == 13){return 86.40;}
		else if (term == 14){return 80.15;}
		else if (term == 15){return 76.00;}
		else if (term == 16){return 71.20;}
		else if (term == 17){return 67.05;}
		else if (term == 18){return 63.40;}
		else if (term == 19){return 60.20;}
		else if (term == 20){return 57.35;}
		else if (term == 21){return 55.00;}
		else if (term == 22){return 52.90;}
		else if (term == 23){return 51.00;}
		else if (term == 24){return 49.30;}
		else if (term == 25){return 47.80;}
		else if (term == 26){return 46.40;}
		else if (term == 27){return 45.20;}
	}
	else if (age == 49){
		if (term == 12){return 94.25;}
		else if (term == 13){return 86.90;}
		else if (term == 14){return 80.65;}
		else if (term == 15){return 76.50;}
		else if (term == 16){return 71.75;}
		else if (term == 17){return 67.65;}
		else if (term == 18){return 64.00;}
		else if (term == 19){return 60.85;}
		else if (term == 20){return 58.00;}
		else if (term == 21){return 55.70;}
		else if (term == 22){return 53.60;}
		else if (term == 23){return 51.75;}
		else if (term == 24){return 50.05;}
		else if (term == 25){return 48.55;}
		else if (term == 26){return 47.25;}
	}
	else if (age == 50){
		if (term == 12){return 94.75;}
		else if (term == 13){return 87.40;}
		else if (term == 14){return 81.20;}
		else if (term == 15){return 77.10;}
		else if (term == 16){return 72.35;}
		else if (term == 17){return 68.25;}
		else if (term == 18){return 64.65;}
		else if (term == 19){return 61.50;}
		else if (term == 20){return 58.70;}
		else if (term == 21){return 56.40;}
		else if (term == 22){return 54.35;}
		else if (term == 23){return 52.50;}
		else if (term == 24){return 50.85;}
		else if (term == 25){return 49.40;}
	}
	else if (age == 51){
		if (term == 12){return 95.25;}
		else if (term == 13){return 87.95;}
		else if (term == 14){return 81.75;}
		else if (term == 15){return 77.70;}
		else if (term == 16){return 73.00;}
		else if (term == 17){return 68.90;}
		else if (term == 18){return 65.35;}
		else if (term == 19){return 62.20;}
		else if (term == 20){return 59.45;}
		else if (term == 21){return 57.20;}
		else if (term == 22){return 55.15;}
		else if (term == 23){return 53.35;}
		else if (term == 24){return 51.75;}
	}
	else if (age == 52){
		if (term == 12){return 95.80;}
		else if (term == 13){return 88.55;}
		else if (term == 14){return 82.35;}
		else if (term == 15){return 78.35;}
		else if (term == 16){return 73.65;}
		else if (term == 17){return 69.60;}
		else if (term == 18){return 66.10;}
		else if (term == 19){return 63.00;}
		else if (term == 20){return 60.25;}
		else if (term == 21){return 58.00;}
		else if (term == 22){return 56.00;}
		else if (term == 23){return 54.25;}
	}
	else if (age == 53){
		if (term == 12){return 96.40;}
		else if (term == 13){return 89.15;}
		else if (term == 14){return 83.00;}
		else if (term == 15){return 79.05;}
		else if (term == 16){return 74.40;}
		else if (term == 17){return 70.35;}
		else if (term == 18){return 66.85;}
		else if (term == 19){return 63.80;}
		else if (term == 20){return 61.10;}
		else if (term == 21){return 58.90;}
		else if (term == 22){return 56.95;}
	}
	else if (age == 54){
		if (term == 12){return 97.00;}
		else if (term == 13){return 89.80;}
		else if (term == 14){return 83.70;}
		else if (term == 15){return 79.75;}
		else if (term == 16){return 75.15;}
		else if (term == 17){return 71.15;}
		else if (term == 18){return 67.70;}
		else if (term == 19){return 64.70;}
		else if (term == 20){return 62.05;}
		else if (term == 21){return 59.85;}
	}
	else if (age == 55){
		if (term == 12){return 97.65;}
		else if (term == 13){return 90.50;}
		else if (term == 14){return 84.40;}
		else if (term == 15){return 80.55;}
		else if (term == 16){return 75.95;}
		else if (term == 17){return 72.00;}
		else if (term == 18){return 68.60;}
		else if (term == 19){return 65.60;}
		else if (term == 20){return 63.00;}
	}
}


var d = base(age, term);
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
var prre=tota+a(premium)*(1.0175);
document.getElementById('tot').innerHTML=Math.round(pre);
document.getElementById('tot1').innerHTML=Math.round(prre);

document.getElementsByClassName('inp')[0].value="";
document.getElementsByClassName('age')[0].value="";
document.getElementsByClassName('term')[0].value="";
}
