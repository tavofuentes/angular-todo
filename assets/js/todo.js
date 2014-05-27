var angulartodo = angular.module('angulartodo', []);

angulartodo.controller('todoController', function ($scope) {
	$scope.todoItems = [
	];

	$scope.addItem = function (){
		$scope.todoItems.push({ text: $scope.newItem, done : false });
		$scope.newItem = '';
	};

	$scope.anyItems = function(){
		if ($scope.todoItems.length)
			return true;
		else
			return false;
	};

	$scope.getDonePercentaje = function(){
		done_total = 0;
		for (var i = 0; i < $scope.todoItems.length; i++)
			if ($scope.todoItems[i].done)
				done_total++;
		return parseInt( (done_total/$scope.todoItems.length)*100);
	};

	$scope.deleteItem = function (item, key){
		$scope.todoItems.splice(key,1);
	};

});

