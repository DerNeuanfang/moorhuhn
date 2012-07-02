/**
 * @author Sebastian Göltz & Marc Klein
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
	for(i=1;i<7;i++) setposY(1 , i);
	for(i=1;i<7;i++) setposY(2 , i);
	
	//draw the chicken
	var drawIntervalId = window.setInterval(drawchicken_right,10);
	var drawIntervalId = window.setInterval(drawchicken_left,10);
	
	/*if (timer() == 0) { 
	*clear interval(drawIntervalId)
	*open highscore page
	*/
	
	shoot_em_up();
	$("#window").click(function(){audio_shoot();});
	
	
}


function setposY(s , i) {
	//Y-Value wird initialisiert - Moorhuhn wird vertikal gesetzt
	if(s==1) {
		$("#r" + i).css("top",createYvalue());
		$("#r" + i).show();
	}
	else if (s==2) {
		$("#l" + i).css("top",createYvalue());
		$("#l" + i).show();
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

function drawchicken_right() {
	var left=0;
	var i;
	for(i=1; i < 7; i++) {
		if((left=(parseInt($('#r' + i).css('left')))) <	-100) {
			($("#r" + i).css("left",1000));
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
			else if(i==5) {
			$("#r" + i).css("left","-=1.5");
			}
			else if(i==6) {
			$("#r" + i).css("left","-=1.6");
			}
		}
	}
}

function drawchicken_left() {
	var left=0;
	var i;
	for(i=1; i < 7; i++) {
		if((left=(parseInt($('#l' + i).css('left')))) >	1200) {
			($("#l" + i).css("left",-100));
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
			else if(i==5) {
			$("#l" + i).css("left","+=1.5");
			}
			else if(i==6) {
			$("#l" + i).css("left","+=1.6");
			}
		}
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
//Score in der HTML ändern 
//HTML-Score Element wird über ID angesprochen

}


function shoot_em_up() {
	var i=1;
		for(i=1;i<7;i++) {
			$("#r" + i).click(function(){
										$(this).hide();
										//$("#wolke") show() hide()
										score();				
			});
			$("#l" + i).click(function(){
										$(this).hide();
										//$("#wolke") show() hide()
										score();
			});
		}
}

function audio_shoot() {
	var shoot = new Audio('schuss.ogg');
	shoot.play();
}






