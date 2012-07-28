/**
 * @author Sebastian Göltz & Marc Klein
 */

$(document).ready(function() {
//Start when DOM is fully loaded
main();
	
});

function main() {


//Soundvariable deklarieren
var schuss = new Audio('sounds/schuss.ogg');
var schuss2 = new Audio('sounds/schuss.ogg');
var schuss3 = new Audio('sounds/schuss.ogg');
var schuss4 = new Audio('sounds/schuss.ogg');
//var schuss3 = new Audio('schuss.ogg');
//var schuss4 = new Audio('schuss.ogg');
//window.setTimeout(function() {schuss.play()},2000);
//Schriftzug "Moorhuhn" wird animiert
//ich baue eine delay funktion ein aus folgendem Grund:
//Ich habe die M�glichkeit in animate einen delay zu platzieren, dadurch wird die animation allerdings tr�ge und undynamisch
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


//Sch�sse mit einem delay anzeigen (erst nachdem der "Moorhuhn"-Schriftzug im Bild ist)
	
	$("#sg1").delay(2000).show(0);
	window.setTimeout(function() {schuss.play()},2000);
	$("#sg2").delay(2250).show(0);
	window.setTimeout(function() {schuss2.play()},2250);
	$("#sg3").delay(2500).show(0);
	window.setTimeout(function() {schuss3.play()},2500);
	$("#sk1").delay(2750).show(0);
	window.setTimeout(function() {schuss4.play()},2750);
	
//Moorhuhn-Bild animieren
	$("#huhnstartpage").delay(2900).fadeIn(1700);

//Buttons animieren
//fadeIn
	$("#button_start_0").delay(2900).fadeIn(1700);
	$("#button_start_1").delay(3100).fadeIn(1700);
	$("#button_start_2").delay(3300).fadeIn(1700);
	$("#button_start_3").delay(3500).fadeIn(1700);
	
	
//mouseover effekt
	$("#button_start_0").mouseover(function(){$(this).fadeOut(0);$(this).fadeIn(100);});
	$("#button_start_1").mouseover(function(){$(this).fadeOut(0);$(this).fadeIn(100);});
	$("#button_start_2").mouseover(function(){$(this).fadeOut(0);$(this).fadeIn(100);});
	$("#button_start_3").mouseover(function(){$(this).fadeOut(0);$(this).fadeIn(100);});
}