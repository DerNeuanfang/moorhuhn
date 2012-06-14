/**
 * @author kleinm
 */

function main () {
//var sound=new Audio(pfad);

//Schriftzug "Moorhuhn" wird animiert
//ich baue eine delay funktion ein aus folgendem Grund:
//Ich habe die Möglichkeit in animate einen delay zu platzieren, dadurch wird die animation allerdings träge und undynamisch
//Mit der delay() funktion verhindere ich das
	
	$("#M").delay(1550).animate({
	"marginLeft": "+=150"
	});

	$("#O1").delay(1350).animate({
	"marginLeft": "+=219"
	});

	$("#O2").delay(1150).animate({
	"marginLeft": "+=273"
	});

	$("#R").delay(950).animate({
	"marginLeft": "+=331"
	});

	$("#H").delay(750).animate({
	"marginLeft": "+=381"
	});

	$("#U").delay(550).animate({
	"marginLeft": "+=430"
	});

	$("#H2").delay(350).animate({
	"marginLeft": "+=480"
	});
	
	$("#N").delay(150).animate({
	"marginLeft": "+=530"
	});


//Schüsse mit einem delay anzeigen (erst nachdem der "Moorhuhn"-Schriftzug im Bild ist)
	$("#sg1").delay(2000).show(0);
	window.setTimeout(function() {sound.play()},2000);
	$("#sg2").delay(2250).show(0);
	window.setTimeout(function() {sound.play()},2250);
	$("#sg3").delay(2500).show(0);
	window.setTimeout(function() {sound.play()},2500);
	$("#sk1").delay(2750).show(0);
	window.setTimeout(function() {sound.play()},2750);
	
//Moorhuhn-Bild animieren
	$("#huhnstartpage").delay(2900).fadeIn(1700);
	
//Navi-Leiste animieren
	$("#navi_with_animation").delay(2900).fadeIn(1700);
 

}