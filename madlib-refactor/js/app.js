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
	
	//TO DO make an array of objects with attributes values
	$scope.published= false;
     /*$scope.master= {

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


    };*/
    // choose more semantic object names rather than "copied"
    /*$scope.copied = angular.copy($scope.master);
    if ($scope.copied.names !== $scope.master.names && $scope.copied.job !== $scope.master.job) {

        $scope.submit = true;
    };*/
    $scope.publish = function() {
       if($scope.form.$valid) {
        console.log('The form is valid');
         $scope.published= true;
      } else {
        console.log('The form is invalid');
        $scope.published= false;
      }

      console.log('Form Submitted: ', $scope.data);
      
       
    };
    $scope.reset = function() {
       // Example with 2 arguments
       /*angular.copy($scope.master, $scope.copied);*/
       $scope.words ={};
       $scope.form.$setPristine();
       $scope.published= false;
    };


});