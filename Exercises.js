http://learn.themakersquare.com/pages/week-3/javascript-review



------------------------------------------------------------------------------------------------

Individual Exercise #1

Create a function add that takes two parameters x and y and returns the sum.


console.log("1 plus 2 is:", add(1, 2));
console.log("11 plus 4 is:", add(11, 4));

var add = function(a,b){
	return a+b;
};

console.log("1 plus 2 is:", add(1, 2));
console.log("11 plus 4 is:", add(11, 4));

------------------------------------------------------------------------------------------------

Individual Exercise #2
Fix the following code (3 minor problems): - 
FIXED - 
needed ()s at end of jump. 
Needed comma after Bob

// Person is a variable that accepts a hash name: & value

var person = {
  name: "Bob",
  jumpCount: 0,
  jump: function () {
    this.jumpCount = this.jumpCount + 1;
  }
};

person.jump();
person.jump();
console.log("Person should jump twice:", person.jumpCount);

------------------------------------------------------------------------------------------------
Individual Exercise #3
Fix the following code (2 minor problems):

var game = {};
game.wins = 0;

game.incrementWins = function (amount) {
  game.wins += amount; // needed to make game.wins
};

game.incrementWins(2);
console.log("Game wins should be 2:", game.wins);

game.incrementWins(7);
console.log("Game wins should be 9:", game.wins);


------------------------------------------------------------------------------------------------
Individual Exercise #4
Complete the object so that the following code works:

ORIGINAL --- 
var whinyPerson = {
  pokeCount: 0,
  poke: ???
};

whinyPerson.poke();
whinyPerson.poke();
console.log("Poke count should be 2:", whinyPerson.pokeCount);

whinyPerson.poke();
console.log("Poke count should be 3:", whinyPerson.pokeCount);
---------

// increments pokeCount every time whinyPerson.poke is called. 

var whinyPerson = {
  pokeCount: 0,
  poke: function() {
  	this.pokeCount +=1;
  }
};

whinyPerson.poke();
whinyPerson.poke();
console.log("Poke count should be 2:", whinyPerson.pokeCount);

whinyPerson.poke();
console.log("Poke count should be 3:", whinyPerson.pokeCount);

------------------------------------------------------------------------------------------------
Individual Exercise #5
Complete the code so that the following code works:

// ORIGINAL //
var computer = {
  active: false
};
computer.??? = ???;

computer.switchOn();
console.log("Computer should be active:", computer.active === true);

---------

var computer = {
  active: false
};
computer.switchOn = function(){
	this.active = true;
};

computer.switchOn();
console.log("Computer should be active:", computer.active === true);


------------------------------------------------------------------------------------------------












