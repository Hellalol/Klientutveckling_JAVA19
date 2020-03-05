// Arbeta med AngularJS Moduler
let myApp = angular.module("myApp" , []);

// Skapa en controller
myApp.controller("myCtrl" , function($scope){
  
  // Egenskaper
  $scope.firstName = "John";
  $scope.lastName  = "Doe";
  
  // Metoder
  $scope.fullName = function(){
    return $scope.firstName + " " + $scope.lastName;
  }
});

// En controller som hanterar bilar
myApp.controller("carCtrl", function($scope){

  // Skapa en array som innehåller ett antal bilar
  $scope.cars = [
    {
      Regnr : "ABC123",
      Price : 50000,
      Model : "Volvo V40"
    },
    {
      Regnr : "ZYZ123",
      Price : 70000,
      Model : "Volvo XC60"
    },
    {
      Regnr : "BVC123",
      Price : 110000,
      Model : "Volvo XC90"
    },
  ];

}); 


// En controller som hanterar en lista
myApp.controller("listCtrl", function($scope){

  $scope.names = [
    "Mahmud", 
    "Yasmin", 
    "Mehdi", 
    "Hoda", 
    "Mariam", 
    "Dania", 
    "Yasir"
  ]

}); 