(function IIFE(){ // immediately invoked function expression
	
	var xNum, yNum,
		$error = $("#error-show"),
		$answer = $("#answer-show");

	function selectInputValues(){
		xNum = $("#x").val();
		yNum = $("#y").val();
	}

	function showError(){
		$error.css("display" , "block");
		$answer.css("display" , "none");
	}

	function showAnswer(text, answer){
		$answer.css("display" , "block");
		$error.css("display" , "none");
		$("#operator").text(text);
		$("#answer").text(answer);
	}

	function runOperation(type, operation){
		var r;

		selectInputValues();

		r = operation();

		if(isNaN(r)){
			showError();
		} else {
			showAnswer(type, r)
		}
	}

	$( "#add" ).click(function(e) {
		e.preventDefault();

		runOperation("plus", function(){
			return parseInt(xNum) + parseInt(yNum);
		});

	});


	$( "#minus" ).click(function(e) {
		e.preventDefault();

		runOperation("minus", function(){
			return parseInt(xNum) - parseInt(yNum);
		});

	});


}());