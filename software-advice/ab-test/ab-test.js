'use strict';

angular.module('myApp.abtest', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ab-test', {
    templateUrl: 'ab-test/ab-test.html',
    controller: 'abTestCtrl'
  });
}])
.controller('abTestCtrl', ['$scope', function($scope) {
//.controller('abTestCtrl', function( $scope) {
  //generate random modal URL from array
	var urlArray = ['modalA', 'modalB'];
	$scope.random = urlArray[Math.floor(Math.random() * urlArray.length)];
	$scope.randomUrl = 'partials/'+$scope.random+'.html';
	console.log("Current Test: ", $scope.random);

	// generate session ID based on timestamp
	$("#modalBtn").click(function(){
        $("#abModal").modal({
        	backdrop:'static'
        });
		var quoteDate = new Date();
		var session = {"session_id": quoteDate};
		console.log("Session ID: ", session); 
    });

	// persistent store of tested options	
	if (!localStorage.getItem("testOptions")){
		var testOptions= [];
		testOptions.push($scope.random);
		localStorage.setItem("testOptions", testOptions);
		
	} else {
		var testOptions =[];
		testOptions.push(localStorage.getItem("testOptions"));
		testOptions.push($scope.random);
		localStorage.setItem("testOptions", testOptions);
		var testHistory = localStorage.getItem("testOptions");
		console.log("Test History: ", testHistory)
	}
	
	// eventlistener on email input
	var allTyped = [];
	var newString;
	var result;
	$scope.change = function(e) {
		var typed = e.originalEvent.key;		
		allTyped.push(typed);
		newString = allTyped.join();
		result = newString.replace(/[, ]+/g, "").trim();
		console.log("Email Listener: ",result);
      };

	//capture form data and add current test option
	$scope.master = {};
	$scope.submit = function(user) {
		user.test = $scope.random;
		$scope.master = {};
		$scope.master = user;
		console.log("Customer Info: ", $scope.master);
		$("#abModal").modal('hide');
		
		$scope.form.getQuote.$setPristine();
		$scope.form.getQuote.$setUntouched();
		$scope.form.getQuote.$submitted = false;
		delete $scope.user;
		  
	};

//});
}]);

