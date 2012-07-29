/**
 * @author Sebastian Göltz & Marc Klein
 */
 
 //Globale Variable
 var amu=5;
 var score_value = 0;
 var seconds = 40;
 var start_seconds = 3;
 var timer_stop = 0;
 var KEY_SPACE = 32; 
 
$(document).ready(function() {
//Start when DOM is fully loaded
main();
	
});



function main () {
	start_timer_IntervalId = window.setInterval(timer_countdown, 1000);
}

function countdown() {
    var element = document.getElementById('time');
    if(seconds >= 0)
    {

        if (seconds === 0) {
        	//alert("ENDE!");
        	window.clearInterval(draw_left_IntervalId);
        	window.clearInterval(draw_right_IntervalId);
        	window.clearInterval(timer_intervalId);
        	load_endscreen();
			fade_game_out();
        	//document.location.href = "index.html";
        } else {
    	
	        var h = Math.floor(seconds / 3600);
	        var m = Math.floor((seconds % 3600) / 60);
	        var s = seconds % 60;
	        element.innerHTML=
	            leadingzero(h) + ':' +
	            leadingzero(m) + ':' +
	            leadingzero(s);
	        seconds--;
        }

    }

}

function timer_countdown() {
	var element = document.getElementById('start_time');
	if(start_seconds >= 0)
	{
		if(start_seconds === 0)
		{
			window.clearInterval(start_timer_IntervalId);
			$('#start_div').css("visibility", "hidden");
			var i=0;
			//Hühner y values das erste mal initialsieren
			for(i=1;i<7;i++) setposY(1 , i);
			for(i=1;i<7;i++) setposY(2 , i);
	
			//Munition setzen
			set_position_ammo();
	
			//draw the chicken
    		draw_right_IntervalId = window.setInterval(drawchicken_right,10);
    		draw_left_IntervalId = window.setInterval(drawchicken_left,10);
    
    		//set timer
    		timer_intervalId = window.setInterval(countdown, 1000);    
			shoot_em_up();
	
			//Beim drücken einer Taste ruft er die function reload auf
			document.onkeydown = reload;

		}
		else
		{
			var s = start_seconds % 60;
			element.innerHTML = leadingzero(s);
			start_seconds --; 
		}
	}
}

function load_endscreen()
{
	//alert("hallo");
	$("#status").fadeIn(500);
	//$('#status').css("visibility", "visible");
	$('#status').css("z-index", "200");
	document.getElementById('endscore').innerHTML = score_value;
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

//Zufalls y-Startwert
function createYvalue() {
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

function score() {
	document.getElementById('score').innerHTML = score_value+=100;
}


function shoot_em_up() {
	var i=1;

	//Schuss Sound beim klicken aufs "Game Fenster"
	
	$("#window").click(function () {
		if(ammunition() === 1) {
			audio_shoot();
			reduce_ammo();
			
			//muni hide
		}
		else sound_noammuntion();
	});
	
	//Click function zum Huhn-Abschuss
		for(i=1;i<7;i++) {
			$("#r" + i).click(function(){
				if(ammunition() === 1) {
					$(this).hide("drop", { direction: "down" }, 500);
					score();
					
				}
			});
			
			$("#l" + i).click(function(){
				if(ammunition() === 1) {
				$(this).hide("drop", { direction: "down" }, 500);
				score();
				
				}
			});
		}	
		
}

function audio_shoot() {
	var shoot = new Audio('sounds/schuss.ogg');
	shoot.play();
}

function audio_reload() {
	var reload = new Audio('sounds/reload.ogg');
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

function reload (event_space) {
	var i;
	if(event_space.keyCode == KEY_SPACE) {
		if(amu < 1) {
			audio_reload();
			amu= 5; 
					//muni show
			for(i = 1; i<6; i++)
			{
				$('#m' + i).show();
			}
		}
	}
	else return 0;
}

function set_position_ammo(){
	var i;
	var s = parseInt($(".ammunition").css("left"));

	for(i = 1; i < 6; i++)
	{
		$("#m" + i).css("left", s);
		s = s + 50;
	}
}

function reduce_ammo(){
	$("#m" + amu).hide("drop", { direction: "up" }, 200);
	amu--;
}


function fade_game_out() {

		for(i=1;i<7;i++) {j
			$("#r" + i).fadeOut(500);
			$("#l" + i).fadeOut(500);
		}	
		
			for(i=1;i<7;i++) {
			$("#m" + i).fadeOut(500);
		}
		
		amu=0;
	
		$("#score").fadeOut(500);
		$("#time").fadeOut(500);
		$("#ammunition").fadeOut(500);
		
}

function setHighscore() {
	var erg = $('input:text[name=vorname]').val();
	var conn = new XMLHttpRequest();
    conn.open("GET", "http://localhost:8000/setHighscore?name="+erg+"&score="+score_value);
	conn.onreadystatechange = function() {
        console.log(conn.status);
        console.log(conn.readyState);
    }
    conn.send();
	alert("Highscore wurde gesetzt");
}




