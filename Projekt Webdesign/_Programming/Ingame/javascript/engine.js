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
	var drawIntervalId = window.setInterval(drawchicken,10);
	
	
	
	$("#r1").click(function(){$(this).fadeOut(0)});
	$("#r2").click(function(){$(this).fadeOut(0)});
	$("#r3").click(function(){$(this).fadeOut(0)});
	$("#r4").click(function(){$(this).fadeOut(0)});
	
}


function setposY() {
	//Y-Value wird initialisiert - Moorhuhn wird vertikal gesetzt
	$("#r1").css("top",createYvalue());
	$("#r2").css("top",createYvalue());
	$("#r3").css("top",createYvalue());
	$("#r4").css("top",createYvalue());
}

function createYvalue() {
	return Math.round((((Math.random()*Math.random())*1000)%400));
}

function startPosition_x(){
	if(Math.round((Math.random()*1000)%2) == 1)
	{
		$(".chickenLeft").css("left", Math.round((Math.random()*(-1000))%(-150)));
	}
	else
	{
		$(".chickenRight").css("right", Math.round((Math.random()*(-1000))%(-150)));
	}
}

function startPosition_y(){
	return Math.round((((Math.random()*Math.random())*1000)%400));
}

function drawchicken() {
	$("#r1").css("left","+=0.8");
	$("#r2").css("left","+=1.0");
	$("#r3").css("left","+=1.2");
	$("#r4").css("left","+=1.4");
	
}

function aiming() {
	$("#window").mousemove(function(e){
		$("#crosshair").css("left", e.pageX-300);
		$("#crosshair").css("top", e.pageY-134);
		$('#status').html(e.pageX +', '+ e.pageY);
	});
}
