/* Opdracht 2.1: Constructor object */
///Ik start hier met een nieuwe constructor functie met het object person met een variable name, property name en method speak. In de method speak geef ik aan dat de console 'Hi my name is ' + ingevulde variable voor name moet loggen.
function person(name){
	this.name = name;
	this.speak = function(){
		console.log('Hi my name is ' + this.name)
	}
}

// Hier maak een nieuw person met de naam Ted. En roep ik het object aan met the method speak.
ted = new person('Ted')

*/

/* Opdracht 2.2: Prototype */
function person(name){
	this.name = name;
	this.speak = function(){
		console.log('Hi my name is ' + this.name)
	};
}
 person.prototype.walk = function() {
	console.log('Hi, my name is ' + this.name + ' and I walk');
};
 person.prototype.eat = function() {
	console.log('Hi, my name is ' + this.name + ' and I eat');
};

ted = new person('Ted')



/* Opdracht 2.3: Object Literal */
var person{
	speak: function(){
		console.log('Hi my name is ' + this.name) 
	},

	walk: function() {
		console.log('Hi, my name is ' + this.name + ' and I walk');
	},

	eat: function() {
		console.log('Hi, my name is ' + this.name + ' and I eat');
	};
};

ted = new person('Ted')
