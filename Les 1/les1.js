/* Opdracht 2.1 
///Ik start hier met een nieuwe constructor functie met het object Persoon met een variable name, property name en method speak. In de method speak geef ik aan dat de console 'Hi my name is ' + ingevulde variable voor name moet loggen.
function Persoon(name){
	this.name = name;
	this.speak = function(){
		console.log('Hi my name is ' + this.name)
	}
}

// Hier maak een nieuw persoon met de naam Ted. En roep ik het object aan met the method speak.
ted = new Persoon('Ted')
ted.speak() 
*/

/* Opdracht 2.2 */
function Persoon(name){
	this.name = name;
	this.speak = function(){
		console.log('Hi my name is ' + this.name)
	};
}

Persoon.prototype.walk = function() {
	console.log('Going for a walk.')
};

Persoon.prototype.eat = function() {
	console.log('I want dinner!!')
};

ted = new Persoon('Ted')
ted.speak() 
ted.walk()
ted.eat() 


/* Opdracht 2.3  */