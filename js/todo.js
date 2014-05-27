var angulartodo = angular.module('angulartodo', []);

angulartodo.controller('todoController', function ($scope) {
  $scope.todos = [
	{text:'learn angular', done:true},
	{text:'build an angular app', done:false}
  ];

});

