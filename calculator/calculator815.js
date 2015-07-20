var myscript = function (){
var ag=document.querySelector('.age');
var ter=document.querySelector('.term');
var input=document.querySelector('.inp');

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
   if (age == 18){
        if (term == 15){return 78.55;}
        else if (term == 16){return 73.10;}
        else if (term == 17){return 68.30;}
        else if (term == 18){return 64.05;}
        else if (term == 19){return 60.25;}
        else if (term == 20){return 56.80;}
        else if (term == 21){return 53.75;}
        else if (term == 22){return 50.95;}
        else if (term == 23){return 48.40;}
        else if (term == 24){return 46.05;}
        else if (term == 25){return 43.95;}
        else if (term == 26){return 41.95;}
        else if (term == 27){return 40.15;}
        else if (term == 28){return 38.50;}
        else if (term == 29){return 36.95;}
        else if (term == 30){return 35.50;}
        else if (term == 31){return 34.15;}
        else if (term == 32){return 32.90;}
        else if (term == 33){return 31.75;}
        else if (term == 34){return 30.65;}
        else if (term == 35){return 29.65;}
    }
	else if (age == 19){
        if (term == 15){return 78.80;}
        else if (term == 16){return 73.35;}
        else if (term == 17){return 68.50;}
        else if (term == 18){return 64.25;}
        else if (term == 19){return 60.45;}
        else if (term == 20){return 57.00;}
        else if (term == 21){return 53.95;}
        else if (term == 22){return 51.15;}
        else if (term == 23){return 48.60;}
        else if (term == 24){return 46.25;}
        else if (term == 25){return 44.10;}
        else if (term == 26){return 42.15;}
        else if (term == 27){return 40.35;}
        else if (term == 28){return 38.65;}
        else if (term == 29){return 37.10;}
        else if (term == 30){return 35.65;}
        else if (term == 31){return 34.30;}
        else if (term == 32){return 33.05;}
        else if (term == 33){return 31.90;}
        else if (term == 34){return 30.80;}
        else if (term == 35){return 29.80;}
    }
	else if (age == 20){
        if (term == 15){return 79.05;}
        else if (term == 16){return 73.60;}
        else if (term == 17){return 68.75;}
        else if (term == 18){return 64.50;}
        else if (term == 19){return 60.65;}
        else if (term == 20){return 57.25;}
        else if (term == 21){return 54.15;}
        else if (term == 22){return 51.35;}
        else if (term == 23){return 48.80;}
        else if (term == 24){return 46.45;}
        else if (term == 25){return 44.30;}
        else if (term == 26){return 42.35;}
        else if (term == 27){return 40.50;}
        else if (term == 28){return 38.85;}
        else if (term == 29){return 37.25;}
        else if (term == 30){return 35.85;}
        else if (term == 31){return 34.50;}
        else if (term == 32){return 33.25;}
        else if (term == 33){return 32.05;}
        else if (term == 34){return 30.95;}
        else if (term == 35){return 29.95;}
    }
	else if (age == 21){
        if (term == 15){return 79.30;}
        else if (term == 16){return 73.85;}
        else if (term == 17){return 69.00;}
        else if (term == 18){return 64.70;}
        else if (term == 19){return 60.90;}
        else if (term == 20){return 57.45;}
        else if (term == 21){return 54.35;}
        else if (term == 22){return 51.55;}
        else if (term == 23){return 49.00;}
        else if (term == 24){return 46.65;}
        else if (term == 25){return 44.50;}
        else if (term == 26){return 42.50;}
        else if (term == 27){return 40.70;}
        else if (term == 28){return 39.00;}
        else if (term == 29){return 37.45;}
        else if (term == 30){return 36.00;}
        else if (term == 31){return 34.65;}
        else if (term == 32){return 33.40;}
        else if (term == 33){return 32.25;}
        else if (term == 34){return 31.15;}
        else if (term == 35){return 30.10;}
    }
	else if (age == 22){
        if (term == 15){return 79.60;}
        else if (term == 16){return 74.10;}
        else if (term == 17){return 69.25;}
        else if (term == 18){return 64.95;}
        else if (term == 19){return 61.15;}
        else if (term == 20){return 57.70;}
        else if (term == 21){return 54.60;}
        else if (term == 22){return 51.75;}
        else if (term == 23){return 49.20;}
        else if (term == 24){return 46.85;}
        else if (term == 25){return 44.70;}
        else if (term == 26){return 42.70;}
        else if (term == 27){return 40.90;}
        else if (term == 28){return 39.20;}
        else if (term == 29){return 37.65;}
        else if (term == 30){return 36.20;}
        else if (term == 31){return 34.85;}
        else if (term == 32){return 33.60;}
        else if (term == 33){return 32.40;}
        else if (term == 34){return 31.30;}
        else if (term == 35){return 30.30;}
    }
	else if (age == 23){
        if (term == 15){return 79.90;}
        else if (term == 16){return 74.40;}
        else if (term == 17){return 69.55;}
        else if (term == 18){return 65.20;}
        else if (term == 19){return 61.40;}
        else if (term == 20){return 57.95;}
        else if (term == 21){return 54.80;}
        else if (term == 22){return 52.00;}
        else if (term == 23){return 49.40;}
        else if (term == 24){return 47.05;}
        else if (term == 25){return 44.90;}
        else if (term == 26){return 42.90;}
        else if (term == 27){return 41.10;}
        else if (term == 28){return 39.40;}
        else if (term == 29){return 37.85;}
        else if (term == 30){return 36.35;}
        else if (term == 31){return 35.00;}
        else if (term == 32){return 33.75;}
        else if (term == 33){return 32.60;}
        else if (term == 34){return 31.50;}
        else if (term == 35){return 30.50;}
    }
	else if (age == 24){
        if (term == 15){return 80.20;}
        else if (term == 16){return 74.70;}
        else if (term == 17){return 69.80;}
        else if (term == 18){return 65.50;}
        else if (term == 19){return 61.65;}
        else if (term == 20){return 58.20;}
        else if (term == 21){return 55.05;}
        else if (term == 22){return 52.25;}
        else if (term == 23){return 49.65;}
        else if (term == 24){return 47.30;}
        else if (term == 25){return 45.15;}
        else if (term == 26){return 43.15;}
        else if (term == 27){return 41.30;}
        else if (term == 28){return 39.60;}
        else if (term == 29){return 38.05;}
        else if (term == 30){return 36.60;}
        else if (term == 31){return 35.25;}
        else if (term == 32){return 33.95;}
        else if (term == 33){return 32.80;}
        else if (term == 34){return 31.70;}
        else if (term == 35){return 30.70;}
    }
	else if (age == 25){
        if (term == 15){return 80.55;}
        else if (term == 16){return 75.00;}
        else if (term == 17){return 70.10;}
        else if (term == 18){return 65.80;}
        else if (term == 19){return 61.90;}
        else if (term == 20){return 58.45;}
        else if (term == 21){return 55.30;}
        else if (term == 22){return 52.50;}
        else if (term == 23){return 49.90;}
        else if (term == 24){return 47.55;}
        else if (term == 25){return 45.35;}
        else if (term == 26){return 43.35;}
        else if (term == 27){return 41.50;}
        else if (term == 28){return 39.80;}
        else if (term == 29){return 38.25;}
        else if (term == 30){return 36.80;}
        else if (term == 31){return 35.45;}
        else if (term == 32){return 34.20;}
        else if (term == 33){return 33.00;}
        else if (term == 34){return 31.95;}
        else if (term == 35){return 30.90;}
    }
	else if (age == 26){
        if (term == 15){return 80.90;}
        else if (term == 16){return 75.30;}
        else if (term == 17){return 70.40;}
        else if (term == 18){return 66.10;}
        else if (term == 19){return 62.20;}
        else if (term == 20){return 58.75;}
        else if (term == 21){return 55.60;}
        else if (term == 22){return 52.75;}
        else if (term == 23){return 50.15;}
        else if (term == 24){return 47.80;}
        else if (term == 25){return 45.60;}
        else if (term == 26){return 43.60;}
        else if (term == 27){return 41.75;}
        else if (term == 28){return 40.05;}
        else if (term == 29){return 38.50;}
        else if (term == 30){return 37.05;}
        else if (term == 31){return 35.65;}
        else if (term == 32){return 34.40;}
        else if (term == 33){return 33.25;}
        else if (term == 34){return 32.15;}
        else if (term == 35){return 31.15;}
    }
	else if (age == 27){
        if (term == 15){return 81.25;}
        else if (term == 16){return 75.65;}
        else if (term == 17){return 70.75;}
        else if (term == 18){return 66.40;}
        else if (term == 19){return 62.50;}
        else if (term == 20){return 59.05;}
        else if (term == 21){return 55.90;}
        else if (term == 22){return 53.00;}
        else if (term == 23){return 50.40;}
        else if (term == 24){return 48.05;}
        else if (term == 25){return 45.85;}
        else if (term == 26){return 43.85;}
        else if (term == 27){return 42.00;}
        else if (term == 28){return 40.30;}
        else if (term == 29){return 38.75;}
        else if (term == 30){return 37.30;}
        else if (term == 31){return 35.90;}
        else if (term == 32){return 34.65;}
        else if (term == 33){return 33.50;}
        else if (term == 34){return 32.40;}
        else if (term == 35){return 31.40;}
    }
	else if (age == 28){
        if (term == 15){return 81.65;}
        else if (term == 16){return 76.05;}
        else if (term == 17){return 71.10;}
        else if (term == 18){return 66.75;}
        else if (term == 19){return 62.85;}
        else if (term == 20){return 59.35;}
        else if (term == 21){return 56.20;}
        else if (term == 22){return 53.30;}
        else if (term == 23){return 50.70;}
        else if (term == 24){return 48.30;}
        else if (term == 25){return 46.15;}
        else if (term == 26){return 44.15;}
        else if (term == 27){return 42.30;}
        else if (term == 28){return 40.60;}
        else if (term == 29){return 39.00;}
        else if (term == 30){return 37.55;}
        else if (term == 31){return 36.20;}
        else if (term == 32){return 34.95;}
        else if (term == 33){return 33.80;}
        else if (term == 34){return 32.70;}
        else if (term == 35){return 31.70;}
    }
	else if (age == 29){
        if (term == 15){return 82.05;}
        else if (term == 16){return 76.40;}
        else if (term == 17){return 71.50;}
        else if (term == 18){return 67.10;}
        else if (term == 19){return 63.20;}
        else if (term == 20){return 59.70;}
        else if (term == 21){return 56.50;}
        else if (term == 22){return 53.65;}
        else if (term == 23){return 51.00;}
        else if (term == 24){return 48.60;}
        else if (term == 25){return 46.45;}
        else if (term == 26){return 44.40;}
        else if (term == 27){return 42.55;}
        else if (term == 28){return 40.85;}
        else if (term == 29){return 39.30;}
        else if (term == 30){return 37.85;}
        else if (term == 31){return 36.50;}
        else if (term == 32){return 35.25;}
        else if (term == 33){return 34.05;}
        else if (term == 34){return 33.00;}
        else if (term == 35){return 32.00;}
    }
	else if (age == 30){
        if (term == 15){return 82.45;}
        else if (term == 16){return 76.85;}
        else if (term == 17){return 71.85;}
        else if (term == 18){return 67.50;}
        else if (term == 19){return 63.55;}
        else if (term == 20){return 60.05;}
        else if (term == 21){return 56.85;}
        else if (term == 22){return 53.95;}
        else if (term == 23){return 51.35;}
        else if (term == 24){return 48.95;}
        else if (term == 25){return 46.75;}
        else if (term == 26){return 44.75;}
        else if (term == 27){return 42.90;}
        else if (term == 28){return 41.20;}
        else if (term == 29){return 39.60;}
        else if (term == 30){return 38.15;}
        else if (term == 31){return 36.80;}
        else if (term == 32){return 35.55;}
        else if (term == 33){return 34.40;}
        else if (term == 34){return 33.30;}
        else if (term == 35){return 32.30;}
    }
	else if (age == 31){
        if (term == 15){return 82.90;}
        else if (term == 16){return 77.25;}
        else if (term == 17){return 72.30;}
        else if (term == 18){return 67.85;}
        else if (term == 19){return 63.95;}
        else if (term == 20){return 60.40;}
        else if (term == 21){return 57.20;}
        else if (term == 22){return 54.30;}
        else if (term == 23){return 51.70;}
        else if (term == 24){return 49.30;}
        else if (term == 25){return 47.10;}
        else if (term == 26){return 45.05;}
        else if (term == 27){return 43.20;}
        else if (term == 28){return 41.50;}
        else if (term == 29){return 39.95;}
        else if (term == 30){return 38.50;}
        else if (term == 31){return 37.15;}
        else if (term == 32){return 35.90;}
        else if (term == 33){return 34.70;}
        else if (term == 34){return 33.65;}
        else if (term == 35){return 32.65;}
    }
	else if (age == 32){
        if (term == 15){return 83.40;}
        else if (term == 16){return 77.70;}
        else if (term == 17){return 72.70;}
        else if (term == 18){return 68.30;}
        else if (term == 19){return 64.35;}
        else if (term == 20){return 60.80;}
        else if (term == 21){return 57.60;}
        else if (term == 22){return 54.70;}
        else if (term == 23){return 52.05;}
        else if (term == 24){return 49.65;}
        else if (term == 25){return 47.45;}
        else if (term == 26){return 45.45;}
        else if (term == 27){return 43.60;}
        else if (term == 28){return 41.85;}
        else if (term == 29){return 40.30;}
        else if (term == 30){return 38.85;}
        else if (term == 31){return 37.50;}
        else if (term == 32){return 36.25;}
        else if (term == 33){return 35.10;}
        else if (term == 34){return 34.00;}
        else if (term == 35){return 33.00;}
    }
	else if (age == 33){
        if (term == 15){return 83.90;}
        else if (term == 16){return 78.20;}
        else if (term == 17){return 73.20;}
        else if (term == 18){return 68.75;}
        else if (term == 19){return 64.75;}
        else if (term == 20){return 61.20;}
        else if (term == 21){return 58.00;}
        else if (term == 22){return 55.10;}
        else if (term == 23){return 52.45;}
        else if (term == 24){return 40.05;}
        else if (term == 25){return 47.85;}
        else if (term == 26){return 45.80;}
        else if (term == 27){return 43.95;}
        else if (term == 28){return 42.25;}
        else if (term == 29){return 40.70;}
        else if (term == 30){return 39.25;}
        else if (term == 31){return 37.90;}
        else if (term == 32){return 36.65;}
        else if (term == 33){return 35.50;}
        else if (term == 34){return 34.40;}
        else if (term == 35){return 33.40;}
    }
	else if (age == 34){
        if (term == 15){return 84.45;}
        else if (term == 16){return 78.70;}
        else if (term == 17){return 73.65;}
        else if (term == 18){return 69.20;}
        else if (term == 19){return 65.20;}
        else if (term == 20){return 61.65;}
        else if (term == 21){return 58.40;}
        else if (term == 22){return 55.50;}
        else if (term == 23){return 52.85;}
        else if (term == 24){return 50.45;}
        else if (term == 25){return 48.25;}
        else if (term == 26){return 46.25;}
        else if (term == 27){return 44.35;}
        else if (term == 28){return 42.65;}
        else if (term == 29){return 41.10;}
        else if (term == 30){return 39.65;}
        else if (term == 31){return 38.30;}
        else if (term == 32){return 37.05;}
        else if (term == 33){return 35.90;}
        else if (term == 34){return 34.85;}
        else if (term == 35){return 33.85;}
    }
	else if (age == 35){
        if (term == 15){return 85.00;}
        else if (term == 16){return 79.25;}
        else if (term == 17){return 74.15;}
        else if (term == 18){return 69.70;}
        else if (term == 19){return 65.70;}
        else if (term == 20){return 62.10;}
        else if (term == 21){return 58.90;}
        else if (term == 22){return 55.95;}
        else if (term == 23){return 53.30;}
        else if (term == 24){return 50.90;}
        else if (term == 25){return 48.70;}
        else if (term == 26){return 46.65;}
        else if (term == 27){return 44.80;}
        else if (term == 28){return 43.10;}
        else if (term == 29){return 41.55;}
        else if (term == 30){return 40.10;}
        else if (term == 31){return 38.75;}
        else if (term == 32){return 37.50;}
        else if (term == 33){return 36.35;}
        else if (term == 34){return 35.30;}
        else if (term == 35){return 34.30;}
    }
	else if (age == 36){
        if (term == 15){return 85.55;}
        else if (term == 16){return 79.80;}
        else if (term == 17){return 74.70;}
        else if (term == 18){return 70.20;}
        else if (term == 19){return 66.20;}
        else if (term == 20){return 62.60;}
        else if (term == 21){return 59.35;}
        else if (term == 22){return 56.45;}
        else if (term == 23){return 53.80;}
        else if (term == 24){return 51.35;}
        else if (term == 25){return 49.15;}
        else if (term == 26){return 47.15;}
        else if (term == 27){return 45.30;}
        else if (term == 28){return 43.55;}
        else if (term == 29){return 42.00;}
        else if (term == 30){return 40.55;}
        else if (term == 31){return 39.20;}
        else if (term == 32){return 37.95;}
        else if (term == 33){return 36.85;}
        else if (term == 34){return 35.75;}
        else if (term == 35){return 34.80;}
    }
	else if (age == 37){
        if (term == 15){return 86.20;}
        else if (term == 16){return 80.35;}
        else if (term == 17){return 75.30;}
        else if (term == 18){return 70.75;}
        else if (term == 19){return 66.75;}
        else if (term == 20){return 63.15;}
        else if (term == 21){return 59.90;}
        else if (term == 22){return 56.95;}
        else if (term == 23){return 54.30;}
        else if (term == 24){return 51.90;}
        else if (term == 25){return 49.65;}
        else if (term == 26){return 47.65;}
        else if (term == 27){return 45.80;}
        else if (term == 28){return 44.10;}
        else if (term == 29){return 42.50;}
        else if (term == 30){return 41.05;}
        else if (term == 31){return 39.70;}
        else if (term == 32){return 38.50;}
        else if (term == 33){return 37.35;}
        else if (term == 34){return 36.30;}
        else if (term == 35){return 35.30;}
    }
	else if (age == 38){
        if (term == 15){return 86.80;}
        else if (term == 16){return 81.00;}
        else if (term == 17){return 75.85;}
        else if (term == 18){return 71.35;}
        else if (term == 19){return 67.30;}
        else if (term == 20){return 63.70;}
        else if (term == 21){return 60.45;}
        else if (term == 22){return 57.50;}
        else if (term == 23){return 54.85;}
        else if (term == 24){return 52.40;}
        else if (term == 25){return 50.20;}
        else if (term == 26){return 48.15;}
        else if (term == 27){return 46.30;}
        else if (term == 28){return 44.60;}
        else if (term == 29){return 43.05;}
        else if (term == 30){return 41.60;}
        else if (term == 31){return 40.25;}
        else if (term == 32){return 39.00;}
        else if (term == 33){return 37.90;}
        else if (term == 34){return 36.85;}
        else if (term == 35){return 35.85;}
    }
	else if (age == 39){
        if (term == 15){return 87.50;}
        else if (term == 16){return 81.65;}
        else if (term == 17){return 76.50;}
        else if (term == 18){return 71.95;}
        else if (term == 19){return 67.90;}
        else if (term == 20){return 64.30;}
        else if (term == 21){return 61.05;}
        else if (term == 22){return 58.10;}
        else if (term == 23){return 55.40;}
        else if (term == 24){return 53.00;}
        else if (term == 25){return 50.75;}
        else if (term == 26){return 48.75;}
        else if (term == 27){return 46.90;}
        else if (term == 28){return 45.20;}
        else if (term == 29){return 43.60;}
        else if (term == 30){return 42.15;}
        else if (term == 31){return 40.85;}
        else if (term == 32){return 39.60;}
        else if (term == 33){return 38.45;}
        else if (term == 34){return 37.45;}
        else if (term == 35){return 36.45;}
    }
	else if (age == 40){
        if (term == 15){return 88.20;}
        else if (term == 16){return 82.35;}
        else if (term == 17){return 77.20;}
        else if (term == 18){return 72.60;}
        else if (term == 19){return 68.55;}
        else if (term == 20){return 64.90;}
        else if (term == 21){return 61.65;}
        else if (term == 22){return 58.70;}
        else if (term == 23){return 56.05;}
        else if (term == 24){return 53.60;}
        else if (term == 25){return 51.40;}
        else if (term == 26){return 49.35;}
        else if (term == 27){return 47.50;}
        else if (term == 28){return 45.80;}
        else if (term == 29){return 44.20;}
        else if (term == 30){return 42.75;}
        else if (term == 31){return 41.45;}
        else if (term == 32){return 40.20;}
        else if (term == 33){return 39.10;}
        else if (term == 34){return 38.05;}
        else if (term == 35){return 37.10;}
    }
	else if (age == 41){
        if (term == 15){return 88.95;}
        else if (term == 16){return 83.05;}
        else if (term == 17){return 77.90;}
        else if (term == 18){return 73.30;}
        else if (term == 19){return 69.25;}
        else if (term == 20){return 65.60;}
        else if (term == 21){return 62.30;}
        else if (term == 22){return 59.35;}
        else if (term == 23){return 56.70;}
        else if (term == 24){return 54.25;}
        else if (term == 25){return 52.00;}
        else if (term == 26){return 50.00;}
        else if (term == 27){return 48.15;}
        else if (term == 28){return 46.40;}
        else if (term == 29){return 44.85;}
        else if (term == 30){return 43.40;}
        else if (term == 31){return 42.10;}
        else if (term == 32){return 40.90;}
        else if (term == 33){return 39.75;}
        else if (term == 34){return 38.75;}
    }
	else if (age == 42){
        if (term == 15){return 89.75;}
        else if (term == 16){return 83.85;}
        else if (term == 17){return 78.65;}
        else if (term == 18){return 74.05;}
        else if (term == 19){return 69.95;}
        else if (term == 20){return 66.30;}
        else if (term == 21){return 63.00;}
        else if (term == 22){return 60.05;}
        else if (term == 23){return 57.35;}
        else if (term == 24){return 54.95;}
        else if (term == 25){return 52.70;}
        else if (term == 26){return 50.65;}
        else if (term == 27){return 48.80;}
        else if (term == 28){return 47.10;}
        else if (term == 29){return 45.55;}
        else if (term == 30){return 44.10;}
        else if (term == 31){return 42.80;}
        else if (term == 32){return 41.60;}
        else if (term == 33){return 40.50;}
    }
	else if (age == 43){
        if (term == 15){return 90.60;}
        else if (term == 16){return 84.65;}
        else if (term == 17){return 79.45;}
        else if (term == 18){return 74.85;}
        else if (term == 19){return 70.75;}
        else if (term == 20){return 67.05;}
        else if (term == 21){return 63.75;}
        else if (term == 22){return 60.80;}
        else if (term == 23){return 58.10;}
        else if (term == 24){return 55.65;}
        else if (term == 25){return 53.40;}
        else if (term == 26){return 51.40;}
        else if (term == 27){return 49.55;}
        else if (term == 28){return 47.85;}
        else if (term == 29){return 46.25;}
        else if (term == 30){return 44.85;}
        else if (term == 31){return 43.55;}
        else if (term == 32){return 42.35;}
    }
	else if (age == 44){
        if (term == 15){return 91.50;}
        else if (term == 16){return 85.50;}
        else if (term == 17){return 80.30;}
        else if (term == 18){return 75.65;}
        else if (term == 19){return 71.55;}
        else if (term == 20){return 67.85;}
        else if (term == 21){return 64.55;}
        else if (term == 22){return 61.55;}
        else if (term == 23){return 58.85;}
        else if (term == 24){return 56.40;}
        else if (term == 25){return 54.20;}
        else if (term == 26){return 52.15;}
        else if (term == 27){return 50.30;}
        else if (term == 28){return 48.60;}
        else if (term == 29){return 47.05;}
        else if (term == 30){return 45.60;}
        else if (term == 31){return 44.30;}
    }
	else if (age == 45){
        if (term == 15){return 92.45;}
        else if (term == 16){return 86.45;}
        else if (term == 17){return 81.15;}
        else if (term == 18){return 76.50;}
        else if (term == 19){return 72.40;}
        else if (term == 20){return 68.70;}
        else if (term == 21){return 65.35;}
        else if (term == 22){return 62.40;}
        else if (term == 23){return 59.65;}
        else if (term == 24){return 57.20;}
        else if (term == 25){return 55.00;}
        else if (term == 26){return 52.95;}
        else if (term == 27){return 51.10;}
        else if (term == 28){return 49.40;}
        else if (term == 29){return 47.85;}
        else if (term == 30){return 46.45;}
    }
	else if (age == 46){
        if (term == 15){return 93.40;}
        else if (term == 16){return 87.40;}
        else if (term == 17){return 82.10;}
        else if (term == 18){return 77.40;}
        else if (term == 19){return 73.25;}
        else if (term == 20){return 69.55;}
        else if (term == 21){return 66.25;}
        else if (term == 22){return 63.25;}
        else if (term == 23){return 60.50;}
        else if (term == 24){return 58.05;}
        else if (term == 25){return 55.85;}
        else if (term == 26){return 53.80;}
        else if (term == 27){return 51.95;}
        else if (term == 28){return 50.25;}
        else if (term == 29){return 48.75;}
    }
	else if (age == 47){
        if (term == 15){return 94.45;}
        else if (term == 16){return 88.35;}
        else if (term == 17){return 83.05;}
        else if (term == 18){return 78.35;}
        else if (term == 19){return 74.20;}
        else if (term == 20){return 70.45;}
        else if (term == 21){return 67.15;}
        else if (term == 22){return 64.15;}
        else if (term == 23){return 61.40;}
        else if (term == 24){return 58.95;}
        else if (term == 25){return 56.70;}
        else if (term == 26){return 54.70;}
        else if (term == 27){return 52.85;}
        else if (term == 28){return 51.15;}
    }
	else if (age == 48){
        if (term == 15){return 95.50;}
        else if (term == 16){return 89.40;}
        else if (term == 17){return 84.05;}
        else if (term == 18){return 79.35;}
        else if (term == 19){return 75.15;}
        else if (term == 20){return 71.40;}
        else if (term == 21){return 68.05;}
        else if (term == 22){return 65.05;}
        else if (term == 23){return 62.35;}
        else if (term == 24){return 59.90;}
        else if (term == 25){return 57.65;}
        else if (term == 26){return 55.65;}
        else if (term == 27){return 53.80;}
    }
	else if (age == 49){
        if (term == 15){return 96.60;}
        else if (term == 16){return 90.45;}
        else if (term == 17){return 85.10;}
        else if (term == 18){return 80.35;}
        else if (term == 19){return 76.15;}
        else if (term == 20){return 72.40;}
        else if (term == 21){return 69.05;}
        else if (term == 22){return 66.05;}
        else if (term == 23){return 63.30;}
        else if (term == 24){return 60.85;}
        else if (term == 25){return 58.60;}
        else if (term == 26){return 56.60;}
    }
	else if (age == 50){
        if (term == 15){return 97.70;}
        else if (term == 16){return 91.55;}
        else if (term == 17){return 86.15;}
        else if (term == 18){return 81.40;}
        else if (term == 19){return 77.20;}
        else if (term == 20){return 73.45;}
        else if (term == 21){return 70.05;}
        else if (term == 22){return 67.05;}
        else if (term == 23){return 64.30;}
        else if (term == 24){return 61.85;}
        else if (term == 25){return 59.65;}
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
	else if (b < 495001){return premium*(.0015)*(-1);}
	else if (b < 995001){return premium*(.0025)*(-1);}
	else{return premium*(.0030)*(-1);}
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
document.getElementsByClassName('term')[0].value="";
}