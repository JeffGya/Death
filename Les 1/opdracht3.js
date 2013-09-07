// Opdracht 3.1: Local Scope
function localScope(iterator) {
	var iterator = 3;
	var max = 10;
	var min = 0;
};

// Opdracht 3.2: Global Scope
var iterator = 1;
var max = 10;
var min = 0;

// Opdracht 3.3: Closure
/* 	Een closure is een functie met een local scope variable.
*	Binnen deze functie zit nog een functie die toegang heeft tot de
*	local scope variable.
*	Elke keer als de Closure wordt aangeroepen. Maakt hij een nieuwe 
*	Closure. Het wordt dan een soort loop. Dus als de variable een array 
*	is, pakt hij telkens het volgende element in de rij.
*	Reference: http://stackoverflow.com/a/7285658/2048338
*	Hieronder een voorbeeld.
*/

//Closure functie wordt aangemaakt.
function makeCake(){
	// Ik maak een variable cake met een array erin.
	var cake = ['slagroom', 'frambozen', 'chocolade',];

	return {
		//Hier maak ik gebruk van een object literal
		getCake: function() {
			/* 	Hier log ik een zinnetje met daarin cake.pop(). 
			*	cake alleen geeft mij de volledige array terug. 
			*	cake.pop() verwijderd het laatste element in de array en stuurt die terug. 
			*	Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
			*/
			console.log('Ik heb nu een ' + cake.pop() + 'taart');
		}
	};
}

var magicCake = makeCake();

// Elke closure stuurt een andere taartsoort terug.
magicCake.getCake(); 
magicCake.getCake();
magicCake.getCake();