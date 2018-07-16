;(function(global){

// Preparing to create an object that will hold our functionality (actual object itself is created below)
    var FlatLib = function(classRoster, currentBeer, currentSoda, elevatorCode) {
      return new FlatLib.initialize(classRoster, currentBeer, currentSoda, elevatorCode);
    }

// Adding methods to FlatLib's protoType for access later:
    FlatLib.prototype = {

      currentBeerOnTap: function(){
        return `The current beer on tap is ${this.currentBeer}!`
      },

      currentSodaOnTap: function(){
        return `The current soda on tap is ${this.currentSoda}!`
      },

      currentElevatorCode: function(){
        return `The current elevator code is ${this.elevatorCode}!`
      },

      formPairs: function (){
          let tempRoster = classRoster;
          let selectedPerson1 = (tempRoster[Math.floor ( Math.random() * tempRoster.length )] )
          let selectedPerson2 = (tempRoster[Math.floor ( Math.random() * tempRoster.length )] )

          let personIndex1 = tempRoster.indexOf(selectedPerson1);
          let personIndex2 = tempRoster.indexOf(selectedPerson2);

          tempRoster.splice(personIndex1, 1);
          tempRoster.splice(personIndex2, 1);

          tempRoster = tempRoster.filter(person => (person !== personIndex1))
          tempRoster = tempRoster.filter(person => (person !== personIndex2))

          let pair = [selectedPerson1, selectedPerson2]
          return pair;
      }

    }

// The actual object is created here:
    FlatLib.initialize = function(classRoster, currentBeer, currentSoda, elevatorCode) {
      this.classRoster = classRoster;
      this.currentBeer = currentBeer;
      this.currentSoda = currentSoda;
      this.elevatorCode = elevatorCode;
    }

// Assigning FlatLib's prototype functionality to the initalize prototype for access later
//This is what allows us to call <FlatLib instance>.method() when we want to access the library
    FlatLib.initialize.prototype = FlatLib.prototype;

// Attach our FlatLib to the global object
    global.FlatLib = FlatLib;

//passing in window object to act as global
}(window));
