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
	if (age == 0){
		if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 1){
		if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 2){
		if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 3){
		if (term == 15){return 640.05;}
		else if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 4){
		if (term == 14){return 661.60;}
		else if (term == 15){return 640.05;}
		else if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 5){
		if (term == 13){return 684.05;}
		else if (term == 14){return 661.60;}
		else if (term == 15){return 640.05;}
		else if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 6){
		if (term == 12){return 707.40;}
		else if (term == 13){return 684.05;}
		else if (term == 14){return 661.60;}
		else if (term == 15){return 640.05;}
		else if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 7){
		if (term == 11){return 731.75;}
		else if (term == 12){return 707.60;}
		else if (term == 13){return 684.25;}
		else if (term == 14){return 661.65;}
		else if (term == 15){return 640.05;}
		else if (term == 16){return 619.00;}
		else if (term == 17){return 598.75;}
		else if (term == 18){return 579.25;}
		else if (term == 19){return 560.45;}
		else if (term == 20){return 542.40;}
		else if (term == 21){return 525.05;}
		else if (term == 22){return 508.35;}
		else if (term == 23){return 492.35;}
		else if (term == 24){return 477.00;}
		else if (term == 25){return 462.25;}
	}
	else if (age == 8){
		if (term == 10){return 756.90;}
		else if (term == 11){return 731.95;}
		else if (term == 12){return 707.80;}
		else if (term == 13){return 684.50;}
		else if (term == 14){return 661.95;}
		else if (term == 15){return 640.15;}
		else if (term == 16){return 619.20;}
		else if (term == 17){return 598.95;}
		else if (term == 18){return 579.50;}
		else if (term == 19){return 560.75;}
		else if (term == 20){return 542.70;}
		else if (term == 21){return 525.40;}
		else if (term == 22){return 508.75;}
		else if (term == 23){return 492.80;}
		else if (term == 24){return 477.45;}
		else if (term == 25){return 462.75;}
	}
	else if (age == 9){
		if (term == 10){return 756.90;}
		else if (term == 11){return 731.95;}
		else if (term == 12){return 707.80;}
		else if (term == 13){return 684.50;}
		else if (term == 14){return 661.95;}
		else if (term == 15){return 640.20;}
		else if (term == 16){return 619.20;}
		else if (term == 17){return 599.00;}
		else if (term == 18){return 579.55;}
		else if (term == 19){return 560.80;}
		else if (term == 20){return 542.80;}
		else if (term == 21){return 525.45;}
		else if (term == 22){return 508.85;}
		else if (term == 23){return 492.90;}
		else if (term == 24){return 477.55;}
		else if (term == 25){return 462.90;}
	}
	else if (age == 10){
		if (term == 10){return 756.90;}
		else if (term == 11){return 732.00;}
		else if (term == 12){return 707.85;}
		else if (term == 13){return 684.55;}
		else if (term == 14){return 662.00;}
		else if (term == 15){return 640.30;}
		else if (term == 16){return 619.30;}
		else if (term == 17){return 599.10;}
		else if (term == 18){return 579.65;}
		else if (term == 19){return 560.95;}
		else if (term == 20){return 542.95;}
		else if (term == 21){return 525.65;}
		else if (term == 22){return 509.00;}
		else if (term == 23){return 493.05;}
		else if (term == 24){return 477.75;}
		else if (term == 25){return 463.10;}
	}
	else if (age == 11){
		if (term == 10){return 756.95;}
		else if (term == 11){return 732.05;}
		else if (term == 12){return 707.95;}
		else if (term == 13){return 684.65;}
		else if (term == 14){return 662.15;}
		else if (term == 15){return 640.40;}
		else if (term == 16){return 619.45;}
		else if (term == 17){return 599.25;}
		else if (term == 18){return 579.80;}
		else if (term == 19){return 561.10;}
		else if (term == 20){return 543.15;}
		else if (term == 21){return 525.85;}
		else if (term == 22){return 509.25;}
		else if (term == 23){return 493.30;}
		else if (term == 24){return 478.00;}
		else if (term == 25){return 463.35;}
	}
	else if (age == 12){
		if (term == 10){return 757.05;}
		else if (term == 11){return 732.15;}
		else if (term == 12){return 708.05;}
		else if (term == 13){return 684.75;}
		else if (term == 14){return 662.25;}
		else if (term == 15){return 640.55;}
		else if (term == 16){return 619.60;}
		else if (term == 17){return 599.45;}
		else if (term == 18){return 580.00;}
		else if (term == 19){return 561.35;}
		else if (term == 20){return 543.35;}
		else if (term == 21){return 526.10;}
		else if (term == 22){return 509.50;}
		else if (term == 23){return 493.55;}
		else if (term == 24){return 478.30;}
		else if (term == 25){return 463.65;}
	}
	else if (age == 13){
		if (term == 10){return 757.15;}
		else if (term == 11){return 732.25;}
		else if (term == 12){return 708.20;}
		else if (term == 13){return 684.90;}
		else if (term == 14){return 662.40;}
		else if (term == 15){return 640.70;}
		else if (term == 16){return 619.80;}
		else if (term == 17){return 599.65;}
		else if (term == 18){return 580.25;}
		else if (term == 19){return 561.55;}
		else if (term == 20){return 543.60;}
		else if (term == 21){return 526.35;}
		else if (term == 22){return 509.75;}
		else if (term == 23){return 493.85;}
		else if (term == 24){return 478.60;}
		else if (term == 25){return 463.95;}
	}
	else if (age == 14){
		if (term == 10){return 757.25;}
		else if (term == 11){return 732.35;}
		else if (term == 12){return 708.30;}
		else if (term == 13){return 685.05;}
		else if (term == 14){return 662.55;}
		else if (term == 15){return 640.90;}
		else if (term == 16){return 619.95;}
		else if (term == 17){return 599.85;}
		else if (term == 18){return 580.45;}
		else if (term == 19){return 561.75;}
		else if (term == 20){return 543.80;}
		else if (term == 21){return 526.55;}
		else if (term == 22){return 510.00;}
		else if (term == 23){return 494.10;}
		else if (term == 24){return 478.90;}
		else if (term == 25){return 464.30;}
	}
	else if (age == 15){
		if (term == 10){return 757.30;}
		else if (term == 11){return 732.45;}
		else if (term == 12){return 708.40;}
		else if (term == 13){return 685.15;}
		else if (term == 14){return 662.70;}
		else if (term == 15){return 641.05;}
		else if (term == 16){return 620.15;}
		else if (term == 17){return 600.00;}
		else if (term == 18){return 580.60;}
		else if (term == 19){return 561.95;}
		else if (term == 20){return 544.05;}
		else if (term == 21){return 526.80;}
		else if (term == 22){return 510.25;}
		else if (term == 23){return 494.40;}
		else if (term == 24){return 479.15;}
		else if (term == 25){return 464.60;}
	}
	else if (age == 16){
		if (term == 10){return 757.40;}
		else if (term == 11){return 732.55;}
		else if (term == 12){return 708.50;}
		else if (term == 13){return 685.25;}
		else if (term == 14){return 662.85;}
		else if (term == 15){return 641.15;}
		else if (term == 16){return 620.30;}
		else if (term == 17){return 600.15;}
		else if (term == 18){return 580.80;}
		else if (term == 19){return 562.15;}
		else if (term == 20){return 544.25;}
		else if (term == 21){return 527.00;}
		else if (term == 22){return 510.50;}
		else if (term == 23){return 494.65;}
		else if (term == 24){return 479.45;}
		else if (term == 25){return 464.85;}
	}
	else if (age == 17){
		if (term == 10){return 757.45;}
		else if (term == 11){return 732.65;}
		else if (term == 12){return 708.60;}
		else if (term == 13){return 685.35;}
		else if (term == 14){return 662.95;}
		else if (term == 15){return 641.30;}
		else if (term == 16){return 620.40;}
		else if (term == 17){return 600.30;}
		else if (term == 18){return 580.95;}
		else if (term == 19){return 562.30;}
		else if (term == 20){return 544.40;}
		else if (term == 21){return 527.20;}
		else if (term == 22){return 510.70;}
		else if (term == 23){return 494.85;}
		else if (term == 24){return 479.65;}
		else if (term == 25){return 465.10;}
	}
	else if (age == 18){
		if (term == 10){return 757.50;}
		else if (term == 11){return 732.70;}
		else if (term == 12){return 708.65;}
		else if (term == 13){return 685.65;}
		else if (term == 14){return 663.05;}
		else if (term == 15){return 641.40;}
		else if (term == 16){return 620.50;}
		else if (term == 17){return 600.40;}
		else if (term == 18){return 581.05;}
		else if (term == 19){return 562.45;}
		else if (term == 20){return 544.55;}
		else if (term == 21){return 527.40;}
		else if (term == 22){return 510.90;}
		else if (term == 23){return 495.05;}
		else if (term == 24){return 479.90;}
		else if (term == 25){return 465.35;}
	}
	else if (age == 19){
		if (term == 10){return 757.55;}
		else if (term == 11){return 732.75;}
		else if (term == 12){return 708.75;}
		else if (term == 13){return 685.50;}
		else if (term == 14){return 663.10;}
		else if (term == 15){return 641.45;}
		else if (term == 16){return 620.60;}
		else if (term == 17){return 600.55;}
		else if (term == 18){return 581.20;}
		else if (term == 19){return 562.60;}
		else if (term == 20){return 544.70;}
		else if (term == 21){return 527.55;}
		else if (term == 22){return 511.05;}
		else if (term == 23){return 495.25;}
		else if (term == 24){return 480.10;}
		else if (term == 25){return 465.60;}
	}
	else if (age == 20){
		if (term == 10){return 757.60;}
		else if (term == 11){return 732.80;}
		else if (term == 12){return 708.80;}
		else if (term == 13){return 685.55;}
		else if (term == 14){return 663.15;}
		else if (term == 15){return 641.55;}
		else if (term == 16){return 620.70;}
		else if (term == 17){return 600.60;}
		else if (term == 18){return 581.30;}
		else if (term == 19){return 562.70;}
		else if (term == 20){return 544.85;}
		else if (term == 21){return 527.70;}
		else if (term == 22){return 511.25;}
		else if (term == 23){return 495.45;}
		else if (term == 24){return 480.35;}
		else if (term == 25){return 465.85;}
	}
	else if (age == 21){
		if (term == 10){return 757.65;}
		else if (term == 11){return 732.80;}
		else if (term == 12){return 708.80;}
		else if (term == 13){return 685.60;}
		else if (term == 14){return 663.20;}
		else if (term == 15){return 641.60;}
		else if (term == 16){return 620.75;}
		else if (term == 17){return 600.70;}
		else if (term == 18){return 581.40;}
		else if (term == 19){return 562.80;}
		else if (term == 20){return 545.00;}
		else if (term == 21){return 527.85;}
		else if (term == 22){return 511.40;}
		else if (term == 23){return 495.65;}
		else if (term == 24){return 480.55;}
		else if (term == 25){return 466.10;}
	}
	else if (age == 22){
		if (term == 10){return 757.65;}
		else if (term == 11){return 732.85;}
		else if (term == 12){return 708.85;}
		else if (term == 13){return 685.65;}
		else if (term == 14){return 663.25;}
		else if (term == 15){return 641.65;}
		else if (term == 16){return 620.85;}
		else if (term == 17){return 600.80;}
		else if (term == 18){return 581.50;}
		else if (term == 19){return 562.95;}
		else if (term == 20){return 545.10;}
		else if (term == 21){return 528.00;}
		else if (term == 22){return 511.60;}
		else if (term == 23){return 495.85;}
		else if (term == 24){return 480.80;}
		else if (term == 25){return 466.40;}
	}
	else if (age == 23){
		if (term == 10){return 757.65;}
		else if (term == 11){return 732.90;}
		else if (term == 12){return 708.90;}
		else if (term == 13){return 685.70;}
		else if (term == 14){return 663.30;}
		else if (term == 15){return 641.75;}
		else if (term == 16){return 620.90;}
		else if (term == 17){return 600.90;}
		else if (term == 18){return 581.60;}
		else if (term == 19){return 563.05;}
		else if (term == 20){return 545.25;}
		else if (term == 21){return 528.20;}
		else if (term == 22){return 511.80;}
		else if (term == 23){return 496.10;}
		else if (term == 24){return 481.10;}
		else if (term == 25){return 466.70;}
	}
	else if (age == 24){
		if (term == 10){return 757.70;}
		else if (term == 11){return 732.90;}
		else if (term == 12){return 708.90;}
		else if (term == 13){return 685.75;}
		else if (term == 14){return 663.40;}
		else if (term == 15){return 641.80;}
		else if (term == 16){return 621.00;}
		else if (term == 17){return 601.00;}
		else if (term == 18){return 581.70;}
		else if (term == 19){return 563.20;}
		else if (term == 20){return 545.45;}
		else if (term == 21){return 528.40;}
		else if (term == 22){return 512.05;}
		else if (term == 23){return 496.40;}
		else if (term == 24){return 481.40;}
		else if (term == 25){return 467.10;}
	}
	else if (age == 25){
		if (term == 10){return 757.70;}
		else if (term == 11){return 732.95;}
		else if (term == 12){return 708.95;}
		else if (term == 13){return 685.80;}
		else if (term == 14){return 663.45;}
		else if (term == 15){return 641.90;}
		else if (term == 16){return 621.10;}
		else if (term == 17){return 601.10;}
		else if (term == 18){return 581.85;}
		else if (term == 19){return 563.40;}
		else if (term == 20){return 545.65;}
		else if (term == 21){return 528.60;}
		else if (term == 22){return 512.30;}
		else if (term == 23){return 496.70;}
		else if (term == 24){return 481.75;}
		else if (term == 25){return 467.50;}
	}
	else if (age == 26){
		if (term == 10){return 757.75;}
		else if (term == 11){return 732.95;}
		else if (term == 12){return 709.00;}
		else if (term == 13){return 685.85;}
		else if (term == 14){return 663.50;}
		else if (term == 15){return 642.00;}
		else if (term == 16){return 621.20;}
		else if (term == 17){return 601.25;}
		else if (term == 18){return 582.05;}
		else if (term == 19){return 563.60;}
		else if (term == 20){return 545.85;}
		else if (term == 21){return 528.90;}
		else if (term == 22){return 512.65;}
		else if (term == 23){return 497.05;}
		else if (term == 24){return 482.20;}
		else if (term == 25){return 468.00;}
	}
	else if (age == 27){
		if (term == 10){return 757.80;}
		else if (term == 11){return 733.00;}
		else if (term == 12){return 709.05;}
		else if (term == 13){return 685.95;}
		else if (term == 14){return 663.60;}
		else if (term == 15){return 642.10;}
		else if (term == 16){return 621.35;}
		else if (term == 17){return 601.40;}
		else if (term == 18){return 582.25;}
		else if (term == 19){return 563.80;}
		else if (term == 20){return 546.15;}
		else if (term == 21){return 529.20;}
		else if (term == 22){return 513.00;}
		else if (term == 23){return 497.50;}
		else if (term == 24){return 482.70;}
		else if (term == 25){return 468.55;}
	}
	else if (age == 28){
		if (term == 10){return 757.85;}
		else if (term == 11){return 733.10;}
		else if (term == 12){return 709.15;}
		else if (term == 13){return 686.05;}
		else if (term == 14){return 663.75;}
		else if (term == 15){return 642.25;}
		else if (term == 16){return 621.55;}
		else if (term == 17){return 601.60;}
		else if (term == 18){return 582.50;}
		else if (term == 19){return 564.10;}
		else if (term == 20){return 546.50;}
		else if (term == 21){return 529.60;}
		else if (term == 22){return 513.45;}
		else if (term == 23){return 498.00;}
		else if (term == 24){return 483.30;}
		else if (term == 25){return 469.25;}
	}
	else if (age == 29){
		if (term == 10){return 757.90;}
		else if (term == 11){return 733.15;}
		else if (term == 12){return 709.25;}
		else if (term == 13){return 686.15;}
		else if (term == 14){return 663.85;}
		else if (term == 15){return 642.40;}
		else if (term == 16){return 621.75;}
		else if (term == 17){return 601.85;}
		else if (term == 18){return 582.75;}
		else if (term == 19){return 564.45;}
		else if (term == 20){return 546.90;}
		else if (term == 21){return 530.05;}
		else if (term == 22){return 514.00;}
		else if (term == 23){return 498.60;}
		else if (term == 24){return 483.95;}
		else if (term == 25){return 470.00;}
	}
	else if (age == 30){
		if (term == 10){return 757.95;}
		else if (term == 11){return 733.25;}
		else if (term == 12){return 709.35;}
		else if (term == 13){return 686.30;}
		else if (term == 14){return 664.05;}
		else if (term == 15){return 642.60;}
		else if (term == 16){return 622.00;}
		else if (term == 17){return 602.15;}
		else if (term == 18){return 583.10;}
		else if (term == 19){return 564.85;}
		else if (term == 20){return 547.35;}
		else if (term == 21){return 530.60;}
		else if (term == 22){return 514.60;}
		else if (term == 23){return 499.30;}
		else if (term == 24){return 484.75;}
		else if (term == 25){return 470.90;}
	}
	else if (age == 31){
		if (term == 10){return 758.05;}
		else if (term == 11){return 733.35;}
		else if (term == 12){return 709.50;}
		else if (term == 13){return 686.45;}
		else if (term == 14){return 664.25;}
		else if (term == 15){return 642.85;}
		else if (term == 16){return 622.25;}
		else if (term == 17){return 602.50;}
		else if (term == 18){return 583.50;}
		else if (term == 19){return 565.30;}
		else if (term == 20){return 547.90;}
		else if (term == 21){return 531.25;}
		else if (term == 22){return 515.30;}
		else if (term == 23){return 500.15;}
		else if (term == 24){return 485.65;}
		else if (term == 25){return 471.90;}
	}
	else if (age == 32){
		if (term == 10){return 758.15;}
		else if (term == 11){return 733.45;}
		else if (term == 12){return 709.65;}
		else if (term == 13){return 686.65;}
		else if (term == 14){return 664.45;}
		else if (term == 15){return 643.15;}
		else if (term == 16){return 622.60;}
		else if (term == 17){return 602.90;}
		else if (term == 18){return 584.00;}
		else if (term == 19){return 565.85;}
		else if (term == 20){return 548.50;}
		else if (term == 21){return 531.95;}
		else if (term == 22){return 516.15;}
		else if (term == 23){return 501.15;}
		else if (term == 24){return 486.70;}
		else if (term == 25){return 473.05;}
	}
	else if (age == 33){
		if (term == 10){return 758.25;}
		else if (term == 11){return 733.60;}
		else if (term == 12){return 709.80;}
		else if (term == 13){return 686.85;}
		else if (term == 14){return 664.75;}
		else if (term == 15){return 643.45;}
		else if (term == 16){return 623.00;}
		else if (term == 17){return 603.35;}
		else if (term == 18){return 584.50;}
		else if (term == 19){return 566.50;}
		else if (term == 20){return 549.25;}
		else if (term == 21){return 532.75;}
		else if (term == 22){return 517.05;}
		else if (term == 23){return 502.10;}
		else if (term == 24){return 487.90;}
		else if (term == 25){return 474.35;}
	}
	else if (age == 34){
		if (term == 10){return 758.40;}
		else if (term == 11){return 733.80;}
		else if (term == 12){return 710.05;}
		else if (term == 13){return 687.15;}
		else if (term == 14){return 665.05;}
		else if (term == 15){return 643.85;}
		else if (term == 16){return 623.45;}
		else if (term == 17){return 603.90;}
		else if (term == 18){return 585.15;}
		else if (term == 19){return 567.20;}
		else if (term == 20){return 550.05;}
		else if (term == 21){return 533.70;}
		else if (term == 22){return 518.15;}
		else if (term == 23){return 503.30;}
		else if (term == 24){return 489.20;}
		else if (term == 25){return 475.80;}
	}
	else if (age == 35){
		if (term == 10){return 758.55;}
		else if (term == 11){return 734.00;}
		else if (term == 12){return 710.30;}
		else if (term == 13){return 687.45;}
		else if (term == 14){return 665.45;}
		else if (term == 15){return 644.30;}
		else if (term == 16){return 624.00;}
		else if (term == 17){return 604.50;}
		else if (term == 18){return 585.85;}
		else if (term == 19){return 568.05;}
		else if (term == 20){return 551.00;}
		else if (term == 21){return 534.80;}
		else if (term == 22){return 519.30;}
		else if (term == 23){return 504.65;}
		else if (term == 24){return 490.65;}
		else if (term == 25){return 477.45;}
	}
	else if (age == 36){
		if (term == 10){return 758.70;}
		else if (term == 11){return 734.20;}
		else if (term == 12){return 710.55;}
		else if (term == 13){return 687.80;}
		else if (term == 14){return 665.85;}
		else if (term == 15){return 644.80;}
		else if (term == 16){return 624.60;}
		else if (term == 17){return 605.20;}
		else if (term == 18){return 586.70;}
		else if (term == 19){return 568.95;}
		else if (term == 20){return 552.10;}
		else if (term == 21){return 536.00;}
		else if (term == 22){return 520.65;}
		else if (term == 23){return 506.10;}
		else if (term == 24){return 492.30;}
		else if (term == 25){return 479.25;}
	}
	else if (age == 37){
		if (term == 10){return 758.95;}
		else if (term == 11){return 734.50;}
		else if (term == 12){return 710.90;}
		else if (term == 13){return 688.20;}
		else if (term == 14){return 666.35;}
		else if (term == 15){return 645.40;}
		else if (term == 16){return 625.25;}
		else if (term == 17){return 606.00;}
		else if (term == 18){return 587.60;}
		else if (term == 19){return 570.05;}
		else if (term == 20){return 553.25;}
		else if (term == 21){return 537.30;}
		else if (term == 22){return 522.15;}
		else if (term == 23){return 507.75;}
		else if (term == 24){return 494.10;}
		else if (term == 25){return 481.20;}
	}
	else if (age == 38){
		if (term == 10){return 759.15;}
		else if (term == 11){return 734.80;}
		else if (term == 12){return 711.30;}
		else if (term == 13){return 688.65;}
		else if (term == 14){return 666.90;}
		else if (term == 15){return 646.05;}
		else if (term == 16){return 626.05;}
		else if (term == 17){return 606.95;}
		else if (term == 18){return 588.65;}
		else if (term == 19){return 571.20;}
		else if (term == 20){return 554.60;}
		else if (term == 21){return 538.80;}
		else if (term == 22){return 523.80;}
		else if (term == 23){return 509.60;}
		else if (term == 24){return 496.10;}
		else if (term == 25){return 483.35;}
	}
	else if (age == 39){
		if (term == 10){return 759.45;}
		else if (term == 11){return 735.15;}
		else if (term == 12){return 711.70;}
		else if (term == 13){return 689.20;}
		else if (term == 14){return 667.55;}
		else if (term == 15){return 646.80;}
		else if (term == 16){return 626.95;}
		else if (term == 17){return 607.95;}
		else if (term == 18){return 589.80;}
		else if (term == 19){return 572.55;}
		else if (term == 20){return 556.10;}
		else if (term == 21){return 540.45;}
		else if (term == 22){return 525.65;}
		else if (term == 23){return 511.60;}
		else if (term == 24){return 498.30;}
		else if (term == 25){return 485.75;}
	}
	else if (age == 40){
		if (term == 10){return 759.75;}
		else if (term == 11){return 735.55;}
		else if (term == 12){return 712.25;}
		else if (term == 13){return 689.80;}
		else if (term == 14){return 668.30;}
		else if (term == 15){return 647.65;}
		else if (term == 16){return 627.95;}
		else if (term == 17){return 609.10;}
		else if (term == 18){return 591.10;}
		else if (term == 19){return 574.00;}
		else if (term == 20){return 557.75;}
		else if (term == 21){return 542.25;}
		else if (term == 22){return 527.60;}
		else if (term == 23){return 513.75;}
		else if (term == 24){return 500.65;}
		else if (term == 25){return 488.35;}
	}
	else if (age == 41){
		if (term == 10){return 760.15;}
		else if (term == 11){return 736.00;}
		else if (term == 12){return 712.80;}
		else if (term == 13){return 690.50;}
		else if (term == 14){return 669.10;}
		else if (term == 15){return 648.65;}
		else if (term == 16){return 629.05;}
		else if (term == 17){return 610.35;}
		else if (term == 18){return 592.55;}
		else if (term == 19){return 575.60;}
		else if (term == 20){return 559.50;}
		else if (term == 21){return 544.25;}
		else if (term == 22){return 529.80;}
		else if (term == 23){return 516.15;}
		else if (term == 24){return 503.25;}
		else if (term == 25){return 491.15;}
	}
	else if (age == 42){
		if (term == 10){return 760.55;}
		else if (term == 11){return 736.55;}
		else if (term == 12){return 713.45;}
		else if (term == 13){return 691.30;}
		else if (term == 14){return 670.05;}
		else if (term == 15){return 649.70;}
		else if (term == 16){return 630.30;}
		else if (term == 17){return 611.80;}
		else if (term == 18){return 594.15;}
		else if (term == 19){return 577.40;}
		else if (term == 20){return 561.50;}
		else if (term == 21){return 546.40;}
		else if (term == 22){return 532.15;}
		else if (term == 23){return 518.75;}
		else if (term == 24){return 506.05;}
		else if (term == 25){return 494.15;}
	}
	else if (age == 43){
		if (term == 10){return 761.05;}
		else if (term == 11){return 737.15;}
		else if (term == 12){return 714.15;}
		else if (term == 13){return 692.15;}
		else if (term == 14){return 671.05;}
		else if (term == 15){return 650.90;}
		else if (term == 16){return 631.65;}
		else if (term == 17){return 613.30;}
		else if (term == 18){return 595.85;}
		else if (term == 19){return 579.30;}
		else if (term == 20){return 563.60;}
		else if (term == 21){return 548.75;}
		else if (term == 22){return 534.75;}
		else if (term == 23){return 521.50;}
		else if (term == 24){return 509.10;}
		else if (term == 25){return 497.45;}
	}
	else if (age == 44){
		if (term == 10){return 761.60;}
		else if (term == 11){return 737.80;}
		else if (term == 12){return 715.00;}
		else if (term == 13){return 693.10;}
		else if (term == 14){return 672.20;}
		else if (term == 15){return 652.20;}
		else if (term == 16){return 633.15;}
		else if (term == 17){return 615.00;}
		else if (term == 18){return 597.75;}
		else if (term == 19){return 581.40;}
		else if (term == 20){return 565.90;}
		else if (term == 21){return 551.30;}
		else if (term == 22){return 537.50;}
		else if (term == 23){return 524.55;}
		else if (term == 24){return 512.35;}
		else if (term == 25){return 500.95;}
	}
	else if (age == 45){
		if (term == 10){return 762.20;}
		else if (term == 11){return 738.55;}
		else if (term == 12){return 715.90;}
		else if (term == 13){return 694.15;}
		else if (term == 14){return 673.40;}
		else if (term == 15){return 653.60;}
		else if (term == 16){return 634.75;}
		else if (term == 17){return 616.80;}
		else if (term == 18){return 599.80;}
		else if (term == 19){return 583.65;}
		else if (term == 20){return 568.40;}
		else if (term == 21){return 554.00;}
		else if (term == 22){return 540.45;}
		else if (term == 23){return 527.75;}
		else if (term == 24){return 515.85;}
		else if (term == 25){return 507.70;}
	}
	else if (age == 46){
		if (term == 10){return 762.85;}
		else if (term == 11){return 739.35;}
		else if (term == 12){return 716.85;}
		else if (term == 13){return 695.30;}
		else if (term == 14){return 674.75;}
		else if (term == 15){return 655.15;}
		else if (term == 16){return 636.45;}
		else if (term == 17){return 618.75;}
		else if (term == 18){return 601.95;}
		else if (term == 19){return 586.05;}
		else if (term == 20){return 571.05;}
		else if (term == 21){return 556.90;}
		else if (term == 22){return 543.65;}
		else if (term == 23){return 531.20;}
		else if (term == 24){return 519.55;}
		else if (term == 25){return 508.75;}
	}
	else if (age == 47){
		if (term == 10){return 763.55;}
		else if (term == 11){return 740.25;}
		else if (term == 12){return 717.90;}
		else if (term == 13){return 696.55;}
		else if (term == 14){return 676.15;}
		else if (term == 15){return 656.75;}
		else if (term == 16){return 638.30;}
		else if (term == 17){return 620.80;}
		else if (term == 18){return 604.25;}
		else if (term == 19){return 588.60;}
		else if (term == 20){return 573.85;}
		else if (term == 21){return 560.00;}
		else if (term == 22){return 547.00;}
		else if (term == 23){return 534.85;}
		else if (term == 24){return 523.55;}
		else if (term == 25){return 513.00;}
	}
	else if (age == 48){
		if (term == 10){return 764.35;}
		else if (term == 11){return 741.20;}
		else if (term == 12){return 719.00;}
		else if (term == 13){return 697.85;}
		else if (term == 14){return 677.70;}
		else if (term == 15){return 658.50;}
		else if (term == 16){return 640.30;}
		else if (term == 17){return 623.00;}
		else if (term == 18){return 606.70;}
		else if (term == 19){return 591.35;}
		else if (term == 20){return 576.85;}
		else if (term == 21){return 563.30;}
		else if (term == 22){return 550.60;}
		else if (term == 23){return 538.75;}
		else if (term == 24){return 527.75;}
		else if (term == 25){return 517.55;}
	}
	else if (age == 49){
		if (term == 10){return 765.15;}
		else if (term == 11){return 742.20;}
		else if (term == 12){return 720.20;}
		else if (term == 13){return 699.25;}
		else if (term == 14){return 679.30;}
		else if (term == 15){return 660.35;}
		else if (term == 16){return 642.35;}
		else if (term == 17){return 625.35;}
		else if (term == 18){return 609.30;}
		else if (term == 19){return 594.20;}
		else if (term == 20){return 580.00;}
		else if (term == 21){return 566.75;}
		else if (term == 22){return 554.35;}
		else if (term == 23){return 542.85;}
		else if (term == 24){return 532.20;}
		else if (term == 25){return 522.30;}
	}
	else if (age == 50){
		if (term == 10){return 766.05;}
		else if (term == 11){return 743.25;}
		else if (term == 12){return 721.45;}
		else if (term == 13){return 700.70;}
		else if (term == 14){return 680.95;}
		else if (term == 15){return 662.25;}
		else if (term == 16){return 644.50;}
		else if (term == 17){return 627.80;}
		else if (term == 18){return 612.05;}
		else if (term == 19){return 597.20;}
		else if (term == 20){return 583.35;}
		else if (term == 21){return 570.40;}
		else if (term == 22){return 558.35;}
		else if (term == 23){return 547.20;}
		else if (term == 24){return 536.85;}
		else if (term == 25){return 527.35;}
	}
	else if (age == 51){
		if (term == 10){return 766.95;}
		else if (term == 11){return 744.30;}
		else if (term == 12){return 722.75;}
		else if (term == 13){return 702.20;}
		else if (term == 14){return 682.70;}
		else if (term == 15){return 664.25;}
		else if (term == 16){return 646.80;}
		else if (term == 17){return 630.35;}
		else if (term == 18){return 614.90;}
		else if (term == 19){return 600.40;}
		else if (term == 20){return 586.85;}
		else if (term == 21){return 574.25;}
		else if (term == 22){return 562.55;}
		else if (term == 23){return 551.75;}
		else if (term == 24){return 541.80;}
	}
	else if (age == 52){
		if (term == 10){return 767.90;}
		else if (term == 11){return 745.45;}
		else if (term == 12){return 724.10;}
		else if (term == 13){return 703.80;}
		else if (term == 14){return 684.55;}
		else if (term == 15){return 666.35;}
		else if (term == 16){return 649.20;}
		else if (term == 17){return 633.05;}
		else if (term == 18){return 617.90;}
		else if (term == 19){return 603.75;}
		else if (term == 20){return 590.55;}
		else if (term == 21){return 578.30;}
		else if (term == 22){return 567.00;}
		else if (term == 23){return 556.55;}
	}
	else if (age == 53){
		if (term == 10){return 768.85;}
		else if (term == 11){return 746.65;}
		else if (term == 12){return 725.50;}
		else if (term == 13){return 705.45;}
		else if (term == 14){return 686.50;}
		else if (term == 15){return 668.55;}
		else if (term == 16){return 651.70;}
		else if (term == 17){return 635.90;}
		else if (term == 18){return 621.05;}
		else if (term == 19){return 607.25;}
		else if (term == 20){return 594.45;}
		else if (term == 21){return 582.55;}
		else if (term == 22){return 571.65;}
	}
	else if (age == 54){
		if (term == 10){return 769.90;}
		else if (term == 11){return 747.90;}
		else if (term == 12){return 727.00;}
		else if (term == 13){return 707.20;}
		else if (term == 14){return 688.50;}
		else if (term == 15){return 670.90;}
		else if (term == 16){return 654.35;}
		else if (term == 17){return 638.85;}
		else if (term == 18){return 624.40;}
		else if (term == 19){return 611.00;}
		else if (term == 20){return 598.55;}
		else if (term == 21){return 587.10;}
	}
	else if (age == 55){
		if (term == 10){return 770.95;}
		else if (term == 11){return 749.20;}
		else if (term == 12){return 728.55;}
		else if (term == 13){return 709.05;}
		else if (term == 14){return 690.65;}
		else if (term == 15){return 673.35;}
		else if (term == 16){return 657.15;}
		else if (term == 17){return 642.05;}
		else if (term == 18){return 628.00;}
		else if (term == 19){return 614.95;}
		else if (term == 20){return 602.90;}
	}
	else if (age == 56){
		if (term == 10){return 772.10;}
		else if (term == 11){return 750.60;}
		else if (term == 12){return 730.20;}
		else if (term == 13){return 711.00;}
		else if (term == 14){return 692.95;}
		else if (term == 15){return 676.00;}
		else if (term == 16){return 660.15;}
		else if (term == 17){return 645.45;}
		else if (term == 18){return 631.75;}
		else if (term == 19){return 619.15;}
	}
	else if (age == 57){
		if (term == 10){return 773.30;}
		else if (term == 11){return 752.05;}
		else if (term == 12){return 732.00;}
		else if (term == 13){return 713.10;}
		else if (term == 14){return 695.40;}
		else if (term == 15){return 678.80;}
		else if (term == 16){return 663.35;}
		else if (term == 17){return 649.05;}
		else if (term == 18){return 635.80;}
	}
	else if (age == 58){
		if (term == 10){return 774.60;}
		else if (term == 11){return 753.65;}
		else if (term == 12){return 733.90;}
		else if (term == 13){return 715.35;}
		else if (term == 14){return 698.00;}
		else if (term == 15){return 681.85;}
		else if (term == 16){return 666.80;}
		else if (term == 17){return 652.95;}
	}
	else if (age == 59){
		if (term == 10){return 776.00;}
		else if (term == 11){return 755.35;}
		else if (term == 12){return 735.95;}
		else if (term == 13){return 717.80;}
		else if (term == 14){return 700.85;}
		else if (term == 15){return 685.10;}
		else if (term == 16){return 670.50;}
	}
	else if (age == 60){
		if (term == 10){return 777.50;}
		else if (term == 11){return 757.25;}
		else if (term == 12){return 738.20;}
		else if (term == 13){return 720.45;}
		else if (term == 14){return 703.90;}
		else if (term == 15){return 688.60;}
	}
	else if (age == 61){
		if (term == 10){return 779.20;}
		else if (term == 11){return 759.25;}
		else if (term == 12){return 740.65;}
		else if (term == 13){return 723.30;}
		else if (term == 14){return 707.25;}
	}
	else if (age == 62){
		if (term == 10){return 781.00;}
		else if (term == 11){return 761.45;}
		else if (term == 12){return 743.30;}
		else if (term == 13){return 726.40;}
	}
	else if (age == 63){
		if (term == 10){return 783.00;}
		else if (term == 11){return 763.90;}
		else if (term == 12){return 746.15;}
	}
	else if (age == 64){
		if (term == 10){return 785.15;}
		else if (term == 11){return 766.50;}
	}
	else if (age == 65){
		if (term == 10){return 787.45;}
	}
}

var d = base(age, term);
var x=function (premium, d){return premium*d/1000;}

var tt=x(premium, d);

var v=function (premium){
	if (b < 195001){return 0;}
	else if (b < 495001){return premium*(.002)*(-1);}
	else {return premium*(.003)*(-1);}
}
tt1=tt+v(premium);
document.getElementById('mr').innerHTML=Math.round(tt1);

var z=function (tt1){return tt1*(0.035);}
document.getElementById('tax').innerHTML=Math.round(z(tt1));

var total=z(tt1)+tt1;
document.getElementById('acc').innerHTML=Math.round(total);

document.getElementsByClassName('inp')[0].value="";
document.getElementsByClassName('age')[0].value="";
document.getElementsByClassName('term')[0].value="";
}
