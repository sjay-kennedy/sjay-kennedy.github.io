angular.module('myApp', [])

.controller('madController', function ($scope) {
	//$scope.gender = "female";

	$scope.gender = "female";
	$scope.$watch('gender', function () {
	    console.log($scope.gender);
	    if ($scope.gender=="female") {
			$scope.her = "her";
			$scope.her_b = "her";
			$scope.she = "she";
		} else {
			$scope.her = "his";
			$scope.her_b = "him";
			$scope.she = "he";
		}
  	});
	
	
	$scope.published= false;
     $scope.master= {

      name:"name", 
      job:"job title", 
      tedious:"tedious task",
      dirty:"dirty task",
      celebrity:"celebrity",
      useful:"useful skill",
      useless:"useless skill",
      obnox:"obnoxious celebrity",
      huge:"huge number",
      adjective:"adjective"


    };

    $scope.copied = angular.copy($scope.master);
    if ($scope.copied.names !== $scope.master.names && $scope.copied.job !== $scope.master.job) {

        $scope.submit = true;
    };
    $scope.publish = function() {
       // Example with 1 argument
       $scope.published= true;
       
    };
    $scope.reset = function() {
       // Example with 2 arguments
       angular.copy($scope.master, $scope.copied);
       $scope.form.$setPristine();
       $scope.published= false;
    };


});