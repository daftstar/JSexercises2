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

Individual Exercise #6
Create a puppy object:

// Original 
// With a property mood that points to a string 'hungry'
// With a property feed that points to a function:
// This function sets the puppy's mood to 'fed'
// You must use this in your function
// var puppy = ???;

// console.log("Puppy should be hungry:", puppy.mood);
// puppy.feed();
// console.log("Puppy should be fed:", puppy.mood);


var puppy = {
  mood: "hungry"
};

puppy.feed = function (){
  this.mood = "fed"
};


console.log("Puppy should be hungry:", puppy.mood);
puppy.feed();
console.log("Puppy should be fed:", puppy.mood);

------------------------------------------------------------------------------------------------
*** **** * *** * ** ** * * * * ** * * * **** * * * ** * * !!!!
Individual Exercise #7

Write a function (not a constructor) createTrashCan that:
Takes one parameter trashAmount
Returns an object that:
Has one property trash with the value trashAmount
----
var can = createTrashCan(2);
console.log('Trash can should have 2 trash:', can.trash);
----


// var createTrashCan = function(trashAmount){
//   var trash = this.trashAmount
// };


// var createTrashCan = function(trashAmount){
//   var trash = 0,
//   trash = trash + trashAmount;
// };

// function createTrashCan(trashAmount) {
//   var trash = this.trashAmount;
// };

createTrashCan = function(trashAmount){
  var something = {
    trash: trashAmount
  }
  return something;
}

var can = createTrashCan(2);
console.log('Trash can should have 2 trash:', can.trash);


------------------------------------------------------------------------------------------------



