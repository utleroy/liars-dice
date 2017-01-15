;(function(){
	const app = angular.module('fetchApp', []);

	app.controller('MainController', function($scope){
		$scope.diceRoll = {
			diceNum: [1,2,3,4,5,6]
			
		};
		
		$scope.playerScore = [];

		$scope.diceNum = Math.floor(Math.random() * 5) + 1;
		if($scope.diceNum == 1){
			$scope.showDice1 = true;
		}else if($scope.diceNum == 2){
			$scope.showDice2 = true;
		}else if($scope.diceNum == 3){
			$scope.showDice3 = true;
		}else if($scope.diceNum == 4){
			$scope.showDice4 = true;
		}else if($scope.diceNum == 5){
			$scope.showDice5 = true;
		}

		$scope.diceNum2 = Math.floor(Math.random() * 5) + 1;
		if($scope.diceNum2 == 1){
			$scope.showDice1 = true;
		}else if($scope.diceNum2 == 2){
			$scope.showDice2 = true;
		}else if($scope.diceNum2 == 3){
			$scope.showDice3 = true;
		}else if($scope.diceNum2 == 4){
			$scope.showDice4 = true;
		}else if($scope.diceNum2 == 5){
			$scope.showDice5 = true;
		}
		console.log("Player 1: ", $scope.diceNum);
		$scope.playerScore = $scope.diceNum + $scope.diceNum2;

	});
})();


