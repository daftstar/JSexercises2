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
  var something = {  // you have to create an object in order to return the value
    trash: trashAmount
  }
  return something;
}

var can = createTrashCan(2);
console.log('Trash can should have 2 trash:', can.trash);


------------------------------------------------------------------------------------------------

Individual Exercise #8
Write a function (not a constructor) createBattery that:

Takes one parameter charge
Returns an object that:
Has a property energy with the value charge
Has a property use that points to a function:
Takes one parameter amount



Deducts energy by that amount, unless amount is greater than energy
Javascript has no unless keyword.

var battery = createBattery(3);
console.log('Battery should have 3 energy:', battery.energy);

battery.use(2);
console.log('Battery should have 1 energy:', battery.energy);

battery.use(5);
console.log('Battery should have 1 energy:', battery.energy);



createBattery = function(charge){
  var object = {
    energy: charge,
    use: function(amount){
      if (amount < this.energy){
        this.energy -= amount;
      };
      // if (amount > this.energy){
      //   energy = energy;
      // }
      // else(amount < this.energy){
      //   energy = energy-amount;        
      // }
    }
  }
  return object;
};

var battery = createBattery(3);
console.log('Battery should have 3 energy:', battery.energy);

battery.use(2);
console.log('Battery should have 1 energy:', battery.energy);

battery.use(5);
console.log('Battery should have 1 energy:', battery.energy);



------------------------------------------------------------------------------------------------
Individual Exercise #9
Create a Dog constructor that:

Takes one parameter name
  Has a property name that points to a string
  Has a property hunger that points to the number 10
  Has a property feed that points to a function:
                        Takes one parameter food
      If food is 'steak', deduct hunger by two
      If food is 'toy', deduct hunger by zero
      Else deduct hunger by one


      Do not allow hunger to go below zero
      If hunger is zero, alert a snooze string (ex: zZzzZz)


var Dog = function(name) {
  this.name = name;
  this.hunger = 10;
  this.feed = function(food)
    {
      if (food == 'steak'){
        this.hunger -=2;
      }
      else if (food == "toy")
      {
        this.hunger -=0;
      }
      else 
      {
        this.hunger -=1;
      }   
  };
};


var billy = new Dog('Billy');
console.log("Billy should have 10 hunger points:", billy.hunger);

billy.feed('steak');
console.log("Billy should have 8 hunger points:", billy.hunger);

billy.feed('toy');
console.log("Billy should have 8 hunger points:", billy.hunger);

billy.feed('bug');
console.log("Billy should have 7 hunger points:", billy.hunger);

billy.feed('steak');
billy.feed('steak');
billy.feed('steak');
// You should see an alert after this next line
billy.feed('steak');
console.log("Billy should have 0 hunger points:", billy.hunger);

------------------------------------------------------------------------------------------------

Individual Exercise #10
Fix the following code (3 minor errors) and complete result so that the code outputs "Surprise!"

var house = 
  {
  room: {
    emptyBox: {},
    size: '50 sqft'
  },

  otherRoom: {
    box: {
      writtenNote: "Surprise!"
    },

    size: '35 sqft'
  }
};

var result = house.otherRoom.box

console.log("You find a written note:", result);

------------------------------------------------------------------------------------------------
Individual Exercise #11
Complete the missing lines so that the following code works:


----

var calculator = {};

// ???

var result = calculator.multiply(3, 7);
console.log('3 time 7 is', result);

----------------

var calculator = {
  multiply: function(a,b){
    return a*b;
  }
}


var result = calculator.multiply(3, 7);
console.log('3 time 7 is', result);





------------------------------------------------------------------------------------------------

Individual Exercise #12
Complete the missing lines so that the following code works:

var createHorn = function () {
  var horn = {};
  // ???
  return horn;
};

var myHorn = createHorn();
console.log('Horn should honk a honky sound:', myHorn.honk());

----------


var createHorn = function () {
  var horn = {
    honk: function(){
      return "Honk honk"
    }
  };
  return horn;
};

var myHorn = createHorn();
console.log('Horn should honk a honky sound:', myHorn.honk());


------------------------------------------------------------------------------------------------

Individual Exercise #13

Complete the constructor so that the following code works:
var Horn = function () {
  // ???
};

var horn = new Horn();
console.log('Horn should honk a honky sound:', horn.honk());

------------

var Horn = function () {
  this.honk = function(){
    return "honk sir honk";
  }
};

var horn = new Horn();
console.log('Horn should honk a honky sound:', horn.honk());







