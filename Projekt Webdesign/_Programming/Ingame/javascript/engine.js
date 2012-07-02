/**
 * @author Sebastian Göltz
 */
 
$(document).ready(function() {
//Start when DOM is fully loaded
//var intervalID = window.setInterval(...)
//window.clearInterval(intervalID);
main();
	
});

function main () {
	setposY();
	var i=0;
	//draw the chicken
	var drawIntervalId = window.setInterval(drawchicken,10);
	
	/*if (timer() == 0) { 
	*clear interval(drawIntervalId)
	*open highscore page
	*/
	
	
	//auslagern 
	for(i=1;i<5;i++) {
		$("#r" + i).click(function(){$(this).fadeOut(0)});
	}
	
}


function setposY() {
	//Y-Value wird initialisiert - Moorhuhn wird vertikal gesetzt
	for(var i=1;i<5;i++) {
	$("#r" + i).css("top",createYvalue());
	}
}

function createYvalue() {
	return Math.round((((Math.random()*Math.random())*1000)%400));
}

/*
function startPosition_x(){
	if(Math.round((Math.random()*1000)%2) == 1)
	{
		$(".chickenLeft").css("left", Math.round((Math.random()*(-1000))%(-150)));
	}
	else
	{
		$(".chickenRight").css("right", Math.round((Math.random()*(-1000))%(-150)));
	}
}*/

function startPosition_y(){
	return Math.round((((Math.random()*Math.random())*1000)%400));
}

function drawchicken() {
	var left=0;
	var i;
	for(i=1; i < 5; i++) {
		if((left = $("#r" + i).offset().left) > 900) {
		($("#r" + i).css("left",100));
		}
		else if(i==1) {
		$("#r" + i).css("left","+=0.8");
		}
	}
	/*
	$("#r2").css("left","+=1.0");
	$("#r3").css("left","+=1.2");
	$("#r4").css("left","+=1.4");
	*/
}

function aiming() {
	$("#window").mousemove(function(e){
		$("#crosshair").css("left", e.pageX-300);
		$("#crosshair").css("top", e.pageY-134);
		$('#status').html(e.pageX +', '+ e.pageY);
	});
}
