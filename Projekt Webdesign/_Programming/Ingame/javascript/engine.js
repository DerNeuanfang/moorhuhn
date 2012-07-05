/**
 * @author Sebastian Göltz & Marc Klein
 */
 
 //Globale Variable
 var amu=5;
 var score_value = 0;
 var seconds = 10;
 var timer_stop = false;
 
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

    //set timer
    var timer_intervalId = window.setInterval(countdown, 1000);
    //draw the chicken
    var draw_right_IntervalId = window.setInterval(drawchicken_right,10);
    var draw_left_IntervalId = window.setInterval(drawchicken_left,10);
    shoot_em_up();

    if(timer_stop == true)
    {
        alert('STOP');
        window.clearInterval(draw_left_IntervalId);
        window.clearInterval(draw_right_IntervalId);
        window.clearInterval(timer_intervalId);
    }

    /**

    */

	
	/*if (timer() == 0) { 
	*clear interval(drawIntervalId)
	*open highscore page
	*/

}
function countdown(){
    var element = document.getElementById('time');
    if(seconds >= 0)
    {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = seconds % 60;
        element.innerHTML=
            leadingzero(h) + ':' +
            leadingzero(m) + ':' +
            leadingzero(s);
        seconds--;
    }
    else
    {
        timer_stop = true;
    }

}

function leadingzero(number)
{
    return (number < 10) ? '0' + number : number;
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
	document.getElementById('score').innerHTML = score_value+=100;
}


function shoot_em_up() {
	var i=1;
	//Variable für die "#window".click function
	var amu_request_1;
	
	//Schuss Sound beim klicken aufs "Game Fenster"
	/*
	$("#window").click(function(){ 	
		
		if(ammunition() === 1) {
			audio_shoot();
			amu = amu -1;
			
			for(i=1;i<7;i++) {
			$("#r" + i).click(function(){
					$(this).hide();
					score();
			});
			
			$("#l" + i).click(function(){
				$(this).hide();
				score();
			});
			}	
		}
		else $("#window").click(function(){audio_noammunition();});
	});*/
	
	$("#window").click(function () {
		if(ammunition() === 1) {
			audio_shoot();
			amu--;
		}
		else sound_noammuntion();
	});
	
	//Click function zum Huhn-Abschuss
		for(i=1;i<7;i++) {
			$("#r" + i).click(function(){
				if(ammunition() === 1) {
					$(this).hide("drop", { direction: "down" }, 1000);
					score();
				}
			});
			
			$("#l" + i).click(function(){
				if(ammunition() === 1) {
				$(this).hide("drop", { direction: "down" }, 1000);
				score();
				}
			});
		}	
		
}

function audio_shoot() {
	var shoot = new Audio('schuss.ogg');
	shoot.play();
}

function audio_reload() {
	var reload = new Audio('reload.ogg');
	reload.play();
}

function audio_noammunition() {
	var noammunition = new Audio('noammunition.ogg');
	noammunition.play();
}


function ammunition() {
	
	if (amu > 0) {
		return 1;
	}
	else {
		return 0;
	}
	
}

function reload () {

	//amu = 5;

}







