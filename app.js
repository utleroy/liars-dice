;(function(){
	const app = angular.module('fetchApp', []);

	app.controller('MainController', function($scope){
		$scope.playerScore = [];
		$scope.hand = function(){
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
			console.log("Dice Roll ", $scope.diceNum);
		}	
			$scope.hand();
		
			$scope.Dice2 = $scope.hand();
			$scope.Dice3 = $scope.hand();
			$scope.Dice4 = $scope.hand();
			$scope.Dice5 = $scope.hand();

		

	});
})();


