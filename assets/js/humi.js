(function(){
	var app = angular.module('humi',[]);


	app.controller('AlumnoController', ['$scope','$http' , function($scope,$http){
		$http.get('api/alumnos').success(function(data)){
			$scope.alumnos = data;
		}
	}]);
})();