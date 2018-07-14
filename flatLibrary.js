;(function(global, $){

    var FlatLib = function(classRoster, currentBeer, elevatorCode) {
      return new FlatLib.init(classRoster, currentBeer, elevatorCode);
    }

    FlatLib.prototype = {

      currentBeerOnTap: function(){
        debugger;
        return `The current beer on tap is ${this.currentBeer}!`
      },

      currentSodaOnTap: function(){
        return `The current soda on tap is ${this.soda}!`
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

          let pair = [selectedPerson1, selectedPerson2]
          return pair;
      }

    }

    FlatLib.init = function(classRoster, currentBeer, elevatorCode){
      var self = this;
      self.classRoster = classRoster;
      self.currentBeer = currentBeer;
      self.elevatorCode = elevatorCode;
    }

    FlatLib.init.prototype = FlatLib.prototype;

    global.FlatLib = FlatLib;


}(window, jQuery));
