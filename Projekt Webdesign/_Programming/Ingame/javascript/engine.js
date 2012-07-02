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

	var i=0;
	//Hühner y values das erste mal initialsieren
	for(i=1;i<5;i++) setposY(1 , i);
	for(i=1;i<5;i++) setposY(2 , i);
	
	//draw the chicken
	var drawIntervalId = window.setInterval(drawchicken_right,10);
	var drawIntervalId = window.setInterval(drawchicken_left,10);
	
	/*if (timer() == 0) { 
	*clear interval(drawIntervalId)
	*open highscore page
	*/
	
	
	//auslagern 
	/*
	for(i=1;i<5;i++) {
		$("#r" + i).click(function(){
									$(this).fadeOut(0);
								//	$(this).fadeIn(0);
									
						});
	}*/
	
}


function setposY(s , i) {
	//Y-Value wird initialisiert - Moorhuhn wird vertikal gesetzt
	if(s==1) $("#r" + i).css("top",createYvalue());
	else if (s==2) $("#l" + i).css("top",createYvalue());
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

function drawchicken_right() {
	var left=0;
	var i;
	for(i=1; i < 5; i++) {
		if((left = $("#r" + i).offset().left) < -150) {
			($("#r" + i).css("left",1200));
			setposY(1 , i);
		}
		else {
			if(i==1) {
			$("#r" + i).css("left","-=0.8");
			}
			else if(i==2) {
			$("#r" + i).css("left","-=1.0");
			}
			else if(i==3) {
			$("#r" + i).css("left","-=1.2");
			}
			else if(i==4) {
			$("#r" + i).css("left","-=1.4");
			}
		}
	}
}

function drawchicken_left() {
	
	var left=0;
	var i;
	for(i=1; i < 5; i++) {
		if((left = $("#l" + i).offset().left) > 1200) {
			($("#l" + i).css("left",-150));
			setposY(2, i);
		}
		else {
			if(i==1) {
			$("#l" + i).css("left","+=0.8");
			}
			else if(i==2) {
			$("#l" + i).css("left","+=1.0");
			}
			else if(i==3) {
			$("#l" + i).css("left","+=1.2");
			}
			else if(i==4) {
			$("#l" + i).css("left","+=1.4");
			}
		}
	//shoot_em_up(2,i);	
	}
}

function aiming() {
	$("#window").mousemove(function(e){
		$("#crosshair").css("left", e.pageX-300);
		$("#crosshair").css("top", e.pageY-134);
		$('#status').html(e.pageX +', '+ e.pageY);
	});
}


function score() {
//Score funktion aufrufen wenn geclickt worden ist und das Huhn getroffen worden ist
}


function shoot_em_up(s , i) {

		if(s==1) {
			$("#r" + i).click(function(){
									$(this).fadeOut(0);
								//	$(this).fadeIn(0);
									
			});
		else if(s==2) {
			$("#l" + i).click(function(){
									$(this).fadeOut(0);
								//	$(this).fadeIn(0);
									
			});
		}

}