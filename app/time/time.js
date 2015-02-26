var app = angular.module('myApp');

app.directive('theTime', function(){
	return {
		restrict: 'E',
		template: 'The current time is: {{time | date: "short"}}',
		link: function($scope, element, attrs){
			var currentTime = Date.now();
			$scope.time = currentTime.toString();
		}
	}
});